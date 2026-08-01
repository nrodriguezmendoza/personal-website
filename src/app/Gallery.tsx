'use client'

import { useState } from 'react'
import styles from './Gallery.module.css'

// Add/edit photo captions here. Each entry pairs an image in public/images
// with the text shown when a visitor clicks it.
const PHOTOS = [
  { src: '/images/photo1.jpg', caption: 'Birthday tiara and my Minecraft zombie 🧟‍♀️' },
  { src: '/images/photo2.jpg', caption: 'Baby me, super cool!' },
  { src: '/images/photo3.jpg', caption: 'My first day at Rice University 🦉' },
  { src: '/images/photo4.jpg', caption: 'Presenting a software project @ Rice!' },
  { src: '/images/photo5.jpg', caption: 'A pretty day on campus 🌅' },
  { src: '/images/photo6.jpg', caption: 'Graduation day 🎓' },
]

export default function Gallery() {
  const [openPhoto, setOpenPhoto] = useState<(typeof PHOTOS)[number] | null>(null)

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {/* List rendered 4x so the strip covers wide viewports with photos to
            spare: the animation slides one copy's width (-25%) per loop, and
            the reset lands on an identical frame, so the motion is seamless. */}
        {[...PHOTOS, ...PHOTOS, ...PHOTOS, ...PHOTOS].map((photo, i) => (
          <button
            key={i}
            className={styles.photoButton}
            onClick={() => setOpenPhoto(photo)}
            aria-hidden={i >= PHOTOS.length}
            tabIndex={i >= PHOTOS.length ? -1 : 0}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.photo}
              src={photo.src}
              alt={`Photo ${(i % PHOTOS.length) + 1}`}
            />
          </button>
        ))}
      </div>

      {openPhoto && (
        <div
          className={styles.overlay}
          onClick={() => setOpenPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo"
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.modalImage} src={openPhoto.src} alt="" />
            <p className={styles.modalCaption}>{openPhoto.caption}</p>
            <button
              className={styles.modalClose}
              onClick={() => setOpenPhoto(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
