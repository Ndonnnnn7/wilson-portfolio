import {
  ArrowUpRight,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'
import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import { useRef } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wilson-gregory-pribadi/', Icon: LinkedinLogo },
  { label: 'GitHub', href: 'https://github.com/wilsongregory15', Icon: GithubLogo },
  { label: 'Instagram', href: 'https://www.instagram.com/wilsongregory_', Icon: InstagramLogo },
  { label: 'Contact', href: '#contact', Icon: EnvelopeSimple },
]

export default function Home() {
  const homeRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 90, damping: 22, mass: 0.6 })
  const springY = useSpring(pointerY, { stiffness: 90, damping: 22, mass: 0.6 })
  const { scrollYProgress } = useScroll({ target: homeRef, offset: ['start start', 'end start'] })

  const farX = useTransform(springX, [-1, 1], [-34, 34])
  const farY = useTransform(springY, [-1, 1], [-24, 24])
  const nearX = useTransform(springX, [-1, 1], [22, -22])
  const nearY = useTransform(springY, [-1, 1], [16, -16])
  const portraitX = useTransform(springX, [-1, 1], [-10, 10])
  const portraitRotateX = useTransform(springY, [-1, 1], [4, -4])
  const portraitRotateY = useTransform(springX, [-1, 1], [-5, 5])
  const copyScrollY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 70])
  const visualScrollY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 145])
  const visualScale = useTransform(scrollYProgress, [0, 0.8], [1, reduceMotion ? 1 : 0.94])

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
    <div className="site-shell">
      <LazyMotion features={domAnimation} strict>
        <section
          ref={homeRef}
          id="home"
          className="home"
          aria-labelledby="home-title"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <div className="home__field" aria-hidden="true">
            <m.span className="home__orb home__orb--one" style={{ x: farX, y: farY }} />
            <m.span className="home__orb home__orb--two" style={{ x: nearX, y: nearY }} />
            <m.span className="home__glow" style={{ x: farX, y: nearY }} />
          </div>

          <m.div className="home__content" style={{ y: copyScrollY }}>
            <h1 id="home-title">
              <span className="home__line home__line--two">Hi, I'm <em>Wilson</em></span>
            </h1>

            <div className="home__intro">
              <p>
                Data Science student crafting clear,
                human stories from complex information.
              </p>
            </div>

            <div className="home__actions">
              <a className="button button--primary" href="#about">
                <span>Explore my work</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <span className="button button--ghost button--unavailable" role="link" aria-disabled="true" title="CV file coming soon">
                <DownloadSimple aria-hidden="true" />
                <span>Download CV</span>
              </span>
            </div>

            <nav id="socials" className="socials" aria-label="Wilson's social links">
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                  <Icon aria-hidden="true" />
                  <span className="socials__label" aria-hidden="true">{label}</span>
                </a>
              ))}
            </nav>
          </m.div>

          <m.div className="portrait" style={{ x: portraitX, y: visualScrollY, scale: visualScale }} aria-label="Portrait of Wilson">
            <m.div
              className="portrait__visual"
              style={{ rotateX: portraitRotateX, rotateY: portraitRotateY, transformPerspective: 1100 }}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: 35 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="portrait__rings" aria-hidden="true"><span /><span /><span /></div>
              <div className="portrait__disc" />
              <img src="/Photo Wilson.png" alt="Wilson Gregory Pribadi" width="2864" height="3052" />
            </m.div>
          </m.div>
        </section>
      </LazyMotion>
    </div>
  )
}
