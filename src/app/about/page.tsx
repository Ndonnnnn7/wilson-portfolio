import {
  ArrowsClockwise,
  ChatCircleText,
  ChatsCircle,
  ClockCountdown,
  Code,
  GraduationCap,
  Handshake,
  Lightbulb,
  MapPin,
  Megaphone,
  MicrophoneStage,
  MicrosoftExcelLogo,
  MicrosoftPowerpointLogo,
  MicrosoftWordLogo,
  PresentationChart,
  UsersThree,
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
import type { Variants } from 'motion/react'

function CanvaLogo() {
  return <span className="hard-skill__brand-logo hard-skill__brand-logo--canva" />
}

function TableauLogo() {
  return <img src="/icons/tableau.svg" alt="" />
}

type SkillFilter = 'hard' | 'soft'
type SkillCardSize = 'standard' | 'wide' | 'feature'
type SkillCardTone = 'blue' | 'sky' | 'cream'

const hardSkills = [
  { name: 'Python', category: 'Programming', Icon: SiPython, color: '#3776ab', size: 'feature', tone: 'blue' },
  { name: 'C', category: 'Core logic', Icon: SiC, color: '#00599c', size: 'standard', tone: 'sky' },
  { name: 'R', category: 'Statistics', Icon: SiR, color: '#276dc3', size: 'standard', tone: 'blue' },
  { name: 'Tableau', category: 'Visualization', Icon: TableauLogo, color: '#c65d1e', size: 'wide', tone: 'cream' },
  { name: 'MySQL', category: 'Database', Icon: SiMysql, color: '#386b91', size: 'standard', tone: 'sky' },
  { name: 'HTML', category: 'Structure', Icon: SiHtml5, color: '#c94b2b', size: 'standard', tone: 'cream' },
  { name: 'CSS', category: 'Interface', Icon: SiCss, color: '#1265a5', size: 'standard', tone: 'sky' },
  { name: 'JavaScript', category: 'Interaction', Icon: SiJavascript, color: '#8a7100', size: 'standard', tone: 'cream' },
  { name: 'Canva', category: 'Visual design', Icon: CanvaLogo, color: '#087f8c', size: 'standard', tone: 'sky' },
  { name: 'Excel', category: 'Analysis', Icon: MicrosoftExcelLogo, color: '#1d6841', size: 'standard', tone: 'blue' },
  { name: 'PowerPoint', category: 'Storytelling', Icon: MicrosoftPowerpointLogo, color: '#b64427', size: 'standard', tone: 'cream' },
  { name: 'Word', category: 'Documentation', Icon: MicrosoftWordLogo, color: '#28528c', size: 'standard', tone: 'sky' },
] as const satisfies ReadonlyArray<{
  name: string
  category: string
  Icon: typeof SiPython | typeof TableauLogo | typeof MicrosoftExcelLogo
  color: string
  size: SkillCardSize
  tone: SkillCardTone
}>

const softSkills = [
  { name: 'Communication', description: 'Clear ideas, better collaboration', Icon: ChatCircleText, size: 'feature', tone: 'blue' },
  { name: 'Adaptation', description: 'Comfortable with change', Icon: ArrowsClockwise, size: 'standard', tone: 'sky' },
  { name: 'Negotiation', description: 'Finding shared value', Icon: Handshake, size: 'standard', tone: 'cream' },
  { name: 'Time Management', description: 'Focused and dependable', Icon: ClockCountdown, size: 'feature', tone: 'sky' },
  { name: 'Marketing', description: 'Audience-first thinking', Icon: Megaphone, size: 'standard', tone: 'sky' },
  { name: 'Team Leadership', description: 'Growing together', Icon: UsersThree, size: 'wide', tone: 'blue' },
  { name: 'Problem Solving', description: 'Curious and systematic', Icon: Lightbulb, size: 'feature', tone: 'cream' },
  { name: 'Public Speaking', description: 'Confident communication', Icon: MicrophoneStage, size: 'standard', tone: 'blue' },
  { name: 'Presentation', description: 'Stories that stay', Icon: PresentationChart, size: 'standard', tone: 'cream' },
  { name: 'Consultation', description: 'Listen, understand, solve', Icon: ChatsCircle, size: 'standard', tone: 'sky' },
] as const satisfies ReadonlyArray<{
  name: string
  description: string
  Icon: typeof ChatCircleText
  size: SkillCardSize
  tone: SkillCardTone
}>

const skillListVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -6, transition: { duration: 0.16, ease: 'easeIn' } },
}

const skillCardTilts = [-2.4, 1.8, -1.4, 2.2, -1.7, 1.4, -1.2, 1.7, -1.9, 1.3, -1.5, 1.1]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeFilter, setActiveFilter] = useState<SkillFilter>('hard')
  const reduceMotion = Boolean(useReducedMotion())
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const portraitY = useTransform(scrollYProgress, [0, 0.55], reduceMotion ? [0, 0] : [50, -26])
  const orbitRotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-12, 28])
  const copyY = useTransform(scrollYProgress, [0, 0.55], reduceMotion ? [0, 0] : [30, -12])

  const selectFilter = (filter: SkillFilter) => setActiveFilter(filter)

  const handleFilterKeyDown = (key: string, filter: SkillFilter) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key)) return
    const nextFilter = key === 'Home' ? 'hard' : key === 'End' ? 'soft' : filter === 'hard' ? 'soft' : 'hard'
    selectFilter(nextFilter)
    requestAnimationFrame(() => document.getElementById(`${nextFilter}-skills-tab`)?.focus())
  }

  return (
    <section ref={sectionRef} id="about" className="section about" aria-labelledby="about-title">
      <LazyMotion features={domAnimation} strict>
        <div className="section__inner about__layout">
          <div className="about__heading">
            <m.p
              className="about__kicker"
            >
            </m.p>
            <m.h2
              id="about-title"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              About <em>Me</em>
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
              <m.div
                className="about__portrait-note"
                initial={reduceMotion ? false : { opacity: 0, x: -18, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <GraduationCap aria-hidden="true" />
                <span><small>Currently</small>Data Science student</span>
              </m.div>
            </div>

            <m.article
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
            </m.article>
          </div>

          <div className="about__skills" aria-labelledby="skills-title">
            <div className="about__skills-topline">
              <m.div
                className="about__skills-heading"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 id="skills-title">Skills</h3>
              </m.div>

              <div className="skills-filter" role="tablist" aria-label="Filter skills">
                {(['hard', 'soft'] as const).map((filter) => {
                  const isHardSkill = filter === 'hard'
                  const FilterIcon = isHardSkill ? Code : UsersThree
                  const skillCount = isHardSkill ? hardSkills.length : softSkills.length

                  return (
                    <button
                      key={filter}
                      id={`${filter}-skills-tab`}
                      type="button"
                      role="tab"
                      aria-selected={activeFilter === filter}
                      aria-controls="skills-panel"
                      className={activeFilter === filter ? 'skills-filter__button is-active' : 'skills-filter__button'}
                      tabIndex={activeFilter === filter ? 0 : -1}
                      onClick={() => selectFilter(filter)}
                      onKeyDown={(event) => {
                        if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
                          event.preventDefault()
                          handleFilterKeyDown(event.key, filter)
                        }
                      }}
                    >
                      {activeFilter === filter && <m.span className="skills-filter__active" layoutId="active-skill-filter" transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }} />}
                      <span className="skills-filter__icon" aria-hidden="true"><FilterIcon weight="bold" /></span>
                      <span className="skills-filter__copy">
                        <strong>{isHardSkill ? 'Hard Skills' : 'Soft Skills'}</strong>
                      </span>
                      <span className="skills-filter__count" aria-label={`${skillCount} skills`}>{skillCount}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div id="skills-panel" className="skills-panel" role="tabpanel" aria-labelledby={`${activeFilter}-skills-tab`} tabIndex={0}>
              <AnimatePresence mode="wait" initial={false}>
                {activeFilter === 'hard' ? (
                  <m.ul key="hard" className="hard-skills-grid" variants={reduceMotion ? undefined : skillListVariants} initial={reduceMotion ? false : 'hidden'} animate="visible" exit={reduceMotion ? undefined : 'exit'}>
                    {hardSkills.map(({ name, Icon, color, size, tone }, index) => (
                      <m.li
                        key={name}
                        className={`hard-skill skill-card skill-card--${size} skill-card--${tone}${[0, 8, 11].includes(index) ? ' skill-card--layered' : ''}`}
                        style={{ '--skill-color': color } as CSSProperties}
                        animate={{ rotate: reduceMotion ? 0 : skillCardTilts[index] }}
                        whileHover={reduceMotion ? undefined : { y: -12, rotate: 0, scale: 1.035, zIndex: 10 }}
                        transition={{ type: 'spring', stiffness: 340, damping: 24, mass: .65 }}
                      >
                        <span className="hard-skill__icon" aria-hidden="true"><Icon /></span>
                        <strong className="hard-skill__name">{name}</strong>
                      </m.li>
                    ))}
                  </m.ul>
                ) : (
                  <m.ul key="soft" className="soft-skills-grid" variants={reduceMotion ? undefined : skillListVariants} initial={reduceMotion ? false : 'hidden'} animate="visible" exit={reduceMotion ? undefined : 'exit'}>
                    {softSkills.map(({ name, Icon, size, tone }, index) => (
                      <m.li
                        key={name}
                        className={`soft-skill skill-card skill-card--${size} skill-card--${tone}${[0, 6, 9].includes(index) ? ' skill-card--layered' : ''}`}
                        animate={{ rotate: reduceMotion ? 0 : skillCardTilts[index] }}
                        whileHover={reduceMotion ? undefined : { y: -12, rotate: 0, scale: 1.035, zIndex: 10 }}
                        transition={{ type: 'spring', stiffness: 340, damping: 24, mass: .65 }}
                      >
                        <span className="soft-skill__icon" aria-hidden="true"><Icon weight="duotone" /></span>
                        <strong>{name}</strong>
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
