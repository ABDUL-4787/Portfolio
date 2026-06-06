import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { fallbackProjects, fallbackCertificates, fallbackTechStacks, fallbackExperiences } from '@/data/portfolioData'

export const fetchProjects = async () => {
  if (!isSupabaseConfigured) {
    return fallbackProjects
  }
  try {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', {
        ascending: true,
      })

    return data && data.length > 0 ? data : fallbackProjects
  } catch (error) {
    console.error('Error fetching projects from Supabase:', error)
    return fallbackProjects
  }
}

export const fetchCertificates = async () => {
  if (!isSupabaseConfigured) {
    return fallbackCertificates
  }
  try {
    const { data } = await supabase
      .from('certificates')
      .select('*')
      .order('created_at', {
        ascending: true,
      })

    return data && data.length > 0 ? data : fallbackCertificates
  } catch (error) {
    console.error('Error fetching certificates from Supabase:', error)
    return fallbackCertificates
  }
}

export const fetchTechStacks = async () => {
  if (!isSupabaseConfigured) {
    return fallbackTechStacks
  }
  try {
    const { data } = await supabase
      .from('tech_stack')
      .select('*')
      .order('created_at', {
        ascending: true,
      })

    return data && data.length > 0 ? data : fallbackTechStacks
  } catch (error) {
    console.error('Error fetching tech stack from Supabase:', error)
    return fallbackTechStacks
  }
}

export const fetchExperiences = async () => {
  return fallbackExperiences
}