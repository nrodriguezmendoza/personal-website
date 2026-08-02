'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Experience.module.css'

// Add/edit experiences here — newest first. Each renders a card on the
// timeline. `period` shows on the timeline side; swap the bracketed text.
const EXPERIENCES = [
  {
    period: 'May 2026 – Present',
    role: 'Student Computing Consultant',
    org: 'Rice University Technology Solutions & Services',
    description:
      "Resolve 50+ support issues a week for 8,000+ university students and staff members by diagnosing problems over phone, tickets, and follow-ups, then translating the fix into plain instructions.",
  },
  {
    period: 'May 2026 – July 2026',
    role: 'Algorithms Instructor',
    org: 'Tapia Center, Rice University',
    description:
      "Turned Boolean logic and algorithm design into hands-on, interactive lessons for 720 campers enabaling them to create an algorithm that evaluates 1,000 mock college applicants and selects 200. I also coordinated daily transitions for 180 campers with 100% on-time starts.",
  },
  {
    period: 'January 2026 – May 2026',
    role: 'Undergraduate Research Assistant',
    org: 'Rice University',
    description:
      'Trained Random Forest models with scikit-learn to predict Curie temperatures of ferromagnetic materials, cleaning and analyzing 20,000 material samples with pandas along the way. Cut prediction RMSE 40%, from 50K to 30K, through better preprocessing and hyperparameter tuning.',
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

      <div id="resume-cta" className={styles.cta}>
        <p className={styles.ctaText}>
          Want to learn more? Download my resume. 🌝
        </p>
        <a className={styles.downloadButton} href="/resume.pdf" download>
          Download Resume
        </a>
      </div>
    </section>
  )
}
