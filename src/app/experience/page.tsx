import { GraduationCap } from '@phosphor-icons/react'

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="section__inner experience__layout">
        <div className="empty-state__copy">
          <h2 id="experience-title">Experience in progress.</h2>
          <p>
            I am building practical experience through Data Science study and project work. Verified roles and dates will be added here.
          </p>
        </div>
        <GraduationCap className="empty-state__icon" aria-hidden="true" />
      </div>
    </section>
  )
}
