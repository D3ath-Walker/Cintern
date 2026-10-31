import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import colleges from '../../Data/List of Colleges.json';
import { GOOGLE_FORM_URL } from '../../Data/siteLinks';
import './EmployerEnquiryUpdated.css';

function getCollegeLogoUrl(logoPath) {
  const encodedPath = logoPath.split('/').map(encodeURIComponent).join('/');
  return `${process.env.PUBLIC_URL}/${encodedPath}`;
}

function CollegeIdentity({ college }) {
  return (
    <>
      <img
        className="employer-enquiry-updated__college-logo"
        src={getCollegeLogoUrl(college.logo)}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <span>{college.name}</span>
    </>
  );
}

function CollegeList({ duplicate = false }) {
  return (
    <div className="employer-enquiry-updated__college-group" aria-hidden={duplicate}>
      {colleges.map((college) => (
        <span className="employer-enquiry-updated__college" key={college.name}>
          <CollegeIdentity college={college} />
        </span>
      ))}
    </div>
  );
}

export default function EmployerEnquiryUpdated() {
  const [collegesOpen, setCollegesOpen] = useState(false);
  const collegesTriggerRef = useRef(null);
  const collegesDialogRef = useRef(null);

  useEffect(() => {
    if (!collegesOpen) return undefined;

    const trigger = collegesTriggerRef.current;
    const previousActiveElement = document.activeElement;
    const closeButton = collegesDialogRef.current?.querySelector('button');
    closeButton?.focus();

    const handleDialogKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setCollegesOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = Array.from(
        collegesDialogRef.current?.querySelectorAll(
          'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const focusIsOutsideDialog = !collegesDialogRef.current?.contains(document.activeElement);

      if (!firstElement) {
        event.preventDefault();
      } else if (event.shiftKey && (document.activeElement === firstElement || focusIsOutsideDialog)) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && (document.activeElement === lastElement || focusIsOutsideDialog)) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleDialogKeyDown);
    return () => {
      window.removeEventListener('keydown', handleDialogKeyDown);
      if (trigger?.isConnected) trigger.focus();
      else if (previousActiveElement?.isConnected) previousActiveElement.focus();
    };
  }, [collegesOpen]);

  return (
    <section className="employer-enquiry-updated" id="enquiry">
      <div className="employer-enquiry-updated__decoration" aria-hidden="true">
        <span className="employer-enquiry-updated__orbit employer-enquiry-updated__orbit--left" />
        <span className="employer-enquiry-updated__orbit employer-enquiry-updated__orbit--right" />
        <span className="employer-enquiry-updated__dot-grid employer-enquiry-updated__dot-grid--left" />
        <span className="employer-enquiry-updated__dot-grid employer-enquiry-updated__dot-grid--right" />
      </div>
      <div className="employer-enquiry-updated__intro">
        <span className="employer-enquiry-updated__badge">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 11a4 4 0 1 0-3.4-6.1A5 5 0 0 1 14 8a5 5 0 0 1-.5 2.2c.7.5 1.5.8 2.5.8ZM8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.3 0-6 1.7-6 3.8V20h12v-2.2C14 15.7 11.3 14 8 14Zm8 .1c-.5 0-1 .1-1.4.1 1.5.9 2.4 2.1 2.4 3.6V20h5v-2.2c0-2.1-2.7-3.7-6-3.7Z" />
          </svg>
          LET’S BUILD YOUR PIPELINE
        </span>
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
          ref={collegesTriggerRef}
          aria-haspopup="dialog"
          aria-expanded={collegesOpen}
          aria-controls="college-list-dialog"
          onClick={() => setCollegesOpen(true)}
        >
          View college list <span aria-hidden="true">＋</span>
        </button>
      </div>

      <div className="employer-enquiry-updated__colleges">
        <div className="employer-enquiry-updated__college-heading">
          <span className="employer-enquiry-updated__eyebrow">OUR CAMPUS NETWORK</span>
          <h3>Colleges we’re in touch with</h3>
        </div>
        <div
          className="employer-enquiry-updated__ticker"
          role="region"
          aria-label="College names and logos in our campus network"
        >
          <div className="employer-enquiry-updated__track">
            <CollegeList />
            <CollegeList duplicate />
          </div>
        </div>
      </div>

      {collegesOpen && createPortal(
        <div
          className="employer-enquiry-updated__modal-layer"
          onClick={(event) => {
            if (event.target === event.currentTarget) setCollegesOpen(false);
          }}
        >
          <section
            className="employer-enquiry-updated__modal"
            id="college-list-dialog"
            ref={collegesDialogRef}
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
              {colleges.map((college) => (
                <li key={college.name}>
                  <CollegeIdentity college={college} />
                </li>
              ))}
            </ul>
          </section>
        </div>,
        document.body
      )}
    </section>
  );
}
