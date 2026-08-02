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
      <h2 className={styles.heading}>About Me 🍚</h2>
      <div className={styles.columns}>
        <div className={styles.bio}>
          {/* Placeholder copy — replace with your own story */}
          <p>
            Hi! I&apos;m Nathalie, a computer science student at Rice University, and
            my mom&apos;s the real reason I&apos;m interested in tech.
            After our family immigrated from Cuba, she taught herself to repair
            computers from scratch just to bring in extra income, and I grew up
            watching her fix things most people would&apos;ve thrown away. That&apos;s
            basically why I joined a robotics team in high school: I wanted to
            build stuff too, not just watch. I ended up as the team&apos;s lead
            programmer, and that&apos;s what pulled me toward computer science for
            good.
          </p>
          <p>
            These days that shows up as way too many personal projects (this
            website included), and a growing obsession with full-stack
            development and AI. Outside of class, I&apos;m either thrifting for
            something no one else will find cool, or wandering campus with a
            camera taking pictures of the squirells! 🐿️
          </p>
        </div>
        <ul className={styles.facts}>
          <li className={styles.fact}>
            <span className={styles.factLabel}>School</span>
            Rice University, CS &apos;29
          </li>
          <li className={styles.fact}>
            <span className={styles.factLabel}>Interests</span>
            Web dev · Design · Community Impact
          </li>
          <li className={styles.fact}>
            <span className={styles.factLabel}>Currently</span>
            I'm in the planning phase of a backend focused project, trying to expand my knowledge of databses and APIs.
          </li>
          <li className={styles.fact}>
            <span className={styles.factLabel}>Fun fact</span>
            I met Lewis Hamilton & Charles Leclerc at a school event (there's photo evidence, ask me to see it!) 🏎️
          </li>
        </ul>
      </div>
    </section>
  )
}
