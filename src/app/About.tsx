'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

export default function About() {
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
      { threshold: 0.2 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${styles.about} ${visible ? styles.visible : ''}`}
    >
      <h2 className={styles.heading}>About Me</h2>
      <div className={styles.columns}>
        <div className={styles.bio}>
          {/* Placeholder copy — replace with your own story */}
          <p>
            Hi! I&apos;m Nathalie, a computer science student at Rice University.
            I grew up in [hometown], where I first fell in love with [what got
            you into CS — a robotics club, a game you modded, a website you
            hacked together].
          </p>
          <p>
            These days I spend my time on [current projects, clubs, or
            research], and I&apos;m especially interested in [areas you care
            about — web development, AI, accessibility, design]. Outside of
            class you&apos;ll find me [hobbies — photography, hiking, baking,
            volunteering].
          </p>
          <p>
            I&apos;m always excited to meet people building cool things — feel
            free to reach out!
          </p>
        </div>
        <ul className={styles.facts}>
          <li className={styles.fact}>
            <span className={styles.factLabel}>School</span>
            Rice University, CS &apos;28
          </li>
          <li className={styles.fact}>
            <span className={styles.factLabel}>Interests</span>
            [Web dev · Design · Community]
          </li>
          <li className={styles.fact}>
            <span className={styles.factLabel}>Currently</span>
            [What you&apos;re working on]
          </li>
          <li className={styles.fact}>
            <span className={styles.factLabel}>Fun fact</span>
            [Something memorable]
          </li>
        </ul>
      </div>
    </section>
  )
}
