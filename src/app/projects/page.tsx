import { ArrowRight, ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProjectSlug, projects, technologyLogos } from './data'
import type { Project } from './data'

function ProjectImageSlider({ images, title }: Pick<Project, 'images' | 'title'>) {
  const [activeImage, setActiveImage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReduceMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (isPaused || reduceMotion || images.length < 2) return

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [images.length, isPaused, reduceMotion])

  return (
    <div
      className="relative h-52 overflow-hidden rounded-2xl bg-sky sm:h-56 lg:h-48 xl:h-52"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
      }}
    >
      {images.map((image, index) => (
        <img
          key={image}
          className={`absolute inset-0 block h-full w-full object-cover transition-opacity duration-500 motion-reduce:transition-none ${index === activeImage ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          src={image}
          alt={`${title} screenshot ${index + 1}`}
          width="1200"
          height="750"
          loading="lazy"
          decoding="async"
          aria-hidden={index !== activeImage}
        />
      ))}

      <div className="absolute right-3 bottom-3 flex gap-2 rounded-full bg-galaxy/80 p-2 backdrop-blur-sm" aria-label="Select project screenshot">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`h-2 cursor-pointer rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 ${index === activeImage ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
            onClick={() => setActiveImage(index)}
            aria-label={`Show screenshot ${index + 1} of ${images.length}`}
            aria-current={index === activeImage ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  index,
  reduceMotion,
}: {
  project: Project
  index: number
  reduceMotion: boolean
}) {
  return (
    <m.article
      className="flex min-w-0 overflow-hidden rounded-3xl border border-galaxy/10 bg-white shadow-xl transition-[border-color,box-shadow] duration-200 hover:border-planetary/30 hover:shadow-2xl"
      initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: reduceMotion ? 0 : 0.58,
        delay: reduceMotion ? 0 : (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={reduceMotion ? undefined : {
        y: -6,
        transition: { type: 'spring', stiffness: 360, damping: 24, delay: 0 },
      }}
    >
      <div className="min-w-0 flex-1 p-3 pr-2">
        <ProjectImageSlider images={project.images} title={project.title} />

        <div className="px-1 pt-4 pb-2">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-text-muted">
            <span>{project.category}</span>
            <span className="h-1 w-1 rounded-full bg-universe" aria-hidden="true" />
            <span>{project.year}</span>
          </div>

          <h3 className="m-0 font-display text-xl leading-tight font-bold tracking-tight text-galaxy xl:text-2xl">{project.title}</h3>

          <ul className="mt-5 mb-0 flex list-none flex-wrap gap-2 p-0" aria-label="Project technologies">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-galaxy/20 bg-white px-3 py-1 text-xs font-semibold text-text-muted">{tag}</li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full bg-galaxy px-4 py-2 text-xs font-bold text-white no-underline transition-colors duration-200 hover:bg-planetary focus-visible:outline-2 focus-visible:outline-universe focus-visible:outline-offset-2" to={`/projects/${getProjectSlug(project)}`}>
              Detail
              <ArrowRight className="h-4 w-4" weight="bold" aria-hidden="true" />
            </Link>

            {project.repositoryUrl && (
              <a className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border border-galaxy/15 px-4 py-2 text-xs font-bold text-planetary no-underline transition-colors duration-200 hover:border-planetary/30 hover:bg-surface-muted hover:text-galaxy focus-visible:outline-2 focus-visible:outline-universe focus-visible:outline-offset-2" href={project.repositoryUrl} target="_blank" rel="noreferrer">
                <GithubLogo className="h-4 w-4" weight="bold" aria-hidden="true" />
                Repository
                <ArrowUpRight className="h-4 w-4" weight="bold" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>

      <aside className="flex w-14 shrink-0 items-center border-l border-galaxy/10 bg-surface-raised px-2 py-4">
        <ul className="m-0 flex w-full list-none flex-col items-center gap-4 p-0" aria-label="Technology icons">
          {project.technologies.map((technology) => {
            const { name, Icon, color } = technologyLogos[technology]

            return (
              <li key={technology} className="grid h-10 w-10 place-items-center rounded-xl bg-surface-muted shadow-sm" title={name}>
                <Icon size="20" color={color} />
                <span className="sr-only">{name}</span>
              </li>
            )
          })}
        </ul>
      </aside>
    </m.article>
  )
}

export default function Projects() {
  const reduceMotion = Boolean(useReducedMotion())

  return (
    <section id="projects" className="relative isolate overflow-hidden bg-transparent text-galaxy before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(rgb(51_78_172/13%)_.75px,transparent_.75px)] before:bg-size-[1.5rem_1.5rem] before:opacity-35 before:[mask-image:linear-gradient(to_bottom,transparent,#000_12%,#000_88%,transparent)] before:content-['']" aria-labelledby="projects-title">
      <LazyMotion features={domAnimation} strict>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <m.header
            className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span className="mb-3 inline-block rounded-full bg-white px-4 py-2 text-xs font-extrabold tracking-widest text-planetary uppercase shadow-sm">Selected work</span>
              <h2 className="m-0 font-display text-6xl leading-none font-bold tracking-tight text-galaxy md:text-7xl" id="projects-title">Projects</h2>
            </div>
            <p className="m-0 max-w-xl text-base leading-relaxed text-galaxy">Projects developed by Wilson, turning data and ideas into useful digital experiences.</p>
          </m.header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </LazyMotion>
    </section>
  )
}
