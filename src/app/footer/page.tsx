import { ArrowUpRight } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-surface-muted text-galaxy [contain-intrinsic-size:auto_28rem] [content-visibility:auto]" aria-labelledby="contact-title">
      <div className="mx-auto grid min-h-96 w-[min(calc(100%_-_3rem),1216px)] grid-cols-[minmax(0,1fr)_auto] items-center gap-8 py-[clamp(4rem,8vw,7rem)] max-[540px]:min-h-88 max-[540px]:w-full max-[540px]:grid-cols-1 max-[540px]:content-center max-[540px]:px-5">
        <div>
          <h2 className="m-0 font-display text-[clamp(2.6rem,6vw,5.2rem)] leading-none font-[650] tracking-[-.052em] text-galaxy" id="contact-title">Let&apos;s connect.</h2>
          <p className="mt-[1.35rem] mb-0 max-w-[62ch] text-[clamp(1rem,1.5vw,1.12rem)] leading-[1.65] text-text-muted">For collaboration or conversation, LinkedIn is the best place to reach me.</p>
        </div>

        <a
          className="group/button relative inline-flex min-h-[3.35rem] justify-self-end items-center justify-center gap-[.65rem] overflow-hidden rounded-full border border-galaxy bg-galaxy px-[1.3rem] py-[.82rem] text-[.88rem] font-bold text-white no-underline shadow-[0_.8rem_2rem_rgb(8_31_92/18%)] transition-[transform,box-shadow,color,background] duration-280 ease-spring-out before:absolute before:inset-0 before:translate-y-[102%] before:bg-planetary before:transition-transform before:duration-350 before:ease-spring-out before:content-[''] hover:-translate-y-1 hover:shadow-[0_1.1rem_2.4rem_rgb(8_31_92/24%)] hover:before:translate-y-0 focus-visible:outline-3 focus-visible:outline-sky focus-visible:outline-offset-3 max-[540px]:min-h-[2.9rem] max-[540px]:justify-self-start max-[540px]:px-4 max-[540px]:py-[.7rem] max-[540px]:text-[.78rem] motion-reduce:transition-duration-[.01ms] [&_span]:relative [&_span]:z-1 [&_svg]:relative [&_svg]:z-1 [&_svg]:size-[1.05rem] [&_svg]:transition-transform [&_svg]:duration-280 [&_svg]:group-hover/button:translate-x-[3px] [&_svg]:group-hover/button:-translate-y-[3px]"
          href="https://www.linkedin.com/in/wilson-gregory-pribadi/"
          target="_blank"
          rel="noreferrer"
        >
          <span>Connect</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
