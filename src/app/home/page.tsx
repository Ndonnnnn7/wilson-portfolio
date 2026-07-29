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

const buttonBase = "relative inline-flex min-h-[3.35rem] items-center justify-center gap-[.65rem] overflow-hidden rounded-full border border-galaxy px-[1.3rem] py-[.82rem] text-[.88rem] font-bold no-underline transition-[transform,box-shadow,color,background] duration-280 ease-spring-out focus-visible:outline-3 focus-visible:outline-sky focus-visible:outline-offset-3 max-[540px]:min-h-[2.9rem] max-[540px]:px-4 max-[540px]:py-[.7rem] max-[540px]:text-[.78rem] max-[360px]:w-full motion-reduce:transition-duration-[.01ms] [&_span]:relative [&_span]:z-1 [&_svg]:relative [&_svg]:z-1 [&_svg]:size-[1.05rem] [&_svg]:transition-transform [&_svg]:duration-280"

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
    <div className="relative isolate min-h-dvh overflow-visible bg-transparent">
      <LazyMotion features={domAnimation} strict>
        <section
          ref={homeRef}
          id="home"
          className="relative z-1 mx-auto grid min-h-dvh w-[min(calc(100%_-_4rem),1380px)] grid-cols-[minmax(0,1.05fr)_minmax(29rem,.95fr)] items-center gap-[clamp(1rem,3vw,4rem)] px-8 pt-28 pb-16 max-[1050px]:min-h-0 max-[1050px]:w-[min(calc(100%_-_2rem),56rem)] max-[1050px]:grid-cols-1 max-[1050px]:gap-10 max-[1050px]:px-8 max-[1050px]:pt-[7.5rem] max-[1050px]:pb-20 max-[900px]:w-[min(calc(100%_-_2rem),46rem)] max-[900px]:gap-9 max-[900px]:px-6 max-[900px]:pt-[7.25rem] max-[900px]:pb-16 max-[540px]:w-full max-[540px]:gap-8 max-[540px]:px-5 max-[540px]:pt-26 max-[540px]:pb-14 max-[360px]:px-4 max-[360px]:pt-24 max-[360px]:pb-12"
          aria-labelledby="home-title"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <div className="pointer-events-none absolute -inset-x-[15%] -top-[15%] bottom-0 -z-2" aria-hidden="true">
            <m.span className="absolute top-[7%] left-[3%] block aspect-square w-[30rem] rounded-full bg-[radial-gradient(circle,rgb(186_214_235/48%)_0%,rgb(186_214_235/24%)_38%,transparent_72%)] will-change-transform" style={{ x: farX, y: farY }} />
            <m.span className="absolute right-[2%] bottom-[1%] block aspect-square w-[42rem] rounded-full bg-[radial-gradient(circle,rgb(112_150_209/27%)_0%,rgb(112_150_209/13%)_40%,transparent_74%)] will-change-transform" style={{ x: nearX, y: nearY }} />
            <m.span className="absolute top-[40%] left-[43%] block h-48 w-[22rem] rounded-full bg-[radial-gradient(ellipse,rgb(255_255_255/76%)_0%,rgb(255_255_255/28%)_42%,transparent_74%)] will-change-transform" style={{ x: farX, y: nearY }} />
          </div>

          <m.div className="relative z-1 min-w-0 max-w-[47rem] will-change-transform max-[1050px]:max-w-3xl max-[900px]:contents" style={{ y: copyScrollY }}>
            <h1 className="m-0 font-display text-[clamp(4rem,6.2vw,6.8rem)] leading-[.87] font-[650] tracking-[-.075em] text-galaxy max-[1050px]:text-[clamp(4rem,10vw,6.5rem)] max-[900px]:order-1 max-[900px]:max-w-none max-[900px]:text-center max-[900px]:text-[clamp(3.8rem,11vw,6rem)] max-[540px]:w-full max-[540px]:min-w-0 max-[540px]:text-[clamp(2.65rem,10.8vw,3.15rem)] max-[540px]:leading-[.92] max-[360px]:text-[clamp(2.35rem,11vw,2.7rem)]" id="home-title">
              <span className="ml-[clamp(1rem,5vw,5rem)] block animate-title-in max-[900px]:ml-0 motion-reduce:animate-none">Hi, I'm <em className="relative font-serif font-normal tracking-[-.06em] text-planetary after:absolute after:right-0 after:bottom-[-.05em] after:h-[.08em] after:w-[93%] after:origin-left after:rotate-[-2deg] after:scale-x-0 after:rounded-full after:bg-planetary after:animate-underline-in after:content-[''] motion-reduce:after:scale-x-100 motion-reduce:after:animate-none">Wilson</em></span>
            </h1>

            <div className="relative mt-8 ml-[clamp(1rem,5vw,5rem)] max-w-[37rem] animate-fade-up-intro border-l-2 border-planetary pl-5 max-[900px]:order-3 max-[900px]:mx-auto max-[900px]:mt-[-1rem] max-[900px]:border-l-0 max-[900px]:pl-0 max-[900px]:text-center max-[540px]:mx-auto max-[540px]:mt-[-1rem] max-[540px]:w-[calc(100vw_-_3rem)] max-[540px]:min-w-0 max-[540px]:max-w-[22rem] motion-reduce:animate-none">
              <p className="m-0 text-[clamp(1rem,1.25vw,1.12rem)] leading-[1.65] text-text-muted max-[540px]:w-full max-[540px]:text-[.93rem] max-[540px]:leading-[1.55] max-[540px]:[overflow-wrap:anywhere]">
                Data Scientist with hands-on experience in machine learning, cloud platforms, and LLM-powered AI applications.
              </p>
            </div>

            <div className="mt-8 ml-[clamp(1rem,5vw,5rem)] flex animate-fade-up-actions flex-wrap gap-[.8rem] max-[900px]:order-4 max-[900px]:mx-auto max-[900px]:mt-[-.5rem] max-[900px]:justify-center max-[540px]:mx-auto max-[540px]:mt-[-.25rem] max-[540px]:w-full max-[540px]:min-w-0 max-[540px]:flex-col max-[540px]:items-center max-[540px]:gap-[.6rem] max-[360px]:items-stretch motion-reduce:animate-none">
              <a className={`${buttonBase} group/button bg-galaxy text-white shadow-[0_.8rem_2rem_rgb(8_31_92/18%)] before:absolute before:inset-0 before:translate-y-[102%] before:bg-planetary before:transition-transform before:duration-350 before:ease-spring-out before:content-[''] hover:-translate-y-1 hover:shadow-[0_1.1rem_2.4rem_rgb(8_31_92/24%)] hover:before:translate-y-0 [&_svg]:group-hover/button:translate-x-[3px] [&_svg]:group-hover/button:-translate-y-[3px]`} href="#about">
                <span>Explore my work</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                className={`${buttonBase} border-galaxy/18 bg-white/45 text-galaxy backdrop-blur-[8px] hover:-translate-y-1 hover:bg-white/70 hover:shadow-[0_1rem_2rem_rgb(8_31_92/16%)] [&_svg]:group-hover/button:translate-x-[3px] [&_svg]:group-hover/button:-translate-y-[3px]`}
                href="https://drive.google.com/file/d/1poo6Z4FWh1fMsbfNZjWIxddJIdeM6XBS/view"
                target="_blank"
                rel="noreferrer"
              >
                <DownloadSimple aria-hidden="true" />
                <span>Download CV</span>
              </a>
            </div>

            <nav id="socials" className="mt-8 ml-[clamp(1rem,5vw,5rem)] flex animate-fade-up-socials items-center gap-[.55rem] max-[900px]:order-5 max-[900px]:mx-auto max-[900px]:mt-[-.5rem] max-[900px]:justify-center max-[540px]:mx-auto max-[540px]:mt-[-.25rem] max-[540px]:w-full max-[540px]:min-w-0 motion-reduce:animate-none" aria-label="Wilson's social links">
              {socialLinks.map(({ label, href, Icon }) => (
                <a className="group/social relative grid size-[2.45rem] place-items-center rounded-full border border-galaxy/12 bg-white/55 text-galaxy no-underline transition-[color,background,transform] duration-300 ease-spring-out hover:-translate-y-[5px] hover:rotate-5 hover:bg-planetary hover:text-white focus-visible:outline-3 focus-visible:outline-sky focus-visible:outline-offset-3 max-[540px]:size-[2.35rem] [&:nth-of-type(even):hover]:-rotate-5 [&_svg]:size-[1.08rem]" key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                  <Icon aria-hidden="true" />
                  <span className="pointer-events-none absolute bottom-[calc(100%_+_.55rem)] left-1/2 translate-x-[-50%] translate-y-[5px] rounded-full bg-galaxy px-[.55rem] py-[.35rem] text-[.65rem] text-white opacity-0 transition-[opacity,transform] duration-200 group-hover/social:translate-y-0 group-hover/social:opacity-100 max-[540px]:hidden" aria-hidden="true">{label}</span>
                </a>
              ))}
            </nav>
          </m.div>

          <m.div className="relative z-1 aspect-[.93] w-[min(100%,38rem)] place-self-center will-change-transform after:pointer-events-none after:absolute after:right-[4%] after:bottom-[-4%] after:left-[10%] after:-z-1 after:h-[24%] after:rounded-full after:bg-[radial-gradient(ellipse,rgb(8_31_92/17%)_0%,rgb(51_78_172/8%)_42%,transparent_74%)] after:content-[''] max-[1050px]:w-[min(82vw,35rem)] max-[900px]:order-2 max-[900px]:mx-auto max-[900px]:mt-[-1rem] max-[900px]:w-[min(82vw,34rem)] max-[540px]:aspect-[.95] max-[540px]:w-[min(88vw,27rem)]" style={{ x: portraitX, y: visualScrollY, scale: visualScale }} aria-label="Portrait of Wilson">
            <m.div
              className="group/portrait relative isolate grid size-full origin-bottom items-end justify-items-center"
              style={{ rotateX: portraitRotateX, rotateY: portraitRotateY, transformPerspective: 1100 }}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: 35 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-[1%] -z-2 animate-slow-spin motion-reduce:animate-none [&_span]:absolute [&_span]:inset-0 [&_span]:rounded-full [&_span]:border [&_span]:border-planetary/17 [&_span:nth-child(2)]:inset-[8%] [&_span:nth-child(2)]:border-dashed [&_span:nth-child(3)]:inset-[16%] [&_span:nth-child(3)]:border-white/65" aria-hidden="true"><span /><span /><span /></div>
              <div className="absolute bottom-[2%] -z-1 aspect-square w-[88%] rounded-full bg-[linear-gradient(145deg,#d9e8f7,#83a8d5)] shadow-[inset_-2rem_-2rem_5rem_rgb(51_78_172/18%)] after:absolute after:inset-[6%] after:rounded-[inherit] after:border after:border-white/38 after:content-['']" />
              <img className="absolute bottom-[2%] z-2 block h-auto max-h-full w-[90%] origin-bottom object-contain object-bottom transition-transform duration-500 ease-spring-out group-hover/portrait:scale-[1.012] max-[540px]:w-[92%] max-[540px]:transform-none max-[540px]:group-hover/portrait:transform-none max-[540px]:group-hover/portrait:drop-shadow-[0_1.4rem_1rem_rgb(8_31_92/15%)] motion-reduce:transition-duration-[.01ms]" src="/Photo Wilson.png" alt="Wilson Gregory Pribadi" width="2864" height="3052" />
            </m.div>
          </m.div>
        </section>
      </LazyMotion>
    </div>
  )
}
