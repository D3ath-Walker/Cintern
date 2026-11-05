import SectionHeading from '../../components/SectionHeading/SectionHeading';

const challenges = [
  ['01', 'Too many unfiltered profiles', 'Large applicant lists take time to review and can make it harder to spot the right fit.'],
  ['02', 'Different expectations', 'Academic filters and role skills are not always clear before screening begins.'],
  ['03', 'Limited campus visibility', 'Reaching the right student groups across colleges can take time and coordination.'],
];

export default function HiringChallenge() {
  return (
    <section className="content-section hiring-challenge" aria-labelledby="challenge-title">
      <SectionHeading
        id="challenge-title"
        eyebrow="THE FRESHER HIRING CHALLENGE"
        title="Finding the right fit takes more than a CV"
        description="A strong fresher pipeline starts with clear criteria, relevant preparation, and access to the right student communities."
      />
      <div className="content-card-grid content-card-grid--three">
        {challenges.map(([number, title, description]) => (
          <article className="content-card" key={number}>
            <span className="content-card__number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
