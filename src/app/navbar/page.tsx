'use client'

import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'
import './navbar.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="navbar__brand" href="#home" onClick={closeMenu}>
          <img src="/Logo.png" alt="Wilson" width="452" height="132" />
        </a>

        <div className="navbar__links" aria-label="Portfolio sections">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              className={index === 0 ? 'navbar__link navbar__link--active' : 'navbar__link'}
              href={item.href}
              aria-current={index === 0 ? 'page' : undefined}
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
        {navItems.map((item, index) => (
          <a
            key={item.label}
            className={index === 0 ? 'navbar__mobile-link navbar__mobile-link--active' : 'navbar__mobile-link'}
            href={item.href}
            aria-current={index === 0 ? 'page' : undefined}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}
