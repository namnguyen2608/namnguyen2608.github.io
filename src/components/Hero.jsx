import { useEffect, useRef } from 'react'
import './Hero.css'

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/145739305?v=4'

export default function Hero() {
  const cursorRef = useRef(null)

  useEffect(() => {
    // Typewriter effect
    const phrases = ['Java Developer', 'Python Developer', 'Web Developer']
    let pIndex = 0, cIndex = 0, deleting = false
    const el = document.getElementById('typewriter-text')
    if (!el) return

    const type = () => {
      const current = phrases[pIndex]
      if (!deleting) {
        el.textContent = current.slice(0, cIndex + 1)
        cIndex++
        if (cIndex === current.length) {
          deleting = true
          setTimeout(type, 1800)
          return
        }
      } else {
        el.textContent = current.slice(0, cIndex - 1)
        cIndex--
        if (cIndex === 0) {
          deleting = false
          pIndex = (pIndex + 1) % phrases.length
        }
      }
      setTimeout(type, deleting ? 60 : 100)
    }
    const t = setTimeout(type, 400)
    return () => clearTimeout(t)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero__particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            opacity: 0.2 + Math.random() * 0.4
          }} />
        ))}
      </div>

      <div className="container hero__content">
        <div className="hero__badge animate-fade-in-up delay-1">
          <span className="badge-dot" />
          Available for opportunities
        </div>

        <div className="hero__main">
          <div className="hero__text">
            <p className="hero__greeting animate-fade-in-up delay-2">
              Hello, world! I am
            </p>
            <h1 className="hero__name animate-fade-in-up delay-2">
              Nguyen <span className="gradient-text">Nam</span>
            </h1>
            <div className="hero__role animate-fade-in-up delay-3">
              <span id="typewriter-text" className="typewriter-text">Full-Stack Developer</span>
              <span className="cursor" ref={cursorRef}>|</span>
            </div>
            <p className="hero__bio animate-fade-in-up delay-4">
              <em className="quote-mark">"</em>Nothing is true, everything is permitted<em className="quote-mark">"</em>
              <br />
              <span className="bio-sub">Crafting elegant solutions through clean code and creative thinking.</span>
            </p>

            <div className="hero__actions animate-fade-in-up delay-5">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                View Projects
              </button>
              <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="hero__socials animate-fade-in-up delay-6">
              <a href="https://github.com/namnguyen2608" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a href="mailto:namnguyen2608@email.com" className="social-link" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hero__avatar-wrap animate-fade-in-up delay-3">
            <div className="avatar-ring">
              <div className="avatar-container">
                <img src={AVATAR_URL} alt="Nam Nguyen avatar" className="avatar-img" />
              </div>
            </div>
            <div className="avatar-badge avatar-badge--one">
              <span>☕</span> Java Dev
            </div>
            <div className="avatar-badge avatar-badge--two">
              <span>🚀</span> Open to Work
            </div>
          </div>
        </div>

        <div className="scroll-hint animate-fade-in-up delay-6" onClick={() => scrollToSection('about')}>
          <div className="scroll-mouse">
            <div className="scroll-dot" />
          </div>
          <span>Scroll down</span>
        </div>
      </div>
    </section>
  )
}
