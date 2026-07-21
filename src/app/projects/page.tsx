import { FolderOpen } from '@phosphor-icons/react'

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="section__inner projects__layout">
        <FolderOpen className="empty-state__icon" aria-hidden="true" />
        <div className="empty-state__copy">
          <h2 id="projects-title">Projects are being documented.</h2>
          <p>
            Case studies will appear here when the problem, process, and outcome are ready to share clearly.
          </p>
        </div>
      </div>
    </section>
  )
}
