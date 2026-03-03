import { useState } from 'react'

function IdolPage8() {
  const [isIdolTouchRevealed, setIsIdolTouchRevealed] = useState(false)
  const [isCodeTouchRevealed, setIsCodeTouchRevealed] = useState(false)

  return (
    <main className="page">
      <h1>Challenge Page 8</h1>

      <section className="page8-scroll-field" aria-label="Hidden hover zones">
        <div
          className={`page8-hover-zone page8-hover-zone--idol${isIdolTouchRevealed ? ' page8-hover-zone--revealed' : ''}`}
          aria-label="Hidden idol zone"
          onTouchStart={() => setIsIdolTouchRevealed((currentState) => !currentState)}
        >
          <img
            className="page8-hover-reveal__idol"
            src="/Idol.png"
            alt="Hover-only hidden idol"
            loading="lazy"
          />
        </div>

        <div
          className={`page8-hover-zone page8-hover-zone--code${isCodeTouchRevealed ? ' page8-hover-zone--revealed' : ''}`}
          aria-label="Hidden code zone"
          onTouchStart={() => setIsCodeTouchRevealed((currentState) => !currentState)}
        >
          <section className="page8-code-card" aria-label="Four digit code">
            <p className="page8-code-card__value">5823</p>
          </section>
        </div>
      </section>

      <a className="back-link" href="/">
        Back to Introduction
      </a>
    </main>
  )
}

export default IdolPage8
