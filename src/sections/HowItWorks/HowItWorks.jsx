import SectionTitle from '../../components/SectionTitle/SectionTitle';

const steps = [
  ['▤', 'Share demand', 'Tell us your roles, technologies and hiring volume.'],
  ['◎', 'Map skills', 'We define the required skills, eligibility and assessment plan.'],
  ['♧', 'Identify candidates', 'We source and shortlist students through our college network.'],
  ['◇', 'Focused training', 'Role-specific technical and professional preparation.'],
  ['▣', 'Assess & screen', 'Technical assessments and structured screening against your criteria.'],
  ['♧', 'Employer interviews', 'You interview recommended candidates and make the final decision.'],
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-heading">
        <SectionTitle
          title="How it works"
          subtitle="A simple, structured process from your hiring requirement to interview-ready candidates."
          dark
        />
        <span className="outline-pill glass-panel">A COLLABORATIVE INDUSTRY-TO-CAMPUS MODEL</span>
      </div>
      <div className="steps">
        {steps.map(([icon, title, copy], index) => (
          <div className="step glass-panel" key={title}>
            <b className="step__number">{index + 1}</b>
            <span className="step__icon">{icon}</span>
            <strong>{title}</strong>
            <p>{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
