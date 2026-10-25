import './RefreshedSections.css';

const challenges = [
  ['01', 'Too many unfiltered profiles', 'Large applicant lists take time to review and can make it harder to spot the right fit.'],
  ['02', 'Different expectations', 'Academic filters and role skills are not always clear before screening begins.'],
  ['03', 'Limited campus visibility', 'Reaching the right student groups across colleges can take time and coordination.'],
];

const process = [
  ['01', 'Share your hiring plan', 'Tell us about your roles, hiring timeline, and team needs.'],
  ['02', 'Academic & skills requirements', 'Set the grades, eligible student years, backlog limits, and role skills you need.'],
  ['03', 'Review a focused pipeline', 'We coordinate preparation and assessment against the criteria you agree with us.'],
];

const benefits = [
  ['Clear criteria', 'Agree on academic and role requirements before candidates enter the pipeline.'],
  ['Relevant preparation', 'Focus learning and assessment on the skills your roles call for.'],
  ['Your decision', 'Review candidate profiles and keep control of your interview and selection process.'],
];

const strengths = [
  ['Campus relationships', 'Work with a growing network of college relationships to reach fresher talent.'],
  ['IT experience', 'Bring software and technical training experience into the preparation process.'],
  ['Role-led approach', 'Shape the pipeline around each employer’s agreed academic and skill criteria.'],
  ['Employer-led selection', 'Your team makes the final call on interviews and hiring.'],
];

const pipeline = [
  ['01', 'Define', 'Role and eligibility criteria'],
  ['02', 'Connect', 'College and student outreach'],
  ['03', 'Prepare', 'Relevant learning and assessment'],
  ['04', 'Recommend', 'Candidate profiles for review'],
];

function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="refresh-heading">
      <span className="refresh-heading__eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function HiringChallenge() {
  return (
    <section className="refresh-section refresh-challenge" aria-labelledby="challenge-title">
      <SectionHeading
        id="challenge-title"
        eyebrow="THE FRESHER HIRING CHALLENGE"
        title="Finding the right fit takes more than a CV"
        description="A strong fresher pipeline starts with clear criteria, relevant preparation, and access to the right student communities."
      />
      <div className="refresh-card-grid refresh-card-grid--three">
        {challenges.map(([number, title, description]) => (
          <article className="refresh-card refresh-card--challenge" key={number}>
            <span className="refresh-card__number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="refresh-section refresh-process" id="how-it-works">
      <SectionHeading
        id="how-it-works-title"
        eyebrow="A CLEAR, COLLABORATIVE PROCESS"
        title="How it works"
        description="Start with your requirements. We help turn them into a prepared talent pipeline."
      />
      <ol className="refresh-process__steps">
        {process.map(([number, title, description]) => (
          <li className="refresh-card refresh-process__step" key={number}>
            <span className="refresh-card__number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Benefits() {
  return (
    <section className="refresh-section refresh-benefits" aria-labelledby="benefits-title">
      <SectionHeading
        id="benefits-title"
        eyebrow="BUILT FOR YOUR HIRING TEAM"
        title="A more focused way to hire freshers"
        description="Keep the requirements clear and the selection process in your hands."
      />
      <div className="refresh-card-grid refresh-card-grid--three">
        {benefits.map(([title, description], index) => (
          <article className="refresh-card refresh-card--benefit" key={title}>
            <span className="refresh-card__marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhyChiPi() {
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

export function PipelineSummary() {
  return (
    <section className="refresh-section refresh-pipeline" aria-labelledby="pipeline-title">
      <SectionHeading
        id="pipeline-title"
        eyebrow="FROM REQUIREMENT TO RECOMMENDATION"
        title="One connected talent pipeline"
        description="A simple overview of how employer criteria guide each stage."
      />
      <ol className="refresh-pipeline__steps">
        {pipeline.map(([number, title, description]) => (
          <li className="refresh-pipeline__step" key={number}>
            <span className="refresh-pipeline__number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
      <p className="refresh-pipeline__note">Your team reviews the candidates and makes the final hiring decision.</p>
    </section>
  );
}
