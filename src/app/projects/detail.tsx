import {
  ArrowLeft,
  ArrowUpRight,
  ChartLineUp,
  CheckCircle,
  Database,
  GithubLogo,
  Target,
} from '@phosphor-icons/react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProjectSlug, projects } from './data'

export default function ProjectDetail() {
  const { projectSlug } = useParams()
  const project = projects.find((item) => getProjectSlug(item) === projectSlug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [projectSlug])

  if (!project) {
    return (
      <main className="grid min-h-screen place-items-center bg-surface-raised px-6 text-center text-galaxy">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-extrabold tracking-widest text-planetary uppercase">404</p>
          <h1 className="m-0 font-display text-5xl font-bold tracking-tight">Project not found.</h1>
          <p className="mt-5 leading-relaxed text-text-muted">This project may have been renamed or removed.</p>
          <Link className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-galaxy px-6 py-3 font-bold text-white no-underline" to="/#projects">
            <ArrowLeft aria-hidden="true" /> Back to projects
          </Link>
        </div>
      </main>
    )
  }

  const details = project.details

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-surface-raised text-galaxy">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(51,78,172,0.14)_0.7px,transparent_0.7px)] opacity-60 [background-size:24px_24px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed -top-64 right-[-12rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-sky/70 blur-3xl"
        aria-hidden="true"
      />

      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6">
        <nav
          className="pointer-events-auto mx-auto flex min-h-16 max-w-7xl items-center justify-between rounded-full border border-galaxy/10 bg-white/80 px-4 shadow-[0_16px_50px_rgba(8,31,92,0.10)] backdrop-blur-2xl sm:px-6"
          aria-label="Project detail navigation"
        >
          <Link
            className="group inline-flex items-center rounded-full p-1 transition-all duration-300 ease-in-out hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-planetary"
            to="/"
            aria-label="Return to portfolio home"
          >
            <img
              className="h-auto w-28 transition-transform duration-300 ease-in-out group-hover:scale-[1.03] sm:w-32"
              src="/Logo.png"
              alt="Wilson"
              width="452"
              height="132"
            />
          </Link>
          <Link
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-galaxy/10 bg-surface-raised px-4 py-2 text-sm font-extrabold text-galaxy no-underline transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-planetary/30 hover:bg-galaxy hover:text-white hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-planetary sm:px-5"
            to="/#projects"
          >
            <ArrowLeft
              className="text-lg transition-transform duration-300 ease-in-out group-hover:-translate-x-1"
              weight="bold"
              aria-hidden="true"
            />
            <span className="hidden sm:inline">Back to projects</span>
            <span className="sm:hidden">Projects</span>
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-5 pt-32 pb-28 sm:px-8 sm:pt-36 lg:px-10 lg:pb-36">
        <section
          className="grid min-h-[calc(100svh-9rem)] grid-cols-1 items-center gap-16 py-10 xl:grid-cols-12 xl:gap-14 xl:py-16"
          aria-labelledby="project-detail-title"
        >
          <div className="min-w-0 animate-fade-up-intro xl:col-span-6 xl:pr-6">
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-galaxy px-4 py-2 text-xs font-extrabold tracking-[0.16em] text-white uppercase">
                Project case study
              </span>
              <span className="text-sm font-extrabold text-planetary">{project.category}</span>
              <span className="h-1 w-1 rounded-full bg-universe" aria-hidden="true" />
              <span className="text-sm font-extrabold text-text-muted">{project.year}</span>
            </div>

            <h1
              className="m-0 w-full max-w-[9ch] font-display text-[clamp(3.5rem,6.2vw,6.5rem)] leading-[0.88] font-bold tracking-[-0.065em] text-balance"
              id="project-detail-title"
            >
              {project.title}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-muted sm:text-xl">
              {details.summary}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-galaxy px-6 py-3 text-sm font-extrabold text-white no-underline shadow-[0_14px_32px_rgba(8,31,92,0.18)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-planetary hover:shadow-[0_18px_36px_rgba(51,78,172,0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-planetary"
                href="#background"
              >
                Explore the case study
                <ArrowUpRight
                  className="text-lg transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  weight="bold"
                  aria-hidden="true"
                />
              </a>
              {project.repositoryUrl && (
                <a
                  className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-galaxy/15 bg-white/75 px-6 py-3 text-sm font-extrabold text-galaxy no-underline backdrop-blur-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-planetary/35 hover:bg-white hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-planetary"
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubLogo className="text-xl" weight="bold" aria-hidden="true" />
                  Repository
                  <ArrowUpRight
                    className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    weight="bold"
                    aria-hidden="true"
                  />
                </a>
              )}
            </div>
          </div>

          <figure className="relative m-0 min-w-0 animate-fade-up-actions xl:col-span-6 xl:pl-2">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/65 p-3 shadow-[0_32px_80px_rgba(8,31,92,0.16)] backdrop-blur-xl sm:rounded-[2.75rem] sm:p-5">
              <div className="overflow-hidden rounded-[1.4rem] bg-milky-way sm:rounded-[2rem]">
                <img
                  className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-[1.025]"
                  src={project.images[0]}
                  alt={`${project.title} main preview`}
                  width="1200"
                  height="750"
                />
              </div>
            </div>
            <div className="absolute bottom-5 left-5 hidden w-[34%] overflow-hidden rounded-[1.75rem] border-4 border-surface-raised bg-white p-2 shadow-[0_20px_45px_rgba(8,31,92,0.16)] md:block xl:-bottom-8 xl:left-8">
              <img
                className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                src={project.images[1] ?? project.images[0]}
                alt={`${project.title} secondary preview`}
                width="640"
                height="480"
              />
            </div>
          </figure>
        </section>

        <div className="mt-24 grid grid-cols-1 gap-14 lg:mt-32 lg:grid-cols-12 lg:gap-10">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28 rounded-[1.75rem] border border-white/80 bg-white/70 p-3 shadow-[0_18px_50px_rgba(8,31,92,0.08)] backdrop-blur-2xl">
              <p className="px-4 pt-3 pb-2 text-[0.68rem] font-extrabold tracking-[0.18em] text-planetary uppercase">
                On this page
              </p>
              <nav className="flex flex-col" aria-label="Case study sections">
                {[
                  ['01', 'Background', '#background'],
                  ['02', 'Objective', '#objective'],
                  ['03', 'Data Input', '#data-input'],
                  ['04', 'Methodology', '#methodology'],
                  ['05', 'Results', '#results'],
                ].map(([number, label, href]) => (
                  <a
                    key={href}
                    className="group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-text-muted no-underline transition-all duration-300 ease-in-out hover:bg-sky/70 hover:text-galaxy"
                    href={href}
                  >
                    <span className="text-[0.65rem] font-extrabold tracking-widest text-universe transition-colors duration-300 group-hover:text-planetary">
                      {number}
                    </span>
                    {label}
                  </a>
                ))}
              </nav>
              {project.repositoryUrl && (
                <a
                  className="group mt-3 flex items-center justify-between rounded-2xl bg-galaxy px-4 py-4 text-sm font-extrabold text-white no-underline transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-planetary hover:shadow-lg"
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <GithubLogo className="text-lg" weight="bold" aria-hidden="true" />
                    Repository
                  </span>
                  <ArrowUpRight
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    weight="bold"
                    aria-hidden="true"
                  />
                </a>
              )}
            </div>
          </aside>

          <article className="space-y-28 lg:col-span-9 lg:space-y-36">
            <section
              id="background"
              className="scroll-mt-32 border-t border-galaxy/15 pt-8"
              aria-labelledby="background-title"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-6">
                <div className="md:col-span-3">
                  <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-full bg-sky px-3 text-xs font-extrabold text-planetary shadow-sm">
                    01
                  </span>
                  <p className="mt-4 text-xs font-extrabold tracking-[0.18em] text-planetary uppercase">
                    Context
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h2
                    className="m-0 font-display text-5xl font-bold tracking-[-0.05em] sm:text-6xl"
                    id="background-title"
                  >
                    Background
                  </h2>
                  <p className="mt-7 max-w-3xl text-xl leading-[1.75] text-text-muted sm:text-2xl">
                    {details.background}
                  </p>
                </div>
              </div>
              <div className="mt-12 overflow-hidden rounded-[2rem] border border-galaxy/10 bg-white p-2 shadow-[0_24px_60px_rgba(8,31,92,0.10)] sm:p-3">
                <img
                  className="aspect-[16/7] w-full rounded-[1.5rem] object-cover"
                  src={project.images[1] ?? project.images[0]}
                  alt={`${project.title} supporting preview`}
                  width="1200"
                  height="750"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </section>

            <section
              id="objective"
              className="relative scroll-mt-32 overflow-hidden rounded-[2.25rem] bg-galaxy p-8 text-white shadow-[0_28px_70px_rgba(8,31,92,0.22)] sm:p-12 md:p-16"
              aria-labelledby="objective-title"
            >
              <div
                className="pointer-events-none absolute -top-20 -right-16 h-72 w-72 rounded-full bg-planetary/50 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute right-16 -bottom-32 h-64 w-64 rounded-full bg-universe/35 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative grid grid-cols-1 gap-10 md:grid-cols-12">
                <div className="md:col-span-3">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sky ring-1 ring-white/15 backdrop-blur-xl">
                    <Target className="text-3xl" weight="duotone" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-xs font-extrabold tracking-[0.18em] text-sky uppercase">
                    02 · Direction
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h2
                    className="m-0 font-display text-5xl font-bold tracking-[-0.05em] sm:text-6xl"
                    id="objective-title"
                  >
                    Objective
                  </h2>
                  <p className="mt-7 max-w-3xl text-xl leading-[1.75] text-white/80 sm:text-2xl">
                    {details.objective}
                  </p>
                </div>
              </div>
            </section>

            <section
              id="data-input"
              className="scroll-mt-32"
              aria-labelledby="data-input-title"
            >
              <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-3 text-xs font-extrabold tracking-[0.18em] text-planetary uppercase">
                    03 · Foundation
                  </p>
                  <h2
                    className="m-0 font-display text-5xl font-bold tracking-[-0.05em] sm:text-6xl"
                    id="data-input-title"
                  >
                    Data Input
                  </h2>
                </div>
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky text-planetary shadow-sm">
                  <Database className="text-3xl" weight="duotone" aria-hidden="true" />
                </span>
              </div>

              <div className="grid auto-rows-[minmax(12rem,auto)] grid-cols-1 gap-4 md:grid-cols-12">
                {details.dataInput.map((input, index) => (
                  <div
                    key={input}
                    className={`group relative flex min-h-52 flex-col justify-between overflow-hidden rounded-[2rem] border p-7 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(8,31,92,0.13)] sm:p-8 ${
                      index === 0
                        ? 'border-galaxy bg-galaxy text-white md:col-span-7 md:row-span-2'
                        : 'border-galaxy/10 bg-white/85 text-galaxy backdrop-blur-xl md:col-span-5'
                    }`}
                  >
                    <div
                      className={`absolute -right-12 -bottom-16 h-44 w-44 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-125 ${
                        index === 0 ? 'bg-planetary/35' : 'bg-sky/70'
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full text-xs font-extrabold shadow-sm ${
                        index === 0 ? 'bg-white/10 text-white ring-1 ring-white/15' : 'bg-sky text-planetary'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="relative m-0 max-w-md pt-12 text-xl leading-snug font-bold sm:text-2xl">
                      {input}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="methodology"
              className="scroll-mt-32 border-t border-galaxy/15 pt-8"
              aria-labelledby="methodology-title"
            >
              <div className="grid grid-cols-1 gap-14 xl:grid-cols-12 xl:gap-12">
                <div className="min-w-0 xl:col-span-5">
                  <p className="mb-3 text-xs font-extrabold tracking-[0.18em] text-planetary uppercase">
                    04 · Process
                  </p>
                  <h2
                    className="m-0 font-display text-5xl font-bold tracking-[-0.05em] sm:text-6xl xl:text-[3.5rem]"
                    id="methodology-title"
                  >
                    Methodology
                  </h2>
                  <p className="mt-6 max-w-sm leading-relaxed text-text-muted">
                    A focused process that moves from raw inputs to a clear, practical outcome.
                  </p>
                </div>
                <ol className="relative m-0 min-w-0 list-none space-y-3 p-0 before:absolute before:top-8 before:bottom-8 before:left-7 before:w-px before:bg-planetary/20 xl:col-span-7">
                  {details.methodology.map((step, index) => (
                    <li
                      key={step}
                      className="group relative grid grid-cols-[3.5rem_1fr] gap-5 rounded-[1.75rem] p-3 transition-all duration-300 ease-in-out hover:bg-white/75 hover:shadow-[0_18px_45px_rgba(8,31,92,0.08)]"
                    >
                      <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-galaxy text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(8,31,92,0.20)] transition-all duration-300 ease-in-out group-hover:-rotate-3 group-hover:scale-105 group-hover:bg-planetary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="py-2 pr-3">
                        <small className="text-[0.65rem] font-extrabold tracking-[0.18em] text-planetary uppercase">
                          Step {String(index + 1).padStart(2, '0')}
                        </small>
                        <p className="mt-2 mb-0 text-lg leading-relaxed font-bold text-galaxy sm:text-xl">
                          {step}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section
              id="results"
              className="scroll-mt-32 overflow-hidden rounded-[2.5rem] border border-galaxy/10 bg-white shadow-[0_30px_75px_rgba(8,31,92,0.14)]"
              aria-labelledby="results-title"
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="relative bg-sky p-8 sm:p-12 md:col-span-5">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 text-planetary shadow-sm backdrop-blur-lg">
                    <ChartLineUp className="text-3xl" weight="duotone" aria-hidden="true" />
                  </span>
                  <p className="mt-8 mb-3 text-xs font-extrabold tracking-[0.18em] text-planetary uppercase">
                    05 · Impact
                  </p>
                  <h2
                    className="m-0 font-display text-5xl font-bold tracking-[-0.05em] sm:text-6xl"
                    id="results-title"
                  >
                    Results
                  </h2>
                  <ul className="mt-10 space-y-3 p-0">
                    {details.results.map((result) => (
                      <li
                        key={result}
                        className="group flex items-start gap-3 rounded-2xl bg-white/65 p-4 leading-relaxed font-bold shadow-sm backdrop-blur-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-white"
                      >
                        <CheckCircle
                          className="mt-0.5 shrink-0 text-xl text-planetary transition-transform duration-300 ease-in-out group-hover:scale-110"
                          weight="fill"
                          aria-hidden="true"
                        />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative min-h-[28rem] overflow-hidden bg-milky-way md:col-span-7">
                  <img
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-[1.025]"
                    src={project.images[0]}
                    alt={`${project.title} result preview`}
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-galaxy/20 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute right-5 bottom-5 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-extrabold tracking-wider text-galaxy uppercase shadow-lg backdrop-blur-xl">
                    Final outcome
                  </span>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  )
}
