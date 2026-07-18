import Gallery from './Gallery'
import styles from './page.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <button className={styles.navButton}>About Me</button>
        <button className={styles.navButton}>Projects</button>
        <button className={styles.navButton}>Resume</button>
        <button className={styles.navButton}>Contact</button>
      </nav>
      <div className={styles.content}>
      <section className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.headshot}
          src="/images/headshot.svg"
          alt="Headshot of Nathalie Rodriguez"
        />
        <h1 className={styles.title}>Nathalie Rodriguez</h1>
        <p className={styles.subtitle}>Welcome to my personal website.</p>
      </section>
      <section className={styles.gallerySection}>
        <Gallery />
      </section>
      </div>
    </main>
  )
}
