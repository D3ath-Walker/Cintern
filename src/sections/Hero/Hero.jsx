import Button from '../../components/Button/Button';
import './Hero.css';

const people = (count) =>
  Array.from({ length: count }, (_, index) => <i key={index} />);

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

        <div className="funnel-card glass-panel">
          <div className="funnel-card__tag">ILLUSTRATIVE EXAMPLE</div>
          <h2>From a wide student pool to your interview shortlist</h2>
          <p>
            An example of how a focused talent pipeline can be built (illustrative
            numbers).
          </p>
          <div className="funnel-stage stage-one">
            <span className="stage-icon">♙</span>
            <strong>100<small>Candidates trained</small></strong>
            <span className="people">{people(24)}</span>
          </div>
          <div className="funnel-down">⌄</div>
          <div className="funnel-stage stage-two">
            <span className="stage-icon">♟</span>
            <strong>40<small>Assessed &amp; screened</small></strong>
            <span className="people">{people(16)}</span>
          </div>
          <div className="funnel-down">⌄</div>
          <div className="funnel-stage stage-three">
            <span className="stage-icon">♙</span>
            <strong>20<small>Recommended to you</small></strong>
            <span className="people">{people(10)}</span>
          </div>
          <div className="funnel-down">⌄</div>
          <div className="funnel-stage stage-four">
            <span className="stage-icon">♙</span>
            <strong>10<small>Interview target</small></strong>
            <span className="people">{people(5)}</span>
          </div>
          <div className="funnel-note">
            <span>↻</span>
            <span>A focused pipeline of<br />job-ready freshers</span>
          </div>
          <small className="funnel-disclaimer">
            ⓘ Numbers are illustrative and may vary based on roles, demand and
            eligibility criteria.
          </small>
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
