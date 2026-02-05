import "../styles/githubActivity.css"

export default function GithubActivity() {
  return (
    <section className="github" id="github">
      <div className="github-container">

        {/* Eyebrow */}
        <p className="github-eyebrow">OPEN SOURCE</p>

        {/* Title */}
        <h2 className="github-title">
          GitHub <span>Activity</span>
        </h2>

        {/* Description */}
        <p className="github-description">
          A quiet record of consistency — showing how often I build, refine,
          and contribute through code.
        </p>

        {/* Visual */}
        <div className="github-surface">
          <img
            src="https://ghchart.rshah.org/Ankit-Ahirrao"
            alt="GitHub contribution activity"
            loading="lazy"
          />
        </div>

        {/* CTA */}
        <a
          href="https://github.com/Ankit-Ahirrao"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          View GitHub profile →
        </a>

      </div>
    </section>
  )
}
