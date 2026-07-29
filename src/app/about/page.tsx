import {
  ArrowsClockwise,
  ChatCircleText,
  ChatsCircle,
  ClockCountdown,
  Code,
  Brain,
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
  SiCss,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiR,
} from '@icons-pack/react-simple-icons'
import CLogo from '../../components/c-logo'
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
  return <span className="block size-[2.45rem] bg-current [mask:url('/icons/canva.svg')_center/contain_no-repeat] [-webkit-mask:url('/icons/canva.svg')_center/contain_no-repeat] max-[430px]:size-[1.9rem]" />
}

function TableauLogo() {
  return <img className="size-[2.45rem] object-contain max-[430px]:size-[1.9rem]" src="/icons/tableau.svg" alt="" />
}

type SkillFilter = 'hard' | 'soft'
type SkillCardSize = 'standard' | 'wide' | 'feature'
type SkillCardTone = 'blue' | 'sky' | 'cream'

const hardSkills = [
  { name: 'Python', category: 'Programming', Icon: SiPython, color: '#3776ab', size: 'feature', tone: 'blue' },
  { name: 'C', category: 'Core logic', Icon: CLogo, color: '#659ad2', size: 'standard', tone: 'sky' },
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
  Icon: typeof SiPython | typeof TableauLogo | typeof MicrosoftExcelLogo | typeof CLogo
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

const toneClasses: Record<SkillCardTone, string> = {
  blue: 'bg-[linear-gradient(145deg,#e5f3ff,#c8dafa)] [--skill-layer:#b9cef0]',
  sky: 'bg-[linear-gradient(145deg,#f1f9ff,#cde8fb)] [--skill-layer:#bcdcf2]',
  cream: 'bg-[linear-gradient(145deg,#fff6c9,#ffd9c9)] [--skill-layer:#f0cbb9]',
}

const sizeClasses: Record<SkillCardSize, string> = {
  standard: 'col-span-2',
  wide: 'col-span-3',
  feature: 'col-span-3',
}

const skillCardBase = "relative z-1 flex min-h-0 min-w-0 origin-bottom cursor-default flex-col items-center justify-center gap-[.85rem] overflow-visible rounded-[1.4rem] border-0 p-4 text-center text-galaxy shadow-[0_1.05rem_1.5rem_rgb(8_31_92/13%),0_.3rem_.65rem_rgb(51_78_172/9%),inset_0_1px_0_rgb(255_255_255/78%)] transition-[box-shadow,filter] duration-240 will-change-transform hover:saturate-[1.06] hover:shadow-[0_1.65rem_2.2rem_rgb(8_31_92/17%),0_.5rem_.8rem_rgb(51_78_172/11%),inset_0_1px_0_rgb(255_255_255/86%)] max-[1050px]:col-span-1 max-md:rounded-[1.15rem] max-md:p-[.9rem] max-[430px]:p-3 motion-reduce:transition-none"

const layeredCard = "before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:translate-x-1 before:translate-y-[.6rem] before:rounded-[inherit] before:bg-[var(--skill-layer)] before:shadow-[0_.8rem_1.4rem_rgb(8_31_92/10%)] before:transition-transform before:duration-240 before:ease-soft-out before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:-z-2 after:translate-x-2 after:translate-y-[1.1rem] after:rounded-[inherit] after:bg-[var(--skill-layer)] after:opacity-55 after:shadow-[0_.8rem_1.4rem_rgb(8_31_92/10%)] after:transition-transform after:duration-240 after:ease-soft-out after:content-[''] hover:before:translate-x-[.35rem] hover:before:translate-y-[.78rem] hover:after:translate-x-[.65rem] hover:after:translate-y-[1.35rem] max-md:before:translate-x-[.2rem] max-md:before:translate-y-[.45rem] max-md:after:translate-x-[.38rem] max-md:after:translate-y-[.8rem] motion-reduce:before:transition-none motion-reduce:after:transition-none"

const skillIconBase = "grid size-[3.65rem] flex-none place-items-center rounded-2xl border-0 bg-white/45 shadow-[inset_0_1px_0_rgb(255_255_255/66%)] max-[430px]:size-12 max-[430px]:rounded-[.85rem] [&_svg]:size-[2.45rem] [&_svg]:max-[430px]:size-[1.9rem]"

const skillNameBase = "block font-display text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.12] font-bold tracking-[-.025em] text-galaxy [overflow-wrap:anywhere] max-[430px]:text-[.88rem]"

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>('hard')
  const reduceMotion = Boolean(useReducedMotion())

  const selectFilter = (filter: SkillFilter) => setActiveFilter(filter)

  const handleFilterKeyDown = (key: string, filter: SkillFilter) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key)) return
    const nextFilter = key === 'Home' ? 'hard' : key === 'End' ? 'soft' : filter === 'hard' ? 'soft' : 'hard'
    selectFilter(nextFilter)
    requestAnimationFrame(() => document.getElementById(`${nextFilter}-skills-tab`)?.focus())
  }

  return (
    <section id="skills" className="relative isolate overflow-clip bg-transparent py-[clamp(3rem,6vw,4.5rem)] text-galaxy before:absolute before:inset-0 before:-z-1 before:bg-[radial-gradient(rgb(51_78_172/13%)_.75px,transparent_.75px)] before:bg-size-[1.5rem_1.5rem] before:opacity-35 before:[mask-image:linear-gradient(to_bottom,transparent,#000_14%,#000_86%,transparent)] before:content-['']" aria-labelledby="skills-title">
      <div className="mx-auto w-[min(calc(100%_-_3rem),1216px)] max-[540px]:w-full max-[540px]:px-5">
        <div className="flex items-end justify-between gap-[clamp(2rem,5vw,5rem)] max-md:flex-col max-md:items-start max-md:gap-6">
          <m.div
            className="max-w-[38rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="m-0 font-display text-[clamp(3.4rem,6vw,5.3rem)] leading-[.9] font-[650] tracking-[-.065em] text-galaxy max-[430px]:text-[3.4rem]" id="skills-title">Skills</h3>
          </m.div>

          <div className="grid flex-none grid-cols-2 gap-3 max-md:w-full max-[430px]:gap-[.55rem]" role="tablist" aria-label="Filter skills">
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
                  className={`relative isolate grid min-h-[4.7rem] min-w-[12.5rem] cursor-pointer grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-[.7rem] rounded-[1.15rem_.45rem_1.15rem_1.15rem] border border-planetary/13 bg-[#f2f6fc] px-[.78rem] py-[.68rem] text-left text-text-muted shadow-[0_.45rem_1.2rem_rgb(8_31_92/6%)] transition-[color,border-color,background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-planetary/25 hover:bg-white hover:text-galaxy hover:shadow-[0_.8rem_1.5rem_rgb(8_31_92/10%)] focus-visible:outline-3 focus-visible:outline-universe focus-visible:outline-offset-3 max-md:min-w-0 max-[430px]:min-h-[4.2rem] max-[430px]:grid-cols-[auto_minmax(0,1fr)] max-[430px]:gap-[.55rem] max-[430px]:rounded-[.95rem_.35rem_.95rem_.95rem] max-[430px]:p-[.55rem] motion-reduce:transition-none${activeFilter === filter ? ' border-transparent bg-transparent text-white hover:border-transparent hover:bg-transparent hover:text-white' : ''}`}
                  tabIndex={activeFilter === filter ? 0 : -1}
                  onClick={() => selectFilter(filter)}
                  onKeyDown={(event) => {
                    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
                      event.preventDefault()
                      handleFilterKeyDown(event.key, filter)
                    }
                  }}
                >
                  {activeFilter === filter && <m.span className="absolute -inset-px -z-1 rounded-[inherit] bg-galaxy shadow-[.38rem_.42rem_0_#7d9fd2,0_.8rem_1.5rem_rgb(8_31_92/16%)] max-[430px]:shadow-[.25rem_.3rem_0_#7d9fd2,0_.65rem_1.2rem_rgb(8_31_92/14%)]" layoutId="active-skill-filter" transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }} />}
                  <span className={`relative z-1 grid aspect-square w-[2.55rem] place-items-center rounded-[.78rem_.3rem_.78rem_.78rem] bg-[#dfeafb] text-planetary transition-colors duration-200 max-[430px]:w-[2.15rem] max-[430px]:rounded-[.65rem_.25rem_.65rem_.65rem] motion-reduce:transition-none [&_svg]:size-5 [&_svg]:max-[430px]:size-[1.05rem]${activeFilter === filter ? ' bg-white/14 text-white' : ''}`} aria-hidden="true"><FilterIcon weight="bold" /></span>
                  <span className="relative z-1 grid min-w-0 gap-[.18rem]">
                    <strong className="font-display text-[.83rem] leading-none font-[750] text-inherit max-[430px]:text-[.73rem] max-[430px]:leading-[1.12]">{isHardSkill ? 'Hard Skills' : 'Soft Skills'}</strong>
                  </span>
                  <span className={`relative z-1 grid h-7 min-w-7 place-items-center rounded-full bg-white text-[.65rem] font-extrabold text-planetary shadow-[0_.25rem_.65rem_rgb(8_31_92/8%)] max-[430px]:absolute max-[430px]:top-[.38rem] max-[430px]:right-[.4rem] max-[430px]:h-5 max-[430px]:min-w-5 max-[430px]:text-[.55rem]${activeFilter === filter ? ' bg-white/16 text-white shadow-none' : ''}`} aria-label={`${skillCount} skills`}>{skillCount}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div id="skills-panel" className="mt-[clamp(2.5rem,5vw,4rem)] rounded-[1.25rem] focus-visible:outline-3 focus-visible:outline-universe focus-visible:outline-offset-8 max-md:mt-7" role="tabpanel" aria-labelledby={`${activeFilter}-skills-tab`} tabIndex={0}>
          <AnimatePresence mode="wait" initial={false}>
            {activeFilter === 'hard' ? (
              <m.ul key="hard" className="grid list-none grid-cols-10 auto-rows-[9.6rem] gap-[clamp(1.15rem,1.8vw,1.6rem)] px-5 pt-6 pb-12 [perspective:1000px] max-[1050px]:grid-cols-4 max-[1050px]:auto-rows-[8.8rem] max-md:grid-cols-2 max-md:auto-rows-[8.5rem] max-md:gap-x-5 max-md:gap-y-7 max-md:px-[.65rem] max-md:pt-4 max-md:pb-10 max-[430px]:auto-rows-[minmax(7.7rem,auto)] max-[430px]:gap-x-4 max-[430px]:gap-y-9 max-[430px]:px-[.4rem]" variants={reduceMotion ? undefined : skillListVariants} initial={reduceMotion ? false : 'hidden'} animate="visible" exit={reduceMotion ? undefined : 'exit'}>
                {hardSkills.map(({ name, Icon, color, size, tone }, index) => (
                  <m.li
                    key={name}
                    className={`${skillCardBase} ${toneClasses[tone]} ${sizeClasses[size]}${index === 9 ? ' col-start-3 col-span-2 max-[1050px]:col-start-auto' : index === 10 ? ' col-start-5 col-span-2 max-[1050px]:col-start-auto' : index === 11 ? ' col-start-7 col-span-2 max-[1050px]:col-start-auto' : ''}${[0, 8, 11].includes(index) ? ` ${layeredCard}` : ''}`}
                    style={{ '--skill-color': color } as CSSProperties}
                    initial={reduceMotion ? false : { opacity: 0, y: 28, scale: .94, rotate: skillCardTilts[index] * 1.6 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, rotate: reduceMotion ? 0 : skillCardTilts[index] }}
                    viewport={{ once: true, amount: 0.18 }}
                    whileHover={reduceMotion ? undefined : { y: -12, rotate: 0, scale: 1.035, zIndex: 10, transition: { type: 'spring', stiffness: 340, damping: 24, mass: .65, delay: 0 } }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24, mass: .65, delay: reduceMotion ? 0 : index * .045 }}
                  >
                    <span className={`${skillIconBase} text-[var(--skill-color)]${size === 'feature' ? ' size-[4.25rem] rounded-[1.1rem] max-[430px]:size-[3.25rem] [&_svg]:size-[2.8rem] [&_svg]:max-[430px]:size-[1.9rem]' : ''}`} aria-hidden="true"><Icon /></span>
                    <strong className={`${skillNameBase}${size === 'feature' ? ' max-w-[14ch] text-[clamp(1.15rem,1.6vw,1.35rem)] max-[430px]:text-base' : ''}`}>{name}</strong>
                  </m.li>
                ))}
              </m.ul>
            ) : (
              <m.ul key="soft" className="grid list-none grid-cols-10 auto-rows-[9.6rem] gap-[clamp(1.15rem,1.8vw,1.6rem)] px-5 pt-6 pb-12 [perspective:1000px] max-[1050px]:grid-cols-4 max-[1050px]:auto-rows-[8.8rem] max-md:grid-cols-2 max-md:auto-rows-[8.5rem] max-md:gap-x-5 max-md:gap-y-7 max-md:px-[.65rem] max-md:pt-4 max-md:pb-10 max-[430px]:auto-rows-[minmax(7.7rem,auto)] max-[430px]:gap-x-4 max-[430px]:gap-y-9 max-[430px]:px-[.4rem]" variants={reduceMotion ? undefined : skillListVariants} initial={reduceMotion ? false : 'hidden'} animate="visible" exit={reduceMotion ? undefined : 'exit'}>
                {softSkills.map(({ name, Icon, size, tone }, index) => (
                  <m.li
                    key={name}
                    className={`${skillCardBase} ${toneClasses[tone]} ${sizeClasses[size]}${index === 8 ? ' col-start-4 col-span-2 max-[1050px]:col-start-auto' : ''}${[0, 6, 9].includes(index) ? ` ${layeredCard}` : ''}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 28, scale: .94, rotate: skillCardTilts[index] * 1.6 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, rotate: reduceMotion ? 0 : skillCardTilts[index] }}
                    viewport={{ once: true, amount: 0.18 }}
                    whileHover={reduceMotion ? undefined : { y: -12, rotate: 0, scale: 1.035, zIndex: 10, transition: { type: 'spring', stiffness: 340, damping: 24, mass: .65, delay: 0 } }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24, mass: .65, delay: reduceMotion ? 0 : index * .045 }}
                  >
                    <span className={`${skillIconBase} text-planetary${size === 'feature' ? ' size-[4.25rem] rounded-[1.1rem] max-[430px]:size-[3.25rem] [&_svg]:size-[2.8rem] [&_svg]:max-[430px]:size-[1.9rem]' : ''}`} aria-hidden="true"><Icon weight="duotone" /></span>
                    <strong className={`${skillNameBase}${size === 'feature' ? ' max-w-[14ch] text-[clamp(1.15rem,1.6vw,1.35rem)] max-[430px]:text-base' : ''}`}>{name}</strong>
                  </m.li>
                ))}
              </m.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

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
    <section ref={sectionRef} id="about" className="relative isolate overflow-clip bg-transparent text-galaxy [contain-intrinsic-size:auto_40rem] [content-visibility:auto] before:absolute before:inset-0 before:-z-1 before:bg-[radial-gradient(rgb(51_78_172/13%)_.75px,transparent_.75px)] before:bg-size-[1.5rem_1.5rem] before:opacity-35 before:[mask-image:linear-gradient(to_bottom,transparent,#000_14%,#000_86%,transparent)] before:content-['']" aria-labelledby="about-title">
      <LazyMotion features={domAnimation} strict>
        <div className="mx-auto block min-h-[min(42rem,80dvh)] w-[min(calc(100%_-_3rem),1216px)] py-[clamp(6rem,9vw,8.5rem)] max-[540px]:min-h-0 max-[540px]:w-full max-[540px]:px-5 max-[430px]:py-20">
          <div className="mb-[clamp(1.5rem,3vw,2.5rem)] grid grid-cols-[minmax(13rem,.55fr)_minmax(0,1.45fr)] items-end gap-8 max-[1050px]:grid-cols-1 max-md:mb-10">
            <m.h2
              className="col-start-2 m-0 max-w-none text-right font-display text-[clamp(3.25rem,6.7vw,7rem)] leading-[.88] font-[650] tracking-[-.052em] text-galaxy max-[1050px]:col-start-auto max-[1050px]:text-left max-md:text-[clamp(3rem,12vw,5.25rem)] max-[430px]:text-[clamp(2.75rem,13.5vw,3.7rem)] [&_em]:font-serif [&_em]:font-normal [&_em]:tracking-[-.06em] [&_em]:text-planetary"
              id="about-title"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              About <em>Me</em>
            </m.h2>
          </div>

          <div className="grid grid-cols-[minmax(22rem,.92fr)_minmax(0,1.08fr)] items-start gap-[clamp(3rem,8vw,7.5rem)] max-[1050px]:grid-cols-[minmax(18rem,.85fr)_minmax(0,1.15fr)] max-[1050px]:gap-[clamp(2.5rem,6vw,4.5rem)] max-md:grid-cols-1 max-md:gap-12">
            <div className="relative isolate grid min-h-[clamp(31rem,46vw,38rem)] place-items-center max-md:min-h-[min(105vw,32rem)] max-[430px]:min-h-[94vw]">
              <m.div className="absolute inset-y-[-2%] inset-x-[4%] rounded-full border border-planetary/18 [&_span]:absolute [&_span]:aspect-square [&_span]:w-3 [&_span]:rounded-full [&_span]:border-[.2rem] [&_span]:border-surface-muted [&_span]:bg-planetary [&_span]:shadow-[0_.4rem_1rem_rgb(8_31_92/20%)] [&_span:nth-child(1)]:top-[12%] [&_span:nth-child(1)]:left-[8%] [&_span:nth-child(2)]:right-[4%] [&_span:nth-child(2)]:bottom-[28%] [&_span:nth-child(3)]:bottom-[4%] [&_span:nth-child(3)]:left-[28%] [&_span:nth-child(3)]:w-[.55rem] [&_span:nth-child(3)]:bg-universe" style={{ rotate: orbitRotate }} aria-hidden="true">
                <span /><span /><span />
              </m.div>
              <m.figure
                className="relative m-0 aspect-[4/4.7] w-[min(88%,31rem)] origin-center overflow-visible rounded-full border-0 bg-[linear-gradient(145deg,#dceafb,#a9c8eb)] p-[.65rem] shadow-[0_2.4rem_4.5rem_rgb(8_31_92/18%),inset_0_1px_0_rgb(255_255_255/70%)] will-change-transform before:absolute before:inset-0 before:-z-1 before:translate-x-[-1.05rem] before:translate-y-[1.05rem] before:rounded-[inherit] before:bg-galaxy before:shadow-[0_1.2rem_2rem_rgb(8_31_92/16%)] before:content-[''] after:pointer-events-none after:absolute after:inset-[.65rem] after:z-2 after:rounded-full after:border after:border-white/72 after:content-[''] max-md:w-[min(82vw,27rem)] max-[430px]:w-[min(80vw,23rem)] max-[430px]:p-[.55rem] max-[430px]:before:translate-x-[-.65rem] max-[430px]:before:translate-y-[.65rem] max-[430px]:after:inset-[.55rem]"
                style={{ y: portraitY }}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={reduceMotion ? undefined : { scale: 1.025, rotate: 1 }}
              >
                <img className="relative z-1 size-full rounded-full object-cover object-center" src="/About.png" alt="Wilson Gregory Pribadi smiling and making a peace sign" width="1232" height="1232" loading="lazy" decoding="async" />
              </m.figure>
              <m.div
                className="absolute right-[-1.25rem] bottom-[6%] z-4 flex items-center gap-3 rounded-[.35rem_1rem_1rem_1rem] border border-planetary/13 bg-white px-4 py-[.8rem] text-galaxy shadow-[.55rem_.6rem_0_#c7d9f0,0_1rem_2.5rem_rgb(8_31_92/12%)] max-md:right-[2%] max-[430px]:right-0 max-[430px]:bottom-0 max-[430px]:px-3 max-[430px]:py-[.65rem] max-[430px]:shadow-[.35rem_.4rem_0_#c7d9f0,0_.8rem_1.8rem_rgb(8_31_92/11%)] [&_svg]:size-[1.55rem] [&_svg]:text-planetary [&_svg]:max-[430px]:size-[1.3rem]"
                initial={reduceMotion ? false : { opacity: 0, x: -18, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <Brain aria-hidden="true" />
                <span className="text-[.82rem] leading-[1.25] font-[750] max-[430px]:text-[.72rem]"><small className="mb-[.12rem] block text-[.58rem] font-[650] tracking-[.1em] text-text-muted uppercase">Currently</small>Data Scientist</span>
              </m.div>
            </div>

            <m.article
              className="relative mt-[clamp(.5rem,1.5vw,1.25rem)] max-w-[43rem] self-start border-l border-planetary/18 bg-transparent py-[clamp(1rem,2vw,1.5rem)] pr-0 pl-[clamp(2rem,4vw,3.75rem)] shadow-none will-change-transform before:absolute before:top-[-.5rem] before:left-[-.18rem] before:h-[4.5rem] before:w-[.35rem] before:rounded-full before:bg-[linear-gradient(to_bottom,var(--color-planetary),var(--color-universe))] before:content-[''] max-md:mt-0 max-md:max-w-[40rem] max-md:border-t max-md:border-l-0 max-md:px-0 max-md:pt-9 max-md:pb-0 max-md:before:top-[-.18rem] max-md:before:left-0 max-md:before:h-[.35rem] max-md:before:w-[4.5rem] max-[430px]:pt-8"
              style={{ y: copyY }}
              initial={reduceMotion ? false : { opacity: 0, x: 38 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mt-[-2rem] max-w-[39rem] border-t-0 pt-0 [&_p]:m-0 [&_p]:max-w-[68ch] [&_p]:text-[clamp(.95rem,1.18vw,1.05rem)] [&_p]:leading-[1.72] [&_p]:text-text-muted [&_p+_p]:mt-4">
                <p>I&apos;m Wilson Gregory Pribadi, a Data Scientist with 1+ years of hands-on experience building data-driven solutions. My experience spans cloud platforms, machine learning, and AI-powered applications, with a focus on delivering practical and scalable solutions.</p>
                <p>I have hands-on experience developing machine learning models, working with cloud-based data platforms, and integrating and optimising Large Language Models (LLMs) for real-world use cases. I&apos;m passionate about transforming data into actionable insights and continuously expanding my expertise in AI and data science.</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 max-[430px]:grid-cols-1" aria-label="Quick facts">
                <div className="flex min-h-[4.2rem] items-center gap-[.7rem] rounded-[.85rem] border border-planetary/11 bg-[rgb(235_243_253/68%)] px-[.85rem] py-3 text-[.83rem] font-[650] text-galaxy"><MapPin className="size-[1.35rem] flex-none text-planetary" aria-hidden="true" /><span><small className="mb-[.15rem] block text-[.64rem] font-semibold tracking-[.07em] text-text-muted uppercase">Based in</small>Jakarta, Indonesia</span></div>
              </div>
            </m.article>
          </div>

        </div>
      </LazyMotion>
    </section>
  )
}
