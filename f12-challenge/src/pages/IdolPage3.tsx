import { useState } from 'react'
import type { FormEvent } from 'react'

const productionNames = ['Dom', 'Ari', 'Panda', 'Kramer', 'Infa']
const requiredProductionNames = ['Dom', 'Ari', 'Panda']

function IdolPage3() {
  const [athenaGroup, setAthenaGroup] = useState('')
  const [aresGroup, setAresGroup] = useState('')
  const [hadesGroup, setHadesGroup] = useState('')
  const [seasonCount, setSeasonCount] = useState('')
  const [selectedProductionMembers, setSelectedProductionMembers] = useState<string[]>([])
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [attemptMessage, setAttemptMessage] = useState('')

  function toggleProductionMember(name: string) {
    setSelectedProductionMembers((currentSelection) =>
      currentSelection.includes(name)
        ? currentSelection.filter((memberName) => memberName !== name)
        : [...currentSelection, name],
    )
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const hasCorrectProductionSelection =
      selectedProductionMembers.length === requiredProductionNames.length &&
      requiredProductionNames.every((name) => selectedProductionMembers.includes(name))

    const isAllCorrect =
      athenaGroup === 'Strategists' &&
      aresGroup === 'Characters' &&
      hadesGroup === 'Returnees' &&
      seasonCount.trim() === '20' &&
      hasCorrectProductionSelection

    if (isAllCorrect) {
      setIsUnlocked(true)
      setAttemptMessage('Perfect score. Idol unlocked!')
      return
    }

    setIsUnlocked(false)
    setAttemptMessage('Not quite! All 5 answers must be correct in the same submission.')
  }

  function handleResetQuiz() {
    setAthenaGroup('')
    setAresGroup('')
    setHadesGroup('')
    setSeasonCount('')
    setSelectedProductionMembers([])
    setIsUnlocked(false)
    setAttemptMessage('')
  }

  return (
    <main className="page">
      <h1>Idol Page 3</h1>
      <p>Get all 5 questions correct in one attempt to reveal the idol.</p>

      <form className="idol-quiz" onSubmit={handleSubmit}>
        <fieldset>
          <p className="quiz-question">1) What is the Athena tribe mainly a group of?</p>
          <label>
            <input
              type="radio"
              name="athena-group"
              value="Strategists"
              checked={athenaGroup === 'Strategists'}
              onChange={(event) => setAthenaGroup(event.target.value)}
            />
            Strategists
          </label>
          <label>
            <input
              type="radio"
              name="athena-group"
              value="Characters"
              checked={athenaGroup === 'Characters'}
              onChange={(event) => setAthenaGroup(event.target.value)}
            />
            Characters
          </label>
          <label>
            <input
              type="radio"
              name="athena-group"
              value="Returnees"
              checked={athenaGroup === 'Returnees'}
              onChange={(event) => setAthenaGroup(event.target.value)}
            />
            Returnees
          </label>
        </fieldset>

        <fieldset>
          <p className="quiz-question">2) What is the Ares tribe mainly a group of?</p>
          <label>
            <input
              type="radio"
              name="ares-group"
              value="Strategists"
              checked={aresGroup === 'Strategists'}
              onChange={(event) => setAresGroup(event.target.value)}
            />
            Strategists
          </label>
          <label>
            <input
              type="radio"
              name="ares-group"
              value="Characters"
              checked={aresGroup === 'Characters'}
              onChange={(event) => setAresGroup(event.target.value)}
            />
            Characters
          </label>
          <label>
            <input
              type="radio"
              name="ares-group"
              value="Returnees"
              checked={aresGroup === 'Returnees'}
              onChange={(event) => setAresGroup(event.target.value)}
            />
            Returnees
          </label>
        </fieldset>

        <fieldset>
          <p className="quiz-question">3) What is the Hades tribe mainly a group of?</p>
          <label>
            <input
              type="radio"
              name="hades-group"
              value="Strategists"
              checked={hadesGroup === 'Strategists'}
              onChange={(event) => setHadesGroup(event.target.value)}
            />
            Strategists
          </label>
          <label>
            <input
              type="radio"
              name="hades-group"
              value="Characters"
              checked={hadesGroup === 'Characters'}
              onChange={(event) => setHadesGroup(event.target.value)}
            />
            Characters
          </label>
          <label>
            <input
              type="radio"
              name="hades-group"
              value="Returnees"
              checked={hadesGroup === 'Returnees'}
              onChange={(event) => setHadesGroup(event.target.value)}
            />
            Returnees
          </label>
        </fieldset>

        <label className="quiz-seasons">
          <span>4) How many Domvivor seasons have there been (including OG seasons)?</span>
          <input
            type="number"
            min="1"
            value={seasonCount}
            onChange={(event) => setSeasonCount(event.target.value)}
          />
        </label>

        <fieldset>
          <p className="quiz-question">5) Select every production member of Domvivor:</p>
          {productionNames.map((name) => (
            <label key={name}>
              <input
                type="checkbox"
                checked={selectedProductionMembers.includes(name)}
                onChange={() => toggleProductionMember(name)}
              />
              {name}
            </label>
          ))}
        </fieldset>

        <div className="quiz-actions">
          <button className="quiz-submit" type="submit">
            Submit Answers
          </button>
          <button className="quiz-submit" type="button" onClick={handleResetQuiz}>
            Try Again
          </button>
        </div>
      </form>

      {attemptMessage ? <p className="quiz-message">{attemptMessage}</p> : null}

      {isUnlocked ? (
        <section className="quiz-idol-reveal" aria-label="Unlocked idol">
          <h2>Idol Found</h2>
          <img src="/Idol.png" alt="Unlocked idol" className="quiz-idol-image" />
        </section>
      ) : null}

      <a className="back-link" href="/">
        Back to Introduction
      </a>
    </main>
  )
}

export default IdolPage3
