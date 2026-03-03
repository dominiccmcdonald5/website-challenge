import { useMemo, useState } from 'react'

const BROADCAST_CODE = '5823'

const STORY_TEXT = `welcome Two domvivor! this challenge rewards patience, observation, and teamwork. here are some tips! be patient and stay calm. the smallest details matter most, and sometimes One clue can save you all the trouble. if you feel stuck, slow down and scan each section again. you may need to check every corner beFour the right path appears. keep confidence high, trust your tribe, and remember the answer might be wEighting in plain sight!`

const STORY_CODE = '2148'

type SubmissionResult = 'idle' | 'broadcast' | 'idol' | 'incorrect'

function IdolPage6() {
  const [enteredCode, setEnteredCode] = useState('')
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult>('idle')

  const keypadDigits = useMemo(
    () => Array.from({ length: 10 }, (_, digit) => digit.toString()),
    [],
  )

  function handleDigitClick(digit: string) {
    setEnteredCode((currentCode) => `${currentCode}${digit}`)
  }

  function handleBackspace() {
    setEnteredCode((currentCode) => currentCode.slice(0, -1))
  }

  function handleClear() {
    setEnteredCode('')
    setSubmissionResult('idle')
  }

  function handleSubmitCode() {
    if (enteredCode === BROADCAST_CODE) {
      setSubmissionResult('broadcast')
      return
    }

    if (enteredCode === STORY_CODE) {
      setSubmissionResult('idol')
      return
    }

    setSubmissionResult('incorrect')
  }

  function handleClosePopup() {
    setSubmissionResult('idle')
  }

  return (
    <main className="page">
      <h1>Challenge Page 6</h1>

      <section className="page6-panel" aria-label="Code entry panel">
        <p className="page6-panel__display" aria-live="polite">
          {enteredCode || '----'}
        </p>

        <div className="page6-keypad" aria-label="Digits 0 through 9 keypad">
          {keypadDigits.map((digit) => (
            <button
              key={digit}
              type="button"
              className="page6-keypad__button"
              onClick={() => handleDigitClick(digit)}
            >
              {digit}
            </button>
          ))}
        </div>

        <div className="page6-panel__actions">
          <button type="button" className="quiz-submit" onClick={handleBackspace}>
            Delete
          </button>
          <button type="button" className="quiz-submit" onClick={handleClear}>
            Clear
          </button>
          <button type="button" className="quiz-submit" onClick={handleSubmitCode}>
            Submit
          </button>
        </div>
      </section>

      <section className="page6-story" aria-label="Story clue">
        <p>{STORY_TEXT}</p>
      </section>

      {submissionResult === 'broadcast' ? (
        <div className="idol-popup" role="dialog" aria-modal="true" aria-label="Broadcast message">
          <div className="idol-popup__card">
            <p className="page6-result" role="status">
              If you are seeing this, I am here to inform you that once the merge hits, there WILL
              be an immunity idol hidden somewhere. Good luck!
            </p>
            <button type="button" className="idol-popup__back" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      ) : null}

      {submissionResult === 'idol' ? (
        <div className="idol-popup" role="dialog" aria-modal="true" aria-label="Unlocked idol">
          <div className="idol-popup__card">
            <img src="/Idol.png" alt="Unlocked idol" className="idol-popup__image" />
            <button type="button" className="idol-popup__back" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      ) : null}

      {submissionResult === 'incorrect' ? (
        <p className="page6-result" role="status">
          Incorrect code.
        </p>
      ) : null}

      <a className="back-link" href="/">
        Back to Introduction
      </a>
    </main>
  )
}

export default IdolPage6
