import { Fragment, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './EmployerEnquiry.css';

const nextSteps = [
  ['01', 'Share the role', 'Outline the skills, eligibility and hiring volume you have in mind.'],
  ['02', 'Align the preparation', 'Shape training and screening around the criteria your team agrees on.'],
  ['03', 'You choose the candidates', 'Your team keeps control of interviews and final hiring decisions.'],
];

const formSections = [
  {
    number: '01',
    title: 'Company and contact',
    copy: 'Who should we reach out to about this requirement?',
    fields: [
      { label: 'Company name', name: 'companyName', required: true, autoComplete: 'organization', placeholder: 'Your company name' },
      { label: 'Contact person', name: 'contactName', required: true, autoComplete: 'name', placeholder: 'Your name' },
      { label: 'Business email', name: 'email', required: true, type: 'email', autoComplete: 'email', placeholder: 'name@company.com' },
      { label: 'Phone number', name: 'phone', required: true, type: 'tel', autoComplete: 'tel', placeholder: '+91 98765 43210' },
      { label: 'Your designation', name: 'designation', autoComplete: 'organization-title', placeholder: 'e.g. Talent Acquisition Lead' },
      { label: 'Company website', name: 'website', type: 'url', autoComplete: 'url', placeholder: 'https://company.com' },
    ],
  },
  {
    number: '02',
    title: 'Hiring requirement',
    copy: 'Share the essentials; you can refine the details later.',
    fields: [
      { label: 'Role / technology', name: 'role', required: true, placeholder: 'e.g. Java Developer' },
      { label: 'Number of candidates', name: 'candidateCount', required: true, type: 'number', min: '1', step: '1', placeholder: 'e.g. 10' },
      { label: 'Hiring location', name: 'location', placeholder: 'City, state or multiple locations' },
      { label: 'Expected hiring date', name: 'hiringDate', type: 'date' },
    ],
  },
];

export default function EmployerEnquiry() {
  const [formNotice, setFormNotice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormNotice(
      'This preview form is not connected to a submission service yet. Your details have not been sent.'
    );
  };

  return (
    <section className="enquiry" id="enquiry">
      <div className="enquiry-copy">
        <SectionTitle
          eyebrow="EMPLOYER ENQUIRY"
          title="Tell us who you need to hire."
          subtitle="Share a few details about your hiring need. We’ll use them to shape a focused first conversation."
        />

        <div className="enquiry-next-steps">
          <h3>From your requirement to your shortlist</h3>
          {nextSteps.map(([number, title, copy]) => (
            <div className="enquiry-next-steps__item" key={number}>
              <span>{number}</span>
              <div>
                <b>{title}</b>
                <p>{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form className="enquiry-form glass-panel" onSubmit={handleSubmit}>
        <div className="enquiry-form__header">
          <div>
            <span>START A CONVERSATION</span>
            <h3>Share your hiring requirement</h3>
          </div>
          <small><b>*</b> Required</small>
        </div>

        <div className="form-grid">
          {formSections.map(({ number, title, copy, fields }) => (
            <Fragment key={number}>
              <div className="form-section-heading form-wide">
                <span>{number}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{copy}</p>
                </div>
              </div>

              {fields.map(({ label, ...input }) => (
                <label key={input.name}>
                  {label}
                  {input.required && <> <b>*</b></>}
                  <input {...input} />
                </label>
              ))}
            </Fragment>
          ))}

          <label className="form-wide">
            Work mode
            <select name="workMode" defaultValue="">
              <option value="" disabled>Select a work mode</option>
              <option>On-site</option>
              <option>Hybrid</option>
              <option>Remote</option>
              <option>To be discussed</option>
            </select>
          </label>
          <label className="form-wide">
            Skills, eligibility or other details
            <textarea
              name="requirements"
              placeholder="Add key skills, eligibility criteria, salary range (if shareable), or selection process details."
              rows="3"
            />
          </label>
        </div>

        <div className="form-bottom">
          <button type="submit">Review Enquiry <span>→</span></button>
          <small>Preview only. Your information is not sent from this page.</small>
        </div>
        {formNotice && (
          <p className="form-notice" role="status" aria-live="polite">
            {formNotice}
          </p>
        )}
      </form>
    </section>
  );
}
