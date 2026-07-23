import {
  ArrowRight,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

const workLinks = [
  { label: 'Selected work', href: '#projects' },
  { label: 'My skills', href: '#about' },
  { label: 'Career journey', href: '#experience' },
  { label: 'GitHub', href: 'https://github.com/wilsongregory15' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wilson-gregory-pribadi/',
    Icon: LinkedinLogo,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/wilsongregory15',
    Icon: GithubLogo,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/wilsongregory_',
    Icon: InstagramLogo,
  },
]

const footerLinkClass =
  'w-fit rounded-sm text-sm leading-6 text-sky no-underline transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-sky focus-visible:outline-offset-3'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="flow-root border-t border-white/10 bg-galaxy text-white"
      aria-labelledby="contact-title"
    >
      <div className="footer-layout mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
        <div className="min-w-0">
          <a
            className="inline-flex rounded-md transition-opacity duration-200 hover:opacity-75 focus-visible:outline-2 focus-visible:outline-sky focus-visible:outline-offset-4"
            href="#home"
            aria-label="Wilson — back to home"
          >
            <img
              className="block h-8 w-auto brightness-0 invert"
              src="/Logo.png"
              alt="Wilson"
              width="452"
              height="132"
            />
          </a>
          <p className="mt-5 mb-0 max-w-xs text-sm leading-relaxed text-sky">
            I turn complex data into clear insights, useful products, and
            stories people can act on.
          </p>

          <nav className="mt-5 flex items-center gap-3" aria-label="Social links">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                className="grid size-7 cursor-pointer place-items-center rounded-sm text-sky transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-sky focus-visible:outline-offset-2 [&_svg]:size-4"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon weight="bold" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        <nav className="min-w-0" aria-labelledby="footer-navigation-title">
          <h2
            className="m-0 font-display text-sm font-bold tracking-tight text-white"
            id="footer-navigation-title"
          >
            Navigation
          </h2>
          <ul className="mt-4 mb-0 flex list-none flex-col gap-1 p-0">
            {navigationLinks.map(({ label, href }) => (
              <li key={label}>
                <a className={footerLinkClass} href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="min-w-0" aria-labelledby="footer-work-title">
          <h2
            className="m-0 font-display text-sm font-bold tracking-tight text-white"
            id="footer-work-title"
          >
            Explore
          </h2>
          <ul className="mt-4 mb-0 flex list-none flex-col gap-1 p-0">
            {workLinks.map(({ label, href }) => {
              const isExternal = href.startsWith('http')

              return (
                <li key={label}>
                  <a
                    className={footerLinkClass}
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="min-w-0">
          <h2
            className="m-0 font-display text-sm font-bold tracking-tight text-white"
            id="contact-title"
          >
            Let&apos;s connect
          </h2>
          <p className="mt-4 mb-0 max-w-sm text-sm leading-relaxed text-sky">
            Have a project, opportunity, or interesting data problem? Let&apos;s
            talk.
          </p>
          <a
            className="group mt-5 flex min-h-12 w-full max-w-sm cursor-pointer items-center justify-between rounded-full border border-white/20 bg-white py-1.5 pr-1.5 pl-5 text-sm font-medium text-galaxy no-underline shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-sky hover:shadow-md focus-visible:outline-3 focus-visible:outline-sky focus-visible:outline-offset-3"
            href="https://www.linkedin.com/in/wilson-gregory-pribadi/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Start a conversation</span>
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-planetary text-white transition-colors duration-200 group-hover:bg-galaxy [&_svg]:size-4" aria-hidden="true">
              <ArrowRight weight="bold" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
