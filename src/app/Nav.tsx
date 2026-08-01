'use client'

import { useState } from 'react'
import NavLink from './NavLink'
import styles from './page.module.css'

const LINKS = [
  { target: 'about', label: 'About Me' },
  { target: 'projects', label: 'Projects' },
  { target: 'experience', label: 'Resume' },
  { target: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <button
        className={styles.hamburger}
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.hamburgerBar} />
        <span className={styles.hamburgerBar} />
        <span className={styles.hamburgerBar} />
      </button>
      <div className={`${styles.navLinks} ${open ? styles.navLinksOpen : ''}`}>
        {LINKS.map((link) => (
          <NavLink
            key={link.target}
            target={link.target}
            onNavigate={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
