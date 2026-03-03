import { useEffect, useState } from 'react'

const REVEAL_INTERVAL_MS = 20000
const REVEAL_DURATION_MS = 2000

function IdolPage5() {
  const [isIdolVisible, setIsIdolVisible] = useState(false)

  useEffect(() => {
    let timeoutId: number | undefined

    const intervalId = window.setInterval(() => {
      setIsIdolVisible(true)

      timeoutId = window.setTimeout(() => {
        setIsIdolVisible(false)
      }, REVEAL_DURATION_MS)
    }, REVEAL_INTERVAL_MS)

    return () => {
      window.clearInterval(intervalId)

      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <main className="page">
      <h1>Challenge Page 5</h1>

      {isIdolVisible ? (
        <section className="quiz-idol-reveal" aria-label="Timed idol reveal">
          <img src="/Idol.png" alt="Timed hidden idol" className="quiz-idol-image" />
        </section>
      ) : null}

      <a className="back-link" href="/">
        Back to Introduction
      </a>
    </main>
  )
}

export default IdolPage5
