export const GOOGLE_FORM_URL = 'https://forms.gle/DY6TQtQikssECZe89';
export const COMPANY_WEBSITE_URL = 'https://chipitechnologies.com/';

const PHONE_NUMBER = '919035424824';

export const CONTACT = {
  address: 'Bengaluru, Karnataka-560049',
  phoneLabel: '+91-9035424824',
  phoneHref: `tel:+${PHONE_NUMBER}`,
  whatsappHref: `https://wa.me/${PHONE_NUMBER}`,
  email: 'support@chipitechnologies.com',
};

export const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/ChiPiTechnologiesPrivateLimited' },
  { name: 'Instagram', href: 'https://www.instagram.com/chipitechnologies/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/divya-srivastava-807552313/' },
  { name: 'WhatsApp', href: CONTACT.whatsappHref },
  { name: 'YouTube', href: 'https://www.youtube.com/@AffordableEducationForAll' },
];

// Listed in page order, because the header highlights the last section reached.
export const SECTION_LINKS = [
  { id: 'top', label: 'Home', inHeader: false },
  { id: 'how-it-works', label: 'How It Works', inHeader: true },
  { id: 'why-chipi', label: 'Why ChiPi', inHeader: true },
  { id: 'pipeline-summary', label: 'Pipeline Summary', inHeader: false },
  { id: 'enquiry', label: 'Employer Enquiry', inHeader: true },
];
