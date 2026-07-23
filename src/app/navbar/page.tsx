import { List, X } from '@phosphor-icons/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'

const glassSurface = "border border-white/70 bg-[linear-gradient(135deg,rgb(255_255_255/94%),rgb(238_245_255/86%))] shadow-[inset_0_1px_0_rgb(255_255_255/96%),inset_0_-1px_0_rgb(8_31_92/5%),0_.8rem_2rem_rgb(8_31_92/12%)] backdrop-blur-[24px] backdrop-saturate-[1.35] backdrop-contrast-[1.03] [@media(prefers-reduced-transparency:reduce)]:bg-[rgb(247_242_235/98%)] [@media(prefers-reduced-transparency:reduce)]:backdrop-filter-none"

const navLinkBase = "relative flex min-h-10 items-center justify-center whitespace-nowrap rounded-lg p-0 text-base leading-none font-[540] text-[#294372] no-underline transition-[color,background-color,transform,box-shadow] duration-220 ease-spring-out after:absolute after:right-0 after:bottom-[.28rem] after:left-0 after:h-0.5 after:scale-x-[.18] after:translate-y-1 after:rounded-full after:bg-planetary after:opacity-0 after:transition-[opacity,transform] after:duration-220 after:ease-spring-out after:content-[''] hover:-translate-y-px hover:text-galaxy hover:after:scale-x-100 hover:after:translate-y-0 hover:after:opacity-100 focus-visible:outline-3 focus-visible:outline-sky focus-visible:outline-offset-2 focus-visible:after:scale-x-100 focus-visible:after:translate-y-0 focus-visible:after:opacity-100 active:translate-y-px active:scale-[.98] motion-reduce:transition-duration-[.01ms]"

const mobileLinkBase = "flex min-h-[2.8rem] items-center rounded-[.65rem] px-4 text-sm font-[520] text-[#294372] no-underline transition-[color,background-color,transform] duration-220 ease-spring-out hover:text-planetary focus-visible:outline-3 focus-visible:outline-sky focus-visible:outline-offset-2 active:translate-y-px active:scale-[.99] motion-reduce:transition-duration-[.01ms]"

const navItems = [
  { label: 'Home', target: '#home', path: '/' },
  { label: 'About', target: '#about', path: '/about' },
  { label: 'Projects', target: '#projects', path: '/projects' },
  { label: 'Experience', target: '#experience', path: '/experience' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef<HTMLElement>(null)
  const scrollingToRef = useRef<string | null>(null)
  const scrollLockTimerRef = useRef<number | null>(null)

  const closeMenu = () => setIsOpen(false)

  const syncActiveSection = useCallback(() => {
    if (scrollingToRef.current) return

    const navHeight = navRef.current?.getBoundingClientRect().height ?? 64
    const marker = navHeight + 32
    let currentSection = navItems[0].target.slice(1)

    navItems.forEach(({ target }) => {
      const section = document.querySelector<HTMLElement>(target)
      if (section && section.getBoundingClientRect().top <= marker) {
        currentSection = target.slice(1)
      }
    })

    setActiveSection(currentSection)
  }, [])

  const scrollToSection = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    targetSelector: string,
    path: string,
  ) => {
    const target = document.querySelector<HTMLElement>(targetSelector)
    if (!target) return

    event.preventDefault()

    const navHeight = navRef.current?.getBoundingClientRect().height ?? 64
    const targetTop = target.getBoundingClientRect().top + window.scrollY
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const targetId = targetSelector.slice(1)

    scrollingToRef.current = targetId
    setActiveSection(targetId)

    if (scrollLockTimerRef.current !== null) {
      window.clearTimeout(scrollLockTimerRef.current)
    }

    window.scrollTo({
      top: Math.max(0, targetTop - navHeight - 24),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })

    window.history.pushState(null, '', path)
    closeMenu()

    scrollLockTimerRef.current = window.setTimeout(() => {
      scrollingToRef.current = null
      scrollLockTimerRef.current = null
      syncActiveSection()
    }, prefersReducedMotion ? 0 : 1000)
  }

  useEffect(() => {
    const activeRoute = navItems.find(({ path }) => path === window.location.pathname)
    if (!activeRoute || activeRoute.target === '#home') return

    const animationFrame = window.requestAnimationFrame(() => {
      const target = document.querySelector<HTMLElement>(activeRoute.target)
      if (!target) return

      const navHeight = navRef.current?.getBoundingClientRect().height ?? 64
      const targetTop = target.getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top: Math.max(0, targetTop - navHeight - 24),
        behavior: 'auto',
      })
      setActiveSection(activeRoute.target.slice(1))
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [])

  useEffect(() => {
    let animationFrame = 0

    const trackActiveSection = () => {
      if (animationFrame) return

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0
        syncActiveSection()
      })
    }

    syncActiveSection()
    window.addEventListener('scroll', trackActiveSection, { passive: true })
    window.addEventListener('resize', trackActiveSection)

    return () => {
      window.removeEventListener('scroll', trackActiveSection)
      window.removeEventListener('resize', trackActiveSection)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [syncActiveSection])

  useEffect(() => () => {
    if (scrollLockTimerRef.current !== null) {
      window.clearTimeout(scrollLockTimerRef.current)
    }
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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-20 px-[clamp(1rem,2.5vw,2rem)] py-3 max-md:px-3 max-md:py-[.65rem]">
      <nav
        ref={navRef}
        className={`${glassSurface} group/nav pointer-events-auto relative isolate mx-auto grid min-h-16 w-[min(100%,73rem)] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center overflow-hidden rounded-full py-[.4rem] pr-[.55rem] pl-4 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:translate-x-[-2%] before:scale-x-[1.03] before:rounded-[inherit] before:bg-[radial-gradient(circle_at_12%_0%,rgb(255_255_255/78%),transparent_34%),linear-gradient(90deg,rgb(255_255_255/20%),transparent_44%,rgb(208_227_255/14%))] before:opacity-82 before:transition-[opacity,transform] before:duration-500 before:ease-spring-out before:content-[''] hover:before:translate-x-[3%] hover:before:scale-x-[1.06] hover:before:opacity-100 max-md:ml-0 max-md:min-h-[3.65rem] max-md:w-[min(100%,26rem)] max-md:grid-cols-[minmax(0,1fr)_auto] max-md:py-[.35rem] max-md:pr-[.45rem] max-md:pl-[.85rem] motion-reduce:before:transition-duration-[.01ms]`}
        aria-label="Primary navigation"
      >
        <a className="flex w-fit items-center rounded-full px-[.2rem] py-[.15rem] transition-transform duration-220 ease-spring-out hover:-translate-y-0.5 hover:-rotate-[1.5deg] hover:scale-[1.035] focus-visible:outline-3 focus-visible:outline-sky focus-visible:outline-offset-2 active:translate-y-px active:scale-[.98] motion-reduce:transition-duration-[.01ms]" href="/" onClick={(event) => scrollToSection(event, '#home', '/')}>
          <img className="block h-[2.05rem] w-auto max-md:h-[1.8rem]" src="/Logo.png" alt="Wilson" width="452" height="132" />
        </a>

        <div className="flex items-center gap-[clamp(1.75rem,3vw,2.75rem)] max-md:hidden" aria-label="Portfolio sections">
          {navItems.map((item) => (
            <a
              key={item.label}
              className={`${navLinkBase}${activeSection === item.target.slice(1) ? ' font-[650] text-planetary after:scale-x-100 after:translate-y-0 after:opacity-100' : ''}`}
              href={item.path}
              aria-current={activeSection === item.target.slice(1) ? 'location' : undefined}
              onClick={(event) => scrollToSection(event, item.target, item.path)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <span className="max-md:hidden" aria-hidden="true" />

        <button
          className="hidden size-[2.85rem] cursor-pointer place-items-center rounded-full border border-galaxy/12 bg-white/30 p-0 text-galaxy transition-[background-color,transform] duration-220 ease-spring-out hover:bg-[rgb(255_253_249/72%)] focus-visible:outline-3 focus-visible:outline-sky focus-visible:outline-offset-2 active:translate-y-px active:scale-[.96] max-md:grid [&_svg]:size-[1.35rem] motion-reduce:transition-duration-[.01ms]"
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
        className={`${glassSurface} pointer-events-auto relative mt-2 hidden w-[min(100%,26rem)] rounded-[1.4rem] p-2 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:translate-x-[-2%] before:scale-x-[1.03] before:rounded-[inherit] before:bg-[radial-gradient(circle_at_12%_0%,rgb(255_255_255/78%),transparent_34%),linear-gradient(90deg,rgb(255_255_255/20%),transparent_44%,rgb(208_227_255/14%))] before:opacity-82 before:content-[''] max-md:grid motion-safe:animate-menu-in`}
        hidden={!isOpen}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            className={`${mobileLinkBase}${activeSection === item.target.slice(1) ? ' font-[650] text-planetary' : ''}`}
            href={item.path}
            aria-current={activeSection === item.target.slice(1) ? 'location' : undefined}
            onClick={(event) => scrollToSection(event, item.target, item.path)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}
