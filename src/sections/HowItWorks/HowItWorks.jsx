import SectionHeading from '../../components/SectionHeading/SectionHeading';
import step1Image from '../../assets/images/s1.webp';
import step2Image from '../../assets/images/s2.webp';
import step3Image from '../../assets/images/s3.webp';
import step4Image from '../../assets/images/s4.webp';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Confirm the hiring brief',
    description: 'Agree academic criteria such as CGPA, degree or discipline, graduation year, and location, alongside the skills required for each role. Requirements may include backend, frontend, or full-stack development using technologies such as Java, Python, JavaScript, React, or Node.js.',
    image: step1Image,
    imageAlt: 'Company leaders aligning on hiring requirements',
  },
  {
    number: '02',
    title: 'Coordinate with participating colleges',
    description: 'Coordinate with participating colleges to share approved role profiles and eligibility criteria with relevant student groups. Review interested candidates against the agreed academic and role requirements to build a focused, transparent shortlist for your hiring team.',
    image: step2Image,
    imageAlt: 'Students engaging with campus hiring representatives',
  },
  {
    number: '03',
    title: 'Prepare and assess candidates',
    description: 'Provide eligible candidates with focused IT training mapped to the roles and technologies identified by your team. Applied learning and structured assessments strengthen relevant capabilities and give employers and colleges a clearer view of each candidate’s job readiness.',
    image: step3Image,
    imageAlt: 'Trainer guiding students through IT learning',
  },
  {
    number: '04',
    title: 'Review shortlisted candidates',
    description: 'Present a curated shortlist with candidate profiles, relevant skills, and assessment outcomes for your team’s consideration. Your hiring team leads interviews, evaluates each candidate against its needs, and retains full authority over the final selection.',
    image: step4Image,
    imageAlt: 'Hiring team reviewing candidate profiles',
  },
];

export default function HowItWorks() {
  return (
    <section className="content-section how-it-works" id="how-it-works" aria-labelledby="how-it-works-title">
      <SectionHeading
        id="how-it-works-title"
        eyebrow="A CLEAR, COLLABORATIVE PROCESS"
        title="How it works"
        description="One company-led process connects hiring requirements with campus talent, role-relevant preparation, and interview-ready candidates."
      />
      <ol className="how-it-works__steps">
        {steps.map(({ number, title, description, image, imageAlt }) => (
          <li className="content-card how-it-works__step" key={number}>
            <div className="how-it-works__copy">
              <span className="content-card__number">Step {number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="how-it-works__image">
              <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
