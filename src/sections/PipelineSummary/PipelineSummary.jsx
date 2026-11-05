import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './PipelineSummary.css';

const pipeline = [
  ['01', 'Set company requirements', 'Align on roles, skills, eligibility, and hiring timelines.'],
  ['02', 'Filter candidates', 'Screen applicants against the criteria your company agrees on.'],
  ['03', 'ChiPi training', 'Build role-relevant skills through focused training and assessment.'],
  ['04', 'Interview-ready talent', 'Review a prepared shortlist and take candidates into interviews.'],
];

export default function PipelineSummary() {
  return (
    <section className="content-section pipeline-summary" id="pipeline-summary" aria-labelledby="pipeline-title">
      <SectionHeading
        id="pipeline-title"
        eyebrow="FROM COMPANY REQUIREMENTS TO INTERVIEW-READY TALENT"
        title="One connected talent pipeline"
        description="Your requirements guide candidate screening, ChiPi training, and interview preparation."
      />
      <ol className="pipeline-summary__steps">
        {pipeline.map(([number, title, description]) => (
          <li className="pipeline-summary__step" key={number}>
            <span className="pipeline-summary__number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
      <p className="pipeline-summary__note">Your team reviews the candidates and makes the final hiring decision.</p>
    </section>
  );
}
