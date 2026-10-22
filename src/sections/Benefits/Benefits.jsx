import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Benefits.css';

const benefits = [
  ['▽', 'Reduce interview volume', 'Meet relevant, pre-assessed candidates.'],
  ['◎', 'Improve skill alignment', 'Candidates trained for your actual requirements.'],
  ['♧', 'Access wider talent', 'Tap into our college network across multiple locations.'],
  ['▤', 'Pre-assessed candidates', 'Technical and aptitude screening before referral.'],
  ['◷', 'Lower screening effort', 'Save time for your technical teams.'],
  ['♢', 'Flexible engagement', 'Start small with a pilot and scale as needed.'],
];

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div>
        <SectionTitle
          title="Key benefits for IT companies"
          subtitle="A more efficient and effective way to hire fresher talent."
        />
      </div>
      <div className="benefit-grid">
        {benefits.map(([icon, title, copy]) => (
          <article className="benefit-card glass-panel" key={title}>
            <span>{icon}</span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
