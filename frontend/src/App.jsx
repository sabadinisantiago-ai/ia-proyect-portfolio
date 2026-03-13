import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

import './App.css'

export default function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch all portfolio data from the API
  useEffect(() => {
    fetch('/api/all')
      .then(res => {
        if (!res.ok) throw new Error('API unavailable')
        return res.json()
      })
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(err => {
        console.warn('API not reachable, using fallback:', err.message)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    // Observe after a short delay so DOM is ready
    const timer = setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [data, loading])

  if (loading) {
    return (
      <div className="loader">
        <div className="loader__dot"></div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={data?.profile} />
        <About profile={data?.profile} />
        <Projects projects={data?.projects} />
        <Skills skills={data?.skills} />
        <Experience experience={data?.experience} goals={data?.goals} />
        <Contact contact={data?.contact} />
      </main>
      <footer className="footer">
        <div className="container">
          <p>
            Designed & built by <span className="text-accent">Santiago Sabadini</span>
          </p>
        </div>
      </footer>
    </>
  )
}
