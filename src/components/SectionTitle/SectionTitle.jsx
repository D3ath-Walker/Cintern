import './SectionTitle.css';

export default function SectionTitle({
  title,
  subtitle,
  dark = false,
  eyebrow,
}) {
  const classes = `section-title ${dark ? 'section-title--dark' : ''}`;

  return (
    <div className={classes}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
