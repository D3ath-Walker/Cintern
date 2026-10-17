import SectionTitle from '../../components/SectionTitle/SectionTitle';

import { useState } from 'react';

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
          dark
        />

        <div className="enquiry-next-steps">
          <h3>From your requirement to your shortlist</h3>
          <div className="enquiry-next-steps__item">
            <span>01</span>
            <div>
              <b>Share the role</b>
              <p>Outline the skills, eligibility and hiring volume you have in mind.</p>
            </div>
          </div>
          <div className="enquiry-next-steps__item">
            <span>02</span>
            <div>
              <b>Align the preparation</b>
              <p>Shape training and screening around the criteria your team agrees on.</p>
            </div>
          </div>
          <div className="enquiry-next-steps__item">
            <span>03</span>
            <div>
              <b>You choose the candidates</b>
              <p>Your team keeps control of interviews and final hiring decisions.</p>
            </div>
          </div>
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
          <div className="form-section-heading form-wide">
            <span>01</span>
            <div>
              <h4>Company and contact</h4>
              <p>Who should we reach out to about this requirement?</p>
            </div>
          </div>

          <label>
            Company name <b>*</b>
            <input autoComplete="organization" name="companyName" required placeholder="Your company name" />
          </label>
          <label>
            Contact person <b>*</b>
            <input autoComplete="name" name="contactName" required placeholder="Your name" />
          </label>
          <label>
            Business email <b>*</b>
            <input autoComplete="email" name="email" required type="email" placeholder="name@company.com" />
          </label>
          <label>
            Phone number <b>*</b>
            <input autoComplete="tel" name="phone" required type="tel" placeholder="+91 98765 43210" />
          </label>
          <label>
            Your designation
            <input autoComplete="organization-title" name="designation" placeholder="e.g. Talent Acquisition Lead" />
          </label>
          <label>
            Company website
            <input autoComplete="url" name="website" type="url" placeholder="https://company.com" />
          </label>

          <div className="form-section-heading form-wide">
            <span>02</span>
            <div>
              <h4>Hiring requirement</h4>
              <p>Share the essentials; you can refine the details later.</p>
            </div>
          </div>

          <label>
            Role / technology <b>*</b>
            <input name="role" required placeholder="e.g. Java Developer" />
          </label>
          <label>
            Number of candidates <b>*</b>
            <input name="candidateCount" required type="number" min="1" step="1" placeholder="e.g. 10" />
          </label>
          <label>
            Hiring location
            <input name="location" placeholder="City, state or multiple locations" />
          </label>
          <label>
            Expected hiring date
            <input name="hiringDate" type="date" />
          </label>
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
