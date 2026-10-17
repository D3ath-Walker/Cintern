import SectionTitle from '../../components/SectionTitle/SectionTitle';

const proofPoints = [
  ['♙', 'College network', 'Strong relationships with colleges and access to a wider student base.'],
  ['▱', 'Technical training', 'Practical, role-focused training aligned to industry needs.'],
  ['▥', 'Structured assessments', 'Evaluation based on agreed technical and role-specific criteria.'],
];

const whyPrinciples = [
  [
    '⌕',
    'Start with your requirement',
    'Agree on roles, technology, eligibility and hiring volume before candidate sourcing begins.',
  ],
  [
    '◇',
    'Prepare for the role',
    'Focus training on the skills and competencies your team needs instead of a generic syllabus.',
  ],
  [
    '▣',
    'Screen before referral',
    'Use structured assessments against agreed criteria before candidates reach your interview team.',
  ],
  [
    '✓',
    'Keep hiring control',
    'ChiPi recommends aligned candidates; your team owns interviews and final selection.',
  ],
];

export default function WhyChiPi() {
  return (
    <section className="why-section" id="why-chip">
      <div className="why-copy">
        <SectionTitle
          title="Why ChiPi Technologies?"
          subtitle="Industry experience, combined with hands-on work with colleges and students."
        />
        <div className="why-lower">
          <b>IT experience<br />meets college execution</b>
          <p>
            Industry professionals combined with hands-on work with colleges and
            students.
          </p>
        </div>
      </div>

      <div className="network-visual" aria-label="ChiPi college network illustration">
        <div className="network-orbit">
          <span>♙</span><span>♙</span><span>♙</span><span>♙</span><span>♙</span>
          <b>Cp</b>
        </div>
      </div>

      <div className="proof-grid">
        {proofPoints.map(([icon, title, copy]) => (
          <article className="proof-card glass-panel" key={title}>
            <span>{icon}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>

      <div className="why-principles">
        <div className="why-principles__heading">
          <span>THE CHIPI DIFFERENCE</span>
          <h3>A talent pipeline shaped around your hiring team</h3>
          <p>
            From the first role discussion to the final interview, each stage is
            tied to your needs and selection criteria.
          </p>
        </div>
        <div className="why-principles__grid">
          {whyPrinciples.map(([icon, title, copy]) => (
            <article className="proof-card why-principle-card glass-panel" key={title}>
              <span>{icon}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
