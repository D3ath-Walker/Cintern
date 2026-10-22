import Button from '../../components/Button/Button';
import sideImage from '../../assets/images/side1.png';
import './Hero.css';

const checks = [
  'Built around your roles',
  'Screened against agreed criteria',
  'Employer makes the final decision',
];

const stats = [
  ['♧', 'College network', 'Campus relationships', 'Across institutions'],
  ['⚙', 'IT expertise', 'Software and training', 'Industry-focused experience'],
  ['♧', 'Student reach', 'Learning programs', 'Building job-ready skills'],
];

export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero__copy">
          <span className="eyebrow">A SMARTER WAY TO HIRE FRESHERS</span>
          <h1>
            Build the <em>right fresher<br className="desktop-break" /> talent pool</em> before you
            <br className="desktop-break" /> start interviewing.
          </h1>
          <p>
            Tell us what you need to hire. We’ll help build a focused, trained and
            assessed candidate pipeline around your actual requirements.
          </p>
          <div className="hero__actions">
            <Button>
              Share Your Hiring Requirement <span>→</span>
            </Button>
            <Button secondary href="#how-it-works">
              See How It Works
            </Button>
          </div>
          <div className="hero__checks">
            {checks.map((check) => (
              <span key={check}>✓ <b>{check}</b></span>
            ))}
          </div>
        </div>
        <div className="hero__side-image-frame">
          <img
            className="hero__side-image"
            src={sideImage}
            alt="Industry-to-campus talent pipeline, showing technical training, assessment, and candidate recommendations."
          />
        </div>
      </section>

      <div className="stats-strip">
        {stats.map(([icon, title, subtitle, note]) => (
          <div key={title}>
            <span className="stat-icon">{icon}</span>
            <strong>
              {title}
              <small>{subtitle}</small>
              <em>{note}</em>
            </strong>
          </div>
        ))}
      </div>
    </>
  );
}
