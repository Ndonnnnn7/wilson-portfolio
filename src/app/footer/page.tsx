import { ArrowUpRight } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer id="contact" className="site-footer" aria-labelledby="contact-title">
      <div className="site-footer__inner">
        <div>
          <h2 id="contact-title">Let&apos;s connect.</h2>
          <p>For collaboration or conversation, LinkedIn is the best place to reach me.</p>
        </div>

        <a
          className="button button--primary site-footer__action"
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
