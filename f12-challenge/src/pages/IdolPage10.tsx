function IdolPage10() {
  return (
    <main className="page">
      <h1>Challenge Page 10</h1>

      <section className="quiz-idol-reveal page10-idol-reveal" aria-label="Visible idol">
        <h2>Idol Found</h2>
        <img src="/Idol.png" alt="Visible idol" className="quiz-idol-image" />
      </section>

      <p>
        There are at least 10 idols hidden throughout the challenge pages, and at least one idol
        on the introduction page.
      </p>
      <p>
        There is one final idol that could be hidden anywhere around the website. If I were you, I would try clicking anything and everything.
      </p>
      <p>
        <strong>Good luck!</strong>
      </p>

      <a className="back-link" href="/">
        Back to Introduction
      </a>
    </main>
  )
}

export default IdolPage10
