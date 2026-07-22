import { FolderOpen } from '@phosphor-icons/react'

export default function Projects() {
  return (
    <section id="projects" className="relative bg-milky-way text-galaxy [contain-intrinsic-size:auto_40rem] [content-visibility:auto]" aria-labelledby="projects-title">
      <div className="mx-auto grid min-h-[min(42rem,80dvh)] max-w-[67rem] w-[min(calc(100%_-_3rem),1216px)] grid-cols-[auto_minmax(0,1fr)] items-center gap-[clamp(2rem,7vw,6rem)] py-[clamp(5rem,9vw,8rem)] max-[540px]:min-h-0 max-[540px]:w-full max-[540px]:grid-cols-1 max-[540px]:px-5 max-[540px]:py-20">
        <FolderOpen className="size-[clamp(4.5rem,9vw,7.5rem)] rounded-2xl bg-planetary/9 p-[clamp(1rem,2vw,1.6rem)] text-planetary shadow-[inset_0_0_0_1px_rgb(8_31_92/14%)]" aria-hidden="true" />
        <div className="max-w-[50rem]">
          <h2 className="m-0 font-display text-[clamp(2.35rem,5vw,4.8rem)] leading-none font-[650] tracking-[-.052em] text-galaxy" id="projects-title">Projects are being documented.</h2>
          <p className="mt-[1.35rem] mb-0 max-w-[62ch] text-[clamp(1rem,1.5vw,1.12rem)] leading-[1.65] text-text-muted">
            Case studies will appear here when the problem, process, and outcome are ready to share clearly.
          </p>
        </div>
      </div>
    </section>
  )
}
