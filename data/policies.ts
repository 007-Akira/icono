export type PolicySection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  notice?: string;
};

export type PolicyPageData = {
  title: string;
  description: string;
  status: string;
  sections: readonly PolicySection[];
};

// These drafts describe the website's current behavior. `notice` blocks flag
// business or legal decisions that Icono still needs to confirm before launch.
export const policies = {
  privacy: {
    title: "Privacy Policy",
    description: "How information submitted through the Icono website is handled.",
    status: "Draft for review · Effective date to be confirmed",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "This privacy notice explains how Icono Beauty World & Makeover Studio handles information visitors choose to share through this website and the third-party services linked from it.",
          "The website currently does not provide user accounts, online payments or database-backed appointment booking.",
        ],
      },
      {
        id: "information-provided",
        title: "Information visitors may provide",
        paragraphs: [
          "Visitors may choose to provide contact and appointment-related information when preparing an enquiry.",
        ],
        bullets: [
          "Name and phone number",
          "Selected service",
          "Preferred date and time",
          "Any message entered by the visitor",
        ],
      },
      {
        id: "appointment-enquiries",
        title: "Appointment enquiry form",
        paragraphs: [
          "The appointment form prepares a message using the details entered by the visitor. Submitting it opens WhatsApp so the visitor can review and send the message. The website does not itself confirm an appointment.",
        ],
      },
      {
        id: "whatsapp",
        title: "WhatsApp communication",
        paragraphs: [
          "Messages sent through WhatsApp are processed by WhatsApp under its own terms and privacy practices. Once a visitor sends a message, Icono may use the information in that conversation to respond to the enquiry and coordinate the requested service.",
        ],
      },
      {
        id: "third-party-services",
        title: "Maps, social media and external services",
        paragraphs: [
          "The website links to Google Maps, Instagram and WhatsApp. Following these links may allow those providers to collect information according to their own policies. Icono does not control those external platforms.",
        ],
      },
      {
        id: "cookies-analytics",
        title: "Cookies and analytics",
        paragraphs: [
          "No separate analytics or advertising system is intentionally described as active on this website at present. Essential technology used by the hosting platform or linked third-party services may operate under the relevant provider’s terms.",
        ],
        notice:
          "This section must be reviewed if analytics, advertising pixels, embedded social content or additional cookies are introduced.",
      },
      {
        id: "retention-security",
        title: "Retention and security",
        paragraphs: [
          "Enquiry details should be kept only as reasonably needed to respond, coordinate services, maintain necessary business records or meet applicable obligations. Reasonable care is taken with information received, but no internet or messaging service can be guaranteed completely secure.",
        ],
        notice:
          "Icono should confirm its internal retention and deletion practices before this policy is finalized.",
      },
      {
        id: "rights",
        title: "Your choices and rights",
        paragraphs: [
          "Visitors may contact Icono to ask about personal information they have shared, or to request correction or deletion where applicable. The availability of specific rights depends on relevant law and the circumstances of the request.",
        ],
      },
      {
        id: "external-links",
        title: "External links",
        paragraphs: [
          "Links to external websites are provided for convenience. Their content, availability and privacy practices are controlled by their respective operators.",
        ],
      },
      {
        id: "changes",
        title: "Changes to this notice",
        paragraphs: [
          "This notice may be updated when the website, services or legal requirements change. The current version and its effective date will be shown on this page once approved.",
        ],
      },
      {
        id: "contact",
        title: "Privacy enquiries",
        paragraphs: [
          "Questions or requests concerning this notice can be sent to Icono using the contact details below.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    description: "The terms that apply when visiting and using the Icono website.",
    status: "Draft for review · Effective date to be confirmed",
    sections: [
      {
        id: "website-use",
        title: "Website use",
        paragraphs: [
          "This website provides general information about Icono Beauty World & Makeover Studio and its listed services. Visitors should use the website lawfully and should not attempt to interfere with its availability, security or operation.",
        ],
      },
      {
        id: "informational-content",
        title: "Informational nature of content",
        paragraphs: [
          "Website content is provided for general business and service information. It is not medical advice, diagnosis or a guarantee that a particular service is suitable for every person.",
        ],
      },
      {
        id: "service-information",
        title: "Service information",
        paragraphs: [
          "Descriptions are intended to help visitors understand the salon’s service categories. Availability, suitability, products used, duration and inclusions should be confirmed directly with Icono before an appointment.",
        ],
      },
      {
        id: "appointments",
        title: "Appointment enquiries and confirmation",
        paragraphs: [
          "Submitting or sending an enquiry does not create a confirmed appointment. A booking is confirmed only after Icono responds and expressly agrees to the service, date and time.",
        ],
      },
      {
        id: "pricing",
        title: "Pricing availability",
        paragraphs: [
          "Prices are not currently published on this website. Visitors should ask Icono directly for current service information before booking. Any quotation should be confirmed with the salon.",
        ],
        notice:
          "Any future rules about quotation validity, deposits or package inclusions must be added only after Icono confirms them.",
      },
      {
        id: "intellectual-property",
        title: "Intellectual property",
        paragraphs: [
          "The Icono name, visual identity, website design and original site content may be protected by applicable intellectual-property laws. Content should not be reproduced or commercially reused without appropriate permission.",
        ],
      },
      {
        id: "images",
        title: "Images and portfolio content",
        paragraphs: [
          "Editorial reference images are identified where used and should not be interpreted as photographs of Icono clients or completed Icono work. Approved portfolio imagery may be added separately when available.",
        ],
      },
      {
        id: "external-services",
        title: "External services",
        paragraphs: [
          "WhatsApp, Instagram and Google Maps are independent third-party services. Their availability, features, content and data practices are governed by their respective providers.",
        ],
      },
      {
        id: "liability",
        title: "Limitation of liability",
        paragraphs: [
          "Icono aims to keep website information useful and current, but errors, interruptions or outdated details may occur. To the extent permitted by applicable law, visitors should verify important service and appointment details directly with Icono.",
        ],
        notice:
          "Final limitation-of-liability wording should be reviewed by a qualified legal professional.",
      },
      {
        id: "changes",
        title: "Changes to the website or terms",
        paragraphs: [
          "Website content and these terms may be updated when services, technology or applicable requirements change. The approved effective date will appear at the top of this page.",
        ],
      },
      {
        id: "governing-law",
        title: "Governing law",
        paragraphs: [
          "The governing-law and dispute-resolution provision will be inserted after professional legal review.",
        ],
        notice: "[Governing law and jurisdiction to be confirmed by Icono]",
      },
      {
        id: "contact",
        title: "Contact",
        paragraphs: [
          "Questions about these terms can be directed to Icono using the contact details below.",
        ],
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    description:
      "Important context for the beauty and treatment information presented on this website.",
    status: "Draft for review · Effective date to be confirmed",
    sections: [
      {
        id: "general-information",
        title: "General information",
        paragraphs: [
          "This website presents general information about beauty, hair, makeup, grooming and salon-care services offered or listed by Icono. It is not a substitute for professional medical advice, diagnosis or treatment.",
        ],
      },
      {
        id: "results",
        title: "Individual results",
        paragraphs: [
          "Service experiences and visible results can vary according to individual characteristics, prior treatments, products, aftercare and other factors. No specific result or outcome is guaranteed.",
        ],
      },
      {
        id: "consultation",
        title: "Consultation and suitability",
        paragraphs: [
          "Some services may require an in-person consultation, suitability discussion, patch test or other precaution before proceeding. Visitors should disclose relevant sensitivities, conditions and prior treatments directly to the salon.",
        ],
      },
      {
        id: "descriptions",
        title: "Treatment descriptions",
        paragraphs: [
          "Terms used in salon service names—such as anti-aging, pigmentation or pimples treatment—describe the salon’s listed cosmetic services. They should not be read as medical claims or promises of cure.",
        ],
      },
      {
        id: "external-links",
        title: "External platforms",
        paragraphs: [
          "Links to WhatsApp, Instagram and Google Maps are provided for convenience. Icono is not responsible for the availability, content or independent practices of those platforms.",
        ],
      },
      {
        id: "contact",
        title: "Questions before booking",
        paragraphs: [
          "Contact Icono before booking if you need clarification about a service, its suitability, preparation or aftercare.",
        ],
      },
    ],
  },
  appointments: {
    title: "Appointment & Cancellation Policy",
    description: "How appointment enquiries, confirmations and schedule changes are handled.",
    status: "Interim draft · Policy details awaiting Icono confirmation",
    sections: [
      {
        id: "enquiries",
        title: "Appointment enquiries",
        paragraphs: [
          "Website and WhatsApp submissions are enquiries only. Please include your name, phone number, preferred service, date and time so the team can respond accurately.",
        ],
      },
      {
        id: "confirmation",
        title: "Confirmation process",
        paragraphs: [
          "An appointment is confirmed only when Icono replies and agrees to the requested service, date and time. An automated link opening or message being sent does not by itself confirm a booking.",
        ],
      },
      {
        id: "late-arrivals",
        title: "Late arrivals",
        paragraphs: [
          "Please contact Icono if you expect to arrive late so the team can advise whether the appointment can still proceed as planned.",
        ],
        notice: "[Late-arrival allowance and service-adjustment policy to be confirmed by Icono]",
      },
      {
        id: "rescheduling",
        title: "Rescheduling",
        paragraphs: [
          "Rescheduling requests should be sent through WhatsApp or by phone as early as reasonably possible.",
        ],
        notice: "[Required notice period for rescheduling to be confirmed by Icono]",
      },
      {
        id: "cancellations",
        title: "Cancellations",
        paragraphs: [
          "If you cannot attend, please let Icono know promptly so the appointment time can be released.",
        ],
        notice: "[Cancellation notice, fees and deposit treatment to be confirmed by Icono]",
      },
      {
        id: "no-shows",
        title: "No-shows",
        paragraphs: [
          "The policy that applies when a confirmed appointment is missed without notice has not yet been finalized.",
        ],
        notice: "[No-show policy to be confirmed by Icono]",
      },
      {
        id: "bridal-events",
        title: "Bridal and event appointments",
        paragraphs: [
          "Bridal and event services may require additional planning, consultation and schedule confirmation.",
        ],
        notice: "[Trial, deposit, travel, package and cancellation terms to be confirmed by Icono]",
      },
      {
        id: "consultations",
        title: "Consultation requirements",
        paragraphs: [
          "Icono may recommend an in-person consultation or preliminary check for certain advanced, chemical, skin, colour or occasion services before confirming suitability.",
        ],
      },
      {
        id: "contact",
        title: "Contact via WhatsApp",
        paragraphs: [
          "Use the contact options below to enquire, reschedule or cancel. Please wait for an acknowledgement from Icono before assuming a requested change is confirmed.",
        ],
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    description: "Our approach to making the Icono website clear, usable and welcoming.",
    status: "Current website statement · Last reviewed August 2026",
    sections: [
      {
        id: "commitment",
        title: "Our commitment",
        paragraphs: [
          "We aim to make this website accessible and usable across modern devices and assistive technologies. Accessibility is considered as the website evolves, without claiming a formal certification or audit that has not been completed.",
        ],
      },
      {
        id: "responsive-design",
        title: "Responsive design",
        paragraphs: [
          "Pages are designed to adapt across mobile, tablet and desktop screen sizes, with readable spacing and touch-friendly controls.",
        ],
      },
      {
        id: "keyboard",
        title: "Keyboard navigation",
        paragraphs: [
          "Interactive elements use standard links, buttons and form controls intended to remain usable with a keyboard. Visible focus styling is provided to help visitors understand their current position.",
        ],
      },
      {
        id: "contrast",
        title: "Contrast and readability",
        paragraphs: [
          "The design uses a restrained high-contrast palette, scalable headings and comfortably spaced body text. Legal and service information is kept within readable line lengths.",
        ],
      },
      {
        id: "motion",
        title: "Reduced motion",
        paragraphs: [
          "The website respects device-level reduced-motion preferences by minimizing animation and transition duration when that preference is enabled.",
        ],
      },
      {
        id: "alternative-text",
        title: "Alternative text",
        paragraphs: [
          "Meaningful images are supplied with text alternatives. Decorative presentation is kept separate from essential information wherever practical.",
        ],
      },
      {
        id: "feedback",
        title: "Accessibility feedback",
        paragraphs: [
          "If you experience difficulty using this website or accessing its information, please contact Icono. Include the page and a short description of the issue so it can be reviewed.",
        ],
      },
    ],
  },
} satisfies Record<string, PolicyPageData>;
