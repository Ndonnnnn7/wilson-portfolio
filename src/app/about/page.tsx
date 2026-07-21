import {
  MapPin,
  MicrosoftExcelLogo,
  MicrosoftPowerpointLogo,
  MicrosoftWordLogo,
} from '@phosphor-icons/react'
import {
  SiC,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiR,
} from '@icons-pack/react-simple-icons'
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'
import { useRef, useState } from 'react'
import type { CSSProperties } from 'react'

function CanvaLogo() {
  return <span className="hard-skill__brand-logo hard-skill__brand-logo--canva" />
}

function TableauLogo() {
  return <img src="/icons/tableau.svg" alt="" />
}

const hardSkills = [
  { name: 'Python', Icon: SiPython, color: '#3776ab' },
  { name: 'C', Icon: SiC, color: '#00599c' },
  { name: 'R', Icon: SiR, color: '#276dc3' },
  { name: 'Tableau', Icon: TableauLogo, color: '#e8762d' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479a1' },
  { name: 'HTML', Icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS', Icon: SiCss, color: '#1572b6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#d6b600' },
  { name: 'Canva', Icon: CanvaLogo, color: '#00aeb5' },
  { name: 'Excel', Icon: MicrosoftExcelLogo, color: '#217346' },
  { name: 'PowerPoint', Icon: MicrosoftPowerpointLogo, color: '#d24726' },
  { name: 'Word', Icon: MicrosoftWordLogo, color: '#2b579a' },
]

const softSkills = [
  ['Communication', 'Clear ideas, better collaboration'],
  ['Adaptation', 'Comfortable with change'],
  ['Negotiation', 'Finding shared value'],
  ['Time Management', 'Focused and dependable'],
  ['Team Leadership', 'Growing together'],
  ['Problem Solving', 'Curious and systematic'],
  ['Marketing', 'Audience-first thinking'],
  ['Public Speaking', 'Confident communication'],
  ['Presentation', 'Stories that stay'],
  ['Consultation', 'Listen, understand, solve'],
]

type SkillFilter = 'hard' | 'soft'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeFilter, setActiveFilter] = useState<SkillFilter>('hard')
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const portraitY = useTransform(scrollYProgress, [0, 0.55], reduceMotion ? [0, 0] : [50, -26])
  const orbitRotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-12, 28])
  const copyY = useTransform(scrollYProgress, [0, 0.55], reduceMotion ? [0, 0] : [30, -12])

  return (
    <section ref={sectionRef} id="about" className="section about" aria-labelledby="about-title">
      <LazyMotion features={domAnimation} strict>
        <div className="section__inner about__layout">
          <div className="about__heading">
            <m.p
              className="about__kicker"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
            >
            </m.p>
            <m.h2
              id="about-title"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              About Me<br />
            </m.h2>
          </div>

          <div className="about__intro">
            <div className="about__portrait-stage">
              <m.div className="about__portrait-orbit" style={{ rotate: orbitRotate }} aria-hidden="true">
                <span /><span /><span />
              </m.div>
              <m.figure
                className="about__portrait"
                style={{ y: portraitY }}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={reduceMotion ? undefined : { scale: 1.025, rotate: 1 }}
              >
                <img src="/About.png" alt="Wilson Gregory Pribadi smiling and making a peace sign" width="1232" height="1232" loading="lazy" decoding="async" />
              </m.figure>
            </div>

            <m.div
              className="about__copy"
              style={{ y: copyY }}
              initial={reduceMotion ? false : { opacity: 0, x: 38 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="about__body">
                <p>I&apos;m Wilson Gregory Pribadi, an undergraduate Data Science student at Binus University. Working with data taught me that the best insight is not only accurate, it also needs to be clear, useful, and human.</p>
                <p>I enjoy building visualizations, exploring patterns, and continually sharpening my thinking through feedback and hands-on experience.</p>
              </div>
              <div className="about__facts" aria-label="Quick facts">
                <div><MapPin aria-hidden="true" /><span><small>Based in</small>Jakarta, Indonesia</span></div>
              </div>
            </m.div>
          </div>

          <div className="about__skills" aria-labelledby="skills-title">
            <div className="about__skills-topline">
              <m.div initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}>
                <h3 id="skills-title">Skills</h3>
              </m.div>

              <div className="skills-filter" role="tablist" aria-label="Filter skills">
                {(['hard', 'soft'] as const).map((filter) => (
                  <button
                    key={filter}
                    id={`${filter}-skills-tab`}
                    type="button"
                    role="tab"
                    aria-selected={activeFilter === filter}
                    aria-controls="skills-panel"
                    className={activeFilter === filter ? 'skills-filter__button is-active' : 'skills-filter__button'}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {activeFilter === filter && <m.span className="skills-filter__active" layoutId="active-skill-filter" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                    <span>{filter === 'hard' ? 'Hard Skills' : 'Soft Skills'}</span>
                    <small>{filter === 'hard' ? hardSkills.length : softSkills.length}</small>
                  </button>
                ))}
              </div>
            </div>

            <div id="skills-panel" className="skills-panel" role="tabpanel" aria-labelledby={`${activeFilter}-skills-tab`}>
              <AnimatePresence mode="wait" initial={false}>
                {activeFilter === 'hard' ? (
                  <m.ul key="hard" className="hard-skills-grid" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: reduceMotion ? 0 : 0.28 }}>
                    {hardSkills.map(({ name, Icon, color }, index) => (
                      <m.li key={name} className="hard-skill" style={{ '--skill-color': color } as CSSProperties} initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reduceMotion ? 0 : index * 0.025 }} whileHover={reduceMotion ? undefined : { y: -6 }}>
                        <span className="hard-skill__icon" aria-hidden="true"><Icon /></span>
                        <span className="hard-skill__name">{name}</span>
                        <span className="hard-skill__number">{String(index + 1).padStart(2, '0')}</span>
                      </m.li>
                    ))}
                  </m.ul>
                ) : (
                  <m.ul key="soft" className="soft-skills-grid" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: reduceMotion ? 0 : 0.28 }}>
                    {softSkills.map(([skill, description], index) => (
                      <m.li key={skill} initial={reduceMotion ? false : { opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : index * 0.03 }} whileHover={reduceMotion ? undefined : { x: 5 }}>
                        <span className="soft-skill__number">{String(index + 1).padStart(2, '0')}</span>
                        <span><strong>{skill}</strong><small>{description}</small></span>
                      </m.li>
                    ))}
                  </m.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </LazyMotion>
    </section>
  )
}
