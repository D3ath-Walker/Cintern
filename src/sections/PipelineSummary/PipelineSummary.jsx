import { Fragment } from 'react';
import './PipelineSummary.css';

const requirements = [
  ['▤', 'Role + skills'],
  ['♧', 'Eligibility'],
  ['▥', 'Hiring volume'],
  ['▦', 'Hiring timeline'],
];

export default function PipelineSummary() {
  return (
    <section className="pipeline-summary">
      <div>
        <h2>From requirement to interview-ready talent</h2>
        <p>
          We work with you to understand your needs and build a tailored talent
          pipeline.
        </p>
      </div>
      <div className="pipeline-flow">
        {requirements.map(([icon, label], index) => (
          <Fragment key={label}>
            {index > 0 && <i>+</i>}
            <span className="glass-panel">{icon} <b>{label}</b></span>
          </Fragment>
        ))}
        <i className="flow-arrow">⟶</i>
        <strong className="glass-panel">♧ <b>Tailored talent pipeline<br />for your hiring needs</b></strong>
      </div>
    </section>
  );
}
