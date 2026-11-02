import './SectionHeading.css';

export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="refresh-heading">
      <span className="refresh-heading__eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
