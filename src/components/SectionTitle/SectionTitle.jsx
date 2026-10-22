import './SectionTitle.css';

export default function SectionTitle({ title, subtitle, eyebrow }) {
  return (
    <div className="section-title">
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
