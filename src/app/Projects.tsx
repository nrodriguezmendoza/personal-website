'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Projects.module.css'

// Add/edit projects here. Each entry renders one card; clicking it opens a
// modal with the fuller `details` text. Drop matching images into
// public/images/ (project1.jpg, project2.jpg, ...).
const PROJECTS = [
  {
    src: '/images/project1.svg',
    title: '[Project name]',
    description: '[One-line summary shown on the card]',
    details:
      '[A longer paragraph for the modal — what it does, your role, and the outcome.]',
    tech: ['React', 'TypeScript', 'Next.js'],
  },
  {
    src: '/images/project2.svg',
    title: '[Project name]',
    description: '[One-line summary shown on the card]',
    details:
      '[A longer paragraph for the modal — what it does, your role, and the outcome.]',
    tech: ['Python', 'Flask', 'PostgreSQL'],
  },
  {
    src: '/images/project3.svg',
    title: '[Project name]',
    description: '[One-line summary shown on the card]',
    details:
      '[A longer paragraph for the modal — what it does, your role, and the outcome.]',
    tech: ['Figma', 'CSS', 'Accessibility'],
  },
]

type Project = (typeof PROJECTS)[number]

// Rendered in both the card and the modal, so it lives in one place.
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

// One project card. Self-contained and driven only by its props — copy this
// (or add a PROJECTS entry) to show another project.
function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: () => void
}) {
  return (
    <button className={styles.card} onClick={onOpen}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.cardImage} src={project.src} alt={project.title} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>
        <TechTags tech={project.tech} />
      </div>
    </button>
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [openProject, setOpenProject] = useState<Project | null>(null)

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
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            onOpen={() => setOpenProject(project)}
          />
        ))}
      </div>

      {openProject &&
        createPortal(
          <div
            className={styles.overlay}
            onClick={() => setOpenProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={openProject.title}
          >
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.modalClose}
                onClick={() => setOpenProject(null)}
                aria-label="Close"
              >
                ×
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.modalImage} src={openProject.src} alt="" />
              <div className={styles.modalBody}>
                <h3 className={styles.modalTitle}>{openProject.title}</h3>
                <p className={styles.modalDetails}>{openProject.details}</p>
                <TechTags tech={openProject.tech} />
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  )
}
