'use client'

import styles from './page.module.css'

/* Anchor that animates the scroll itself (rAF + easing) instead of relying
   on CSS scroll-behavior, which some engines cancel or ignore. */
export default function NavLink({
  target,
  children,
  onNavigate,
}: {
  target: string
  children: React.ReactNode
  onNavigate?: () => void
}) {
  const handleClick = (e: React.MouseEvent) => {
    onNavigate?.()
    const el = document.getElementById(target)
    if (!el) return
    e.preventDefault()
    history.pushState(null, '', `#${target}`)

    const startY = window.scrollY
    const endY = el.getBoundingClientRect().top + startY
    const duration = 700
    const start = performance.now()
    const easeInOut = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2

    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      window.scrollTo(0, startY + (endY - startY) * easeInOut(t))
      if (t < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  return (
    <a className={styles.navButton} href={`#${target}`} onClick={handleClick}>
      {children}
    </a>
  )
}
