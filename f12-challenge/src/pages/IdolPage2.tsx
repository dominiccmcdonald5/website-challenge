import { useMemo, useState } from 'react'

const BUTTON_COUNT = 500

function IdolPage2() {
  const [isIdolPopupOpen, setIsIdolPopupOpen] = useState(false)
  const correctButtonIndex = useMemo(
    () => Math.floor(Math.random() * BUTTON_COUNT),
    [],
  )

  const buttonNumbers = useMemo(
    () => Array.from({ length: BUTTON_COUNT }, (_, index) => index + 1),
    [],
  )

  function handleButtonClick(buttonIndex: number) {
    if (buttonIndex === correctButtonIndex) {
      setIsIdolPopupOpen(true)
    }
  }

  return (
    <main className="page">
      <h1>Idol Page 2</h1>
      <p>One of these 500 buttons opens an idol popup. Good luck.</p>

      <section className="idol-button-grid" aria-label="500 idol buttons">
        {buttonNumbers.map((buttonNumber, index) => (
          <button
            key={buttonNumber}
            type="button"
            className="idol-button"
            onClick={() => handleButtonClick(index)}
          >
            Button {buttonNumber}
          </button>
        ))}
      </section>

      <a className="back-link" href="/">
        Back to Introduction
      </a>

      {isIdolPopupOpen ? (
        <div className="idol-popup" role="dialog" aria-modal="true" aria-label="Idol image popup">
          <div className="idol-popup__card">
            <img className="idol-popup__image" src="/Idol.png" alt="Hidden idol" />
            <button
              type="button"
              className="idol-popup__back"
              onClick={() => setIsIdolPopupOpen(false)}
            >
              Back
            </button>
          </div>
        </div>
      ) : null}
    </main>
  )
}

export default IdolPage2
