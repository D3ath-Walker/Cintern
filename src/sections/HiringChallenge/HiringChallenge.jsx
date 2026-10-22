import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './HiringChallenge.css';

const comparisons = [
  {
    variant: 'bad',
    icon: '×',
    title: 'Typical hiring',
    points: [
      'Large applicant volumes',
      'Uneven technical readiness',
      'Generic preparation',
      'Time-consuming interviews',
    ],
  },
  {
    variant: 'good',
    icon: '✓',
    title: 'The ChiPi approach',
    points: [
      'Start with your actual demand',
      'Train for role-specific skills',
      'Assess before referral',
      'Employer retains final selection',
    ],
  },
];

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

      {comparisons.map(({ variant, icon, title, points }) => (
        <div className={`compare-card compare-card--${variant} glass-panel`} key={variant}>
          <h3><span>{icon}</span> {title}</h3>
          <ul>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
