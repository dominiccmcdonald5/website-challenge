import { useState } from 'react'

type IntroPageProps = {
  routeLinks: Array<{ label: string; href: string }>
}

function IntroPage({ routeLinks }: IntroPageProps) {
  const [isIdolPopupOpen, setIsIdolPopupOpen] = useState(false)

  return (
    <main className="page page--intro">
      <header className="hero">
        <button
          type="button"
          className="hero__logo-button"
          onClick={() => setIsIdolPopupOpen(true)}
          aria-label="Open idol popup"
        >
          <img
            className="hero__logo"
            src="/Domvivor_Greece.png"
            alt="Domvivor Greece logo"
          />
        </button>
        <div className="hero__text">
          <p className="eyebrow">Domvivor Greece | Final 12 Immunity Challenge</p>
          <h1>Welcome to Website Idol Hunt!</h1>
          <p>
            In this website, there are 12 images of Idols hidden! It is your job as a tribe to find all 12 idols and send them into your tribe chat! The tribe that finishes the challenge the fastest will win immunity!
          </p>
        </div>
      </header>

      <section className="intro-card">
        <img
          className="intro-card__idol"
          src="/Idol.png"
          alt="Domvivor challenge idol"
        />
        <div>
          <h2>IDOL #1</h2>
          <p>
            The idol here is <strong>1 of the 12</strong> idols in the website.
          </p>
          <ul>
            <li>When you find an idol, take a ss and send it into your tribe chat.</li>
            <li>You also need to specify what page you found it in as well!</li>
            <li>Once all 12 idols are found, ping me to stop your timer!</li>
          </ul>
        </div>
      </section>

      <section className="page-grid">
        <h2>Idol Pages</h2>
        <p>Each page will contain a minimum of 1 of the idols!</p>
        <nav className="link-grid" aria-label="Challenge pages">
          {routeLinks.map((routeLink) => (
            <a key={routeLink.href} href={routeLink.href} className="link-tile">
              {routeLink.label}
            </a>
          ))}
        </nav>
      </section>

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

export default IntroPage
