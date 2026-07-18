import styles from './Gallery.module.css'

const PHOTOS = [
  '/images/photo1.svg',
  '/images/photo2.svg',
  '/images/photo3.svg',
  '/images/photo4.svg',
  '/images/photo5.svg',
  '/images/photo6.svg',
]

export default function Gallery() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {/* List rendered twice so the loop is seamless: when the first copy
            has scrolled fully out, the animation resets invisibly. */}
        {[...PHOTOS, ...PHOTOS].map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            className={styles.photo}
            src={src}
            alt={`Photo ${(i % PHOTOS.length) + 1}`}
            aria-hidden={i >= PHOTOS.length}
          />
        ))}
      </div>
    </div>
  )
}
