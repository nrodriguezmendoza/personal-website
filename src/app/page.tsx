import About from './About'
import Experience from './Experience'
import Footer from './Footer'
import Gallery from './Gallery'
import Nav from './Nav'
import Projects from './Projects'
import styles from './page.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.content}>
        <section className={styles.hero}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.headshot}
            src="/images/headshot.jpg"
            alt="Headshot of Nathalie Rodriguez"
          />
          <h1 className={styles.title}>Hi, I&apos;m Nathalie Rodriguez!</h1>
          <p className={styles.subtitle}>
            I love building, designing, and giving back to my community.
            <br />
            CS sophomore @ Rice University 🦉
          </p>
        </section>
        <section className={styles.gallerySection}>
          <Gallery />
        </section>
      </div>
      <About />
      <Projects />
      <Experience />
      <Footer />
    </main>
  )
}
