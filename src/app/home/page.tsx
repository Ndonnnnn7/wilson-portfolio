import {
  ArrowDown,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import type { PointerEvent as ReactPointerEvent } from 'react'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wilson-gregory-pribadi/', Icon: LinkedinLogo },
  { label: 'GitHub', href: 'https://github.com/', Icon: GithubLogo },
  { label: 'Instagram', href: 'https://www.instagram.com/wilsongregory_', Icon: InstagramLogo },
  { label: 'Email', href: '#contact', Icon: EnvelopeSimple },
]

export default function Home() {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 110, damping: 20, mass: 0.45 })
  const springY = useSpring(pointerY, { stiffness: 110, damping: 20, mass: 0.45 })

  const fieldOneX = useTransform(springX, [-1, 1], [-26, 26])
  const fieldOneY = useTransform(springY, [-1, 1], [-18, 18])
  const fieldTwoX = useTransform(springX, [-1, 1], [18, -18])
  const fieldTwoY = useTransform(springY, [-1, 1], [12, -12])
  const fieldThreeX = useTransform(springX, [-1, 1], [-10, 10])
  const fieldThreeY = useTransform(springY, [-1, 1], [16, -16])
  const portraitRotateX = useTransform(springY, [-1, 1], [4.5, -4.5])
  const portraitRotateY = useTransform(springX, [-1, 1], [-5.5, 5.5])

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType === 'touch') return

    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2)
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <main className="site-shell">
      <section
        id="home"
        className="home"
        aria-labelledby="home-title"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <div className="home__field" aria-hidden="true">
          <motion.span
            className="home__field-shape home__field-shape--one"
            style={{ x: fieldOneX, y: fieldOneY }}
            animate={reduceMotion ? undefined : { rotate: [-5, 3, -5], scale: [0.98, 1.035, 0.98] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            className="home__field-shape home__field-shape--two"
            style={{ x: fieldTwoX, y: fieldTwoY }}
            animate={reduceMotion ? undefined : { rotate: [4, -3, 4], scale: [1.02, 0.97, 1.02] }}
            transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            className="home__field-shape home__field-shape--three"
            style={{ x: fieldThreeX, y: fieldThreeY }}
            animate={reduceMotion ? undefined : { rotate: [-2, 5, -2], scale: [1, 1.04, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="home__content">
          <h1 id="home-title" className="home__reveal">
            Hi, I&apos;m <span>Wilson.</span>
          </h1>

          <p className="home__description home__reveal">
            Data Science student turning complex data into clear insights,
            while always learning, exploring, and building.
          </p>

          <div className="home__actions home__reveal">
            <a className="button button--primary" href="#about">
              <span>About me</span>
              <ArrowDown aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="/Wilson-CV.pdf" download>
              <span>Download CV</span>
              <DownloadSimple aria-hidden="true" />
            </a>
          </div>

          <nav
            id="socials"
            className="socials home__reveal"
            aria-label="Wilson's social links"
          >
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <Icon aria-hidden="true" />
                <span className="socials__label" aria-hidden="true">
                  {label}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="portrait" aria-hidden="true">
          <motion.div
            className="portrait__visual"
            style={{
              rotateX: portraitRotateX,
              rotateY: portraitRotateY,
              transformPerspective: 1100,
            }}
            whileHover={reduceMotion ? undefined : { scale: 1.018 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          >
            <div className="portrait__backdrop" />
            <img src="/Photo Wilson.png" alt="" width="2864" height="3052" />
          </motion.div>
        </div>
      </section>
    </main>
  )
}
