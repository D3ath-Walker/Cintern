import { useEffect, useState } from 'react';
import colleges from '../../Data/List of Colleges.json';
import './EmployerEnquiryUpdated.css';

// Add the supplied Google Form URL here when it is ready.
const GOOGLE_FORM_URL = 'https://forms.gle/DY6TQtQikssECZe89';

function CollegeList({ duplicate = false }) {
  return (
    <div className="employer-enquiry-updated__college-group" aria-hidden={duplicate}>
      {colleges.map((college) => (
        <span className="employer-enquiry-updated__college" key={college}>
          {college}
        </span>
      ))}
    </div>
  );
}

export default function EmployerEnquiryUpdated() {
  const [collegesOpen, setCollegesOpen] = useState(false);

  useEffect(() => {
    if (!collegesOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setCollegesOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [collegesOpen]);

  return (
    <section className="employer-enquiry-updated" id="enquiry">
      <div className="employer-enquiry-updated__intro">
        <span className="employer-enquiry-updated__eyebrow">LET’S BUILD YOUR PIPELINE</span>
        <h2>Employer Enquiry</h2>
        <p>
          Share your academic and skills requirements through our form. We’ll use them to shape a
          fresher talent pool around your hiring needs.
        </p>
        {GOOGLE_FORM_URL ? (
          <a
            className="employer-enquiry-updated__form-button"
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Fill in your hiring requirements <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <button className="employer-enquiry-updated__form-button" type="button" disabled>
            Google Form link coming soon
          </button>
        )}
        <button
          className="employer-enquiry-updated__list-button"
          type="button"
          aria-haspopup="dialog"
          aria-expanded={collegesOpen}
          onClick={() => setCollegesOpen(true)}
        >
          View college list <span aria-hidden="true">＋</span>
        </button>
      </div>

      <div className="employer-enquiry-updated__colleges">
        <div className="employer-enquiry-updated__college-heading">
          <div>
            <span className="employer-enquiry-updated__eyebrow">OUR CAMPUS NETWORK</span>
            <h3>Colleges we’re in touch with</h3>
          </div>
          <span className="employer-enquiry-updated__sample-note">Sample names for now</span>
        </div>
        <div className="employer-enquiry-updated__ticker" aria-label="College list">
          <div className="employer-enquiry-updated__track">
            <CollegeList />
            <CollegeList duplicate />
          </div>
        </div>
      </div>

      {collegesOpen && (
        <div className="employer-enquiry-updated__modal-layer">
          <section
            className="employer-enquiry-updated__modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="college-list-title"
          >
            <button
              className="employer-enquiry-updated__modal-close"
              type="button"
              aria-label="Close college list"
              onClick={() => setCollegesOpen(false)}
            >
              ×
            </button>
            <span className="employer-enquiry-updated__eyebrow">CAMPUS NETWORK</span>
            <h3 id="college-list-title">Colleges we’re in touch with</h3>
            <ul>
              {colleges.map((college) => <li key={college}>{college}</li>)}
            </ul>
          </section>
        </div>
      )}
    </section>
  );
}
