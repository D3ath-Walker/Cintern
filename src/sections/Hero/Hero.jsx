import Button from '../../components/Button/Button';
import sideImage from '../../assets/images/side1.png';
import './Hero.css';

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
            <span>✓ <b>Built around your roles</b></span>
            <span>✓ <b>Screened against agreed criteria</b></span>
            <span>✓ <b>Employer makes the final decision</b></span>
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
        <div>
          <span className="stat-icon">♧</span>
          <strong>
            College network
            <small>Campus relationships</small>
            <em>Across institutions</em>
          </strong>
        </div>
        <div>
          <span className="stat-icon">⚙</span>
          <strong>
            IT expertise
            <small>Software and training</small>
            <em>Industry-focused experience</em>
          </strong>
        </div>
        <div>
          <span className="stat-icon">♧</span>
          <strong>
            Student reach
            <small>Learning programs</small>
            <em>Building job-ready skills</em>
          </strong>
        </div>
      </div>
    </>
  );
}
