'use client'

import { useEffect, useState } from 'react'
import {
  fetchCertificates,
  fetchProjects,
  fetchTechStacks,
  fetchExperiences,
} from '@/lib/portfolioService'

export default function usePortfolio() {
  const [projects, setProjects] = useState<any[]>([])
  const [certificates, setCertificates] = useState<any[]>([])
  const [techStacks, setTechStacks] = useState<any[]>([])
  const [experiences, setExperiences] = useState<any[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPortfolio()
  }, [])

  const loadPortfolio = async () => {
    const cachedProjects = sessionStorage.getItem('portfolioProjects')
    const cachedCertificates = sessionStorage.getItem('portfolioCertificates')
    const cachedTechStacks = sessionStorage.getItem('portfolioTechStacks')
    const cachedExperiences = sessionStorage.getItem('portfolioExperiences')

    if (cachedProjects) {
      setProjects(JSON.parse(cachedProjects))
    }

    if (cachedCertificates) {
      setCertificates(JSON.parse(cachedCertificates))
    }

    if (cachedTechStacks) {
      setTechStacks(JSON.parse(cachedTechStacks))
    }

    if (cachedExperiences) {
      setExperiences(JSON.parse(cachedExperiences))
    }

    const [
      projectsData,
      certificatesData,
      techStacksData,
      experiencesData,
    ] = await Promise.all([
      fetchProjects(),
      fetchCertificates(),
      fetchTechStacks(),
      fetchExperiences(),
    ])

    setProjects(projectsData || [])
    setCertificates(certificatesData || [])
    setTechStacks(techStacksData || [])
    setExperiences(experiencesData || [])

    sessionStorage.setItem(
      'portfolioProjects',
      JSON.stringify(projectsData || [])
    )

    sessionStorage.setItem(
      'portfolioCertificates',
      JSON.stringify(certificatesData || [])
    )

    sessionStorage.setItem(
      'portfolioTechStacks',
      JSON.stringify(techStacksData || [])
    )

    sessionStorage.setItem(
      'portfolioExperiences',
      JSON.stringify(experiencesData || [])
    )

    setLoading(false)
  }

  return {
    projects,
    certificates,
    techStacks,
    experiences,
    loading,
  }
}