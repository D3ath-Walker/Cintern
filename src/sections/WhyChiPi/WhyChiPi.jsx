import './WhyChiPi.css';

const strengths = [
  ['Campus relationships', 'Work with a growing network of college relationships to reach fresher talent.'],
  ['IT experience', 'Bring software and technical training experience into the preparation process.'],
  ['Role-led approach', 'Shape the pipeline around each employer’s agreed academic and skill criteria.'],
  ['Employer-led selection', 'Your team makes the final call on interviews and hiring.'],
];

export default function WhyChiPi() {
  return (
    <section className="refresh-section refresh-why" id="why-chip">
      <div className="refresh-why__intro">
        <span className="refresh-heading__eyebrow">WHY CHIPI</span>
        <h2>Connecting industry needs with campus talent</h2>
        <p>ChiPi brings employer requirements, technical preparation, and college relationships together to support a clearer fresher hiring journey.</p>
      </div>
      <div className="refresh-why__grid">
        {strengths.map(([title, description]) => (
          <article className="refresh-why__item" key={title}>
            <span className="refresh-why__spark" aria-hidden="true">✦</span>
            <div><h3>{title}</h3><p>{description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
