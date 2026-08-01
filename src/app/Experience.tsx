'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Experience.module.css'

// Add/edit experiences here — newest first. Each renders a card on the
// timeline. `period` shows on the timeline side; swap the bracketed text.
const EXPERIENCES = [
  {
    period: '[Summer 2026]',
    role: '[Role / Title]',
    org: '[Organization]',
    description:
      '[What you worked on, the impact you had, and the tools you used. One or two sentences is plenty.]',
  },
  {
    period: '[2025 – Present]',
    role: '[Role / Title]',
    org: '[Organization or Club]',
    description:
      '[A responsibility or project you led, and what it taught you or what changed because of it.]',
  },
  {
    period: '[2024 – 2025]',
    role: '[Role / Title]',
    org: '[Organization]',
    description:
      '[Something you built, researched, or organized. Highlight a concrete result where you can.]',
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`${styles.experience} ${visible ? styles.visible : ''}`}
    >
      <h2 className={styles.heading}>Experience</h2>

      <ol className={styles.timeline}>
        {EXPERIENCES.map((item, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.marker} aria-hidden="true" />
            <div className={styles.card}>
              <span className={styles.period}>{item.period}</span>
              <h3 className={styles.role}>{item.role}</h3>
              <span className={styles.org}>{item.org}</span>
              <p className={styles.description}>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.cta}>
        <p className={styles.ctaText}>
          Want to learn more? Download my résumé.
        </p>
        <a className={styles.downloadButton} href="/resume.pdf" download>
          Download Résumé
        </a>
      </div>
    </section>
  )
}
