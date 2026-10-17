import SectionTitle from '../../components/SectionTitle/SectionTitle';

export default function HiringChallenge() {
  return (
    <section className="challenge" id="challenge">
      <div className="challenge__intro">
        <SectionTitle
          title="The fresher hiring challenge"
          subtitle="Too many profiles. Too much screening. Not enough role alignment."
        />
        <p>
          Hiring freshers can be time-consuming, with large application volumes and
          varied levels of technical readiness.
        </p>
      </div>

      <div className="compare-card compare-card--bad glass-panel">
        <h3><span>×</span> Typical hiring</h3>
        <ul>
          <li>Large applicant volumes</li>
          <li>Uneven technical readiness</li>
          <li>Generic preparation</li>
          <li>Time-consuming interviews</li>
        </ul>
      </div>

      <div className="compare-card compare-card--good glass-panel">
        <h3><span>✓</span> The ChiPi approach</h3>
        <ul>
          <li>Start with your actual demand</li>
          <li>Train for role-specific skills</li>
          <li>Assess before referral</li>
          <li>Employer retains final selection</li>
        </ul>
      </div>
    </section>
  );
}
