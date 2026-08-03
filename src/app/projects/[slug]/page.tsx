import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PROJECTS } from '../data'
import styles from './ProjectDetail.module.css'

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  return { title: project ? `${project.title} — Nathalie Rodriguez` : 'Project' }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <Link href="/#projects" className={styles.back}>
          ← Back to projects
        </Link>

        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <ul className={styles.techList}>
            {project.tech.map((t) => (
              <li key={t} className={styles.tech}>
                {t}
              </li>
            ))}
          </ul>
        </header>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.image} src={project.src} alt="" />

        <div className={styles.sections}>
          {project.sections.map((section, i) => (
            <section key={section.heading} className={styles.section}>
              <div className={styles.sectionMeta}>
                <span className={styles.sectionIndex}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
              </div>
              <p className={styles.sectionBody}>{section.body}</p>
              {section.image && (
                <figure className={styles.sectionFigure}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className={styles.sectionImage} src={section.image} alt="" />
                  {section.caption && (
                    <figcaption className={styles.sectionCaption}>
                      {section.caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
