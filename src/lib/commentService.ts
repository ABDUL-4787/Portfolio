import { supabase, isSupabaseConfigured } from '@/lib/supabase'

// Helper for local storage fallback
const getLocalComments = (): any[] => {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem('portfolio-comments')
  return stored ? JSON.parse(stored) : []
}

const saveLocalComments = (comments: any[]) => {
  if (typeof window === 'undefined') return
  localStorage.setItem('portfolio-comments', JSON.stringify(comments))
}

export const fetchCommentsService = async () => {
  if (!isSupabaseConfigured) {
    return getLocalComments()
  }
  try {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .order('is_pinned', { ascending: false })
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching comments from Supabase:', error)
    return getLocalComments()
  }
}

export const likeCommentService = async (
  id: number,
  currentLikes: number
) => {
  const newLikes = (currentLikes || 0) + 1

  if (!isSupabaseConfigured) {
    const local = getLocalComments()
    const updated = local.map((c: any) => c.id === id ? { ...c, likes: newLikes } : c)
    saveLocalComments(updated)
    return newLikes
  }

  try {
    const { error } = await supabase
      .from('comments')
      .update({ likes: newLikes })
      .eq('id', id)

    if (error) throw error
    return newLikes
  } catch (error) {
    console.error('Error updating comment likes in Supabase:', error)
    const local = getLocalComments()
    const updated = local.map((c: any) => c.id === id ? { ...c, likes: newLikes } : c)
    saveLocalComments(updated)
    return newLikes
  }
}

export const uploadCommentImageService = async (
  image: File
) => {
  if (!isSupabaseConfigured) {
    // Convert file to base64 string for local storage representation
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        resolve(reader.result as string)
      }
      reader.onerror = reject
      reader.readAsDataURL(image)
    })
  }

  try {
    const fileName = `${Date.now()}-${image.name}`

    const { error } = await supabase.storage
      .from('comments')
      .upload(fileName, image)

    if (error) throw error

    const { data } = supabase.storage
      .from('comments')
      .getPublicUrl(fileName)

    return data.publicUrl
  } catch (error) {
    console.error('Error uploading comment image to Supabase:', error)
    // Fall back to base64 conversion
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        resolve(reader.result as string)
      }
      reader.onerror = reject
      reader.readAsDataURL(image)
    })
  }
}

export const createCommentService = async ({
  name,
  comment,
  imageUrl,
}: {
  name: string
  comment: string
  imageUrl: string | null
}) => {
  if (!isSupabaseConfigured) {
    const local = getLocalComments()
    const newComment = {
      id: Date.now(), // simple numeric ID
      name,
      comment,
      image_url: imageUrl,
      likes: 0,
      replies: [],
      is_pinned: false,
      created_at: new Date().toISOString()
    }
    local.unshift(newComment)
    saveLocalComments(local)
    return newComment
  }

  try {
    const { data, error } = await supabase
      .from('comments')
      .insert([
        {
          name,
          comment,
          image_url: imageUrl,
          likes: 0,
          replies: [],
          is_pinned: false,
        },
      ])
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error creating comment in Supabase:', error)
    const local = getLocalComments()
    const newComment = {
      id: Date.now(),
      name,
      comment,
      image_url: imageUrl,
      likes: 0,
      replies: [],
      is_pinned: false,
      created_at: new Date().toISOString()
    }
    local.unshift(newComment)
    saveLocalComments(local)
    return newComment
  }
}