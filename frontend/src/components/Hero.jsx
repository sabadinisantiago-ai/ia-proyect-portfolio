import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero({ profile }) {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (el) el.classList.add('hero--visible')
  }, [])

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="container hero__content">
        <p className="hero__greeting">Hola, mi nombre es</p>
        <h1 className="hero__name">
          {profile?.name || 'Santiago Sabadini'}<span className="text-accent">.</span>
        </h1>
        <h2 className="hero__title">
          {profile?.title || 'Python Developer & AI Enthusiast'}
        </h2>
        <p className="hero__bio">
          {profile?.bio_en || profile?.bio || ''}
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-ghost">Get in Touch</a>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  )
}
