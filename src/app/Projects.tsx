'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { PROJECTS, type Project } from './projects/data'
import styles from './Projects.module.css'

// Rendered in both the card and the detail page, so it lives in one place.
function TechTags({ tech }: { tech: string[] }) {
  return (
    <ul className={styles.techList}>
      {tech.map((t) => (
        <li key={t} className={styles.tech}>
          {t}
        </li>
      ))}
    </ul>
  )
}

// One project card linking to its own /projects/<slug> page. Self-contained
// and driven only by its props — copy this (or add a PROJECTS entry) to show
// another project.
function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className={styles.card} href={`/projects/${project.slug}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.cardImage} src={project.src} alt={project.title} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>
        <TechTags tech={project.tech} />
      </div>
    </Link>
  )
}

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className={`${styles.projects} ${visible ? styles.visible : ''}`}
    >
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
