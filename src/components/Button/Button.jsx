import './Button.css';

export default function Button({ children, href = '#enquiry', secondary = false, className = '', onClick }) {
  const classes = ['button', secondary && 'button--secondary glass-panel', className]
    .filter(Boolean)
    .join(' ');

  return (
    <a className={classes} href={href} onClick={onClick}>
      {children}
    </a>
  );
}
