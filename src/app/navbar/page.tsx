import { List, X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import './navbar.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        rootMargin: '-20% 0px -65%',
        threshold: [0, 0.15, 0.4],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="navbar__brand" href="#home" onClick={closeMenu}>
          <img src="/Logo.png" alt="Wilson" width="452" height="132" />
        </a>

        <div className="navbar__links" aria-label="Portfolio sections">
          {navItems.map((item) => (
            <a
              key={item.label}
              className={activeSection === item.href.slice(1) ? 'navbar__link navbar__link--active' : 'navbar__link'}
              href={item.href}
              aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <span className="navbar__spacer" aria-hidden="true" />

        <button
          className="navbar__menu-button"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className="navbar__mobile-menu"
        hidden={!isOpen}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            className={activeSection === item.href.slice(1) ? 'navbar__mobile-link navbar__mobile-link--active' : 'navbar__mobile-link'}
            href={item.href}
            aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}
