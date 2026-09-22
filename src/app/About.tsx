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
          <p>
            Hi! I&apos;m Nathalie, a computer science student at Rice University,
            and my interest in tech really started with my mom. After our
            family immigrated from Cuba, she taught herself how to repair
            computers to bring in extra income. I grew up watching her fix
            computers most people would have thrown away and explain what all
            the different parts did along the way.
          </p>
          <p>
            That&apos;s a big part of why I started an all-girls robotics team in
            high school. I wanted to build things too, not just watch. I
            became the team&apos;s lead programmer, and somewhere between
            debugging our robot and watching it finally do what I wanted, I
            realized how much I liked solving problems through code.
          </p>
          <p>
            Now, that interest shows up as way too many personal projects
            (this website included) and a growing love for full-stack
            development and AI. I especially like building things people can
            actually use, whether that means helping a nonprofit figure out
            where to expand its food outreach or replacing a stack of paper
            forms with something easier.
          </p>
          <p>
            When I&apos;m not coding, I&apos;m probably thrifting for something no one
            else will find cool or wandering around campus with my camera,
            taking pictures of the squirrels. 🐿️
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
