import { useMemo } from 'react'

const SUPER_IDOL_COUNT = 1000

function IdolPage4() {
  const mixedIdols = useMemo(() => {
    const regularIdolIndex = Math.floor(Math.random() * (SUPER_IDOL_COUNT + 1))

    return Array.from({ length: SUPER_IDOL_COUNT + 1 }, (_, index) => ({
      id: index,
      src: index === regularIdolIndex ? '/Idol.png' : '/Super_Idol.png',
      alt:
        index === regularIdolIndex
          ? 'Valid hidden idol'
          : 'Super idol decoy image',
      isValid: index === regularIdolIndex,
    }))
  }, [])

  return (
    <main className="page">
      <h1>Challenge Page 4</h1>

      <section className="super-idol-showcase" aria-label="Super idol warning">
        <img
          className="super-idol-showcase__image"
          src="/Super_Idol.png"
          alt="Super idol"
        />
        <p className="super-idol-showcase__text">
          This is NOT a valid idol you can submit, look in this page to find the actual one.
        </p>
      </section>

      <section className="hidden-idol-grid" aria-label="Hidden idol image grid">
        {mixedIdols.map((idol) => (
          <img
            key={idol.id}
            className={`hidden-idol-grid__item${idol.isValid ? ' hidden-idol-grid__item--valid' : ''}`}
            src={idol.src}
            alt={idol.alt}
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

export default IdolPage4
