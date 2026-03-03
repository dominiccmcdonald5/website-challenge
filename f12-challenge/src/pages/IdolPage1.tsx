import { useMemo } from 'react'

const GALLERY_ITEM_COUNT = 10

function buildGalleryImages() {
  const hiddenImageIndex = Math.floor(Math.random() * GALLERY_ITEM_COUNT)

  return Array.from({ length: GALLERY_ITEM_COUNT }, (_, index) => ({
    id: index,
    src:
      index === hiddenImageIndex
        ? '/IdolImage.png'
        : '/Screenshot%202026-03-02%20194730.png',
    alt: index === hiddenImageIndex ? 'Hidden challenge screenshot' : 'Screenshot image',
  }))
}

function IdolPage1() {
  const galleryImages = useMemo(() => buildGalleryImages(), [])

  return (
    <main className="page page--full-width">
      <h1>Challenge Page 1</h1>

      <section className="page1-gallery" aria-label="Screenshot gallery">
        {galleryImages.map((galleryImage) => (
          <img
            key={galleryImage.id}
            className="page1-gallery__image"
            src={galleryImage.src}
            alt={galleryImage.alt}
            loading="lazy"
          />
        ))}
      </section>

      <a className="back-link" href="/">
        Back to Introduction
      </a>
    </main>
  )
}

export default IdolPage1
