import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => document.getElementById(l.id))
      const found = sections.find(s => {
        if (!s) return false
        const rect = s.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      setActive(found ? found.id : '')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-bracket">&lt;</span>
          Nam
          <span className="logo-accent">Dev</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              className={`nav-link ${active === link.id ? 'nav-link--active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              <span className="nav-num">0{i + 1}.</span>
              {link.label}
            </button>
          ))}
          <a
            href="https://github.com/namnguyen2608"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline nav-cta"
          >
            GitHub
          </a>
        </nav>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
