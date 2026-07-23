import {
  ChartLineUp,
  GraduationCap,
  Megaphone,
} from '@phosphor-icons/react'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react'

const experiences = [
  {
    period: 'May 2024 — Present',
    type: 'Mentor',
    title: 'Beelingua Mentor',
    organization: 'BINUS University',
    logo: '/Logo_Binus_University.svg',
    location: 'Jakarta, Indonesia',
    description:
      'Guiding and supporting students with Beelingua application tasks at BINUS University. I help students improve their English and other language skills, including Japanese and Chinese, by assisting with assignments and providing practical feedback for academic progress.',
    highlights: [
      'Student mentoring',
      'Language learning support',
      'Assignment guidance',
    ],
    Icon: GraduationCap,
  },
  {
    period: 'May 2024 — Present',
    type: 'Part-time',
    title: 'Education Counsellor',
    organization: 'BINUS University',
    logo: '/Logo_Binus_University.svg',
    location: 'Indonesia',
    description:
      'Promoting BINUS University to prospective students throughout Indonesia and supporting them through the enrollment journey. I guide students from initial registration through acceptance, helping create a clear and successful admission process.',
    highlights: [
      'Student consultation',
      'University promotion',
      'Enrollment guidance',
    ],
    Icon: Megaphone,
  },
  {
    period: 'Feb 2025 — Feb 2026',
    type: 'Internship',
    title: 'Data Scientist',
    organization: 'Ruparupa',
    logo: '/ruparupa-logo.png',
    location: 'Jakarta, Indonesia',
    description:
      'Completed a nearly one-year Data Scientist internship at Ruparupa, working on practical e-commerce initiatives including AI workflow integration, a search-by-image feature, and customer recommendation systems.',
    highlights: [
      'AI workflow integration',
      'Search by image',
      'Recommendation systems',
    ],
    Icon: ChartLineUp,
  },
] as const

export default function Experience() {
  const reduceMotion = Boolean(useReducedMotion())

  return (
    <section
      id="experience"
      className="relative isolate scroll-mt-20 overflow-hidden bg-transparent text-galaxy before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(rgb(51_78_172/13%)_.75px,transparent_.75px)] before:bg-size-[1.5rem_1.5rem] before:opacity-35 before:[mask-image:linear-gradient(to_bottom,transparent,#000_12%,#000_88%,transparent)] before:content-['']"
      aria-labelledby="experience-title"
    >
      <LazyMotion features={domAnimation} strict>
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
        <m.header
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.62, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-xs font-extrabold tracking-[0.2em] text-planetary uppercase">
            Career journey
          </p>
          <h2
            className="m-0 font-display text-5xl leading-none font-bold tracking-[-0.055em] text-galaxy sm:text-6xl lg:text-7xl"
            id="experience-title"
          >
            Work Experience
          </h2>
          <p className="mx-auto mt-6 mb-0 max-w-xl text-base leading-relaxed text-text-muted">
            A journey through education, mentorship, and applied Data Science.
          </p>
        </m.header>

        <ol className="relative mt-16 list-none p-0 sm:mt-20">
          <m.span
            className="absolute top-32 bottom-32 left-8 border-l-2 border-dashed border-galaxy/35 sm:left-1/2"
            initial={reduceMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
            aria-hidden="true"
          />
          {experiences.map((experience, index) => {
            const nodeColor = index === 0
              ? 'bg-galaxy'
              : index === 1
                ? 'bg-universe'
                : 'bg-venus'

            return (
              <m.li
                key={`${experience.organization}-${experience.title}`}
                className="group relative grid min-h-64 min-w-0 grid-cols-1 content-center gap-5 py-12 pl-24 sm:grid-cols-3 sm:items-center sm:gap-10 sm:py-12 sm:pl-0 lg:gap-16"
                initial={reduceMotion ? false : {
                  opacity: 0,
                  x: index % 2 === 0 ? -36 : 36,
                  y: 16,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.68,
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="min-w-0 sm:pr-2 lg:pr-6">
                  <p className="mb-3 text-xs font-extrabold tracking-[0.16em] text-planetary uppercase">
                    {String(index + 1).padStart(2, '0')} · {experience.type}
                  </p>
                  <div className="mb-5 flex h-16 w-full max-w-56 items-center">
                    <div className="h-10 w-full">
                      <img
                        src={experience.logo}
                        alt={`${experience.organization} logo`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain object-left"
                      />
                    </div>
                  </div>
                  <h3 className="m-0 font-display text-2xl leading-tight font-bold tracking-[-0.035em] text-galaxy transition-colors duration-300 ease-in-out group-hover:text-planetary sm:text-3xl">
                    {experience.organization}
                  </h3>
                  <p className="mt-3 mb-0 text-sm font-semibold text-text-muted">
                    {experience.period}
                  </p>
                </div>

                <div className="absolute top-1/2 left-0 z-10 -translate-y-1/2 sm:relative sm:top-auto sm:left-auto sm:flex sm:translate-y-0 sm:justify-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-galaxy/55 bg-surface-raised transition-colors duration-300 ease-in-out group-hover:border-planetary">
                    <span
                      className={`h-6 w-6 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 ${nodeColor}`}
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      Timeline point {index + 1}
                    </span>
                  </span>
                </div>

                <div className="min-w-0 sm:pl-2 lg:pl-6">
                  <h3 className="m-0 font-display text-2xl leading-tight font-bold tracking-[-0.035em] text-galaxy transition-colors duration-300 ease-in-out group-hover:text-planetary sm:text-3xl">
                    {experience.title}
                  </h3>
                  <p className="mt-4 mb-0 max-w-xl text-justify text-base leading-relaxed text-text-muted [hyphens:auto]">
                    {experience.description}
                  </p>
                </div>
              </m.li>
            )
          })}
        </ol>
        </div>
      </LazyMotion>
    </section>
  )
}
