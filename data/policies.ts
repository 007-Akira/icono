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

export const policies = {
  privacy: {
    title: "Privacy Policy",
    description: "How information submitted through the Icono website is handled.",
    status: "Last updated August 2026",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "Icono Beauty World & Makeover Studio (\"Icono\", \"we\", \"us\" or \"our\") respects your privacy. This Privacy Policy explains how information you choose to share through this website and our related communication channels may be handled.",
          "This website provides information about Icono's beauty, hair, makeup, grooming, makeover and salon-care services. The website does not provide user accounts, online payments or database-backed online appointment booking.",
        ],
      },
      {
        id: "information-provided",
        title: "Information you may provide",
        paragraphs: [
          "When you use the appointment enquiry features on this website, you may choose to provide contact and appointment-related information.",
        ],
        bullets: [
          "Your name",
          "Your phone number",
          "Your preferred service",
          "Your preferred date",
          "Your preferred time",
          "Any message or additional information you choose to include",
        ],
      },
      {
        id: "appointment-enquiries",
        title: "Appointment enquiries",
        paragraphs: [
          "The appointment form prepares a WhatsApp message using the information entered by the visitor. The visitor can review the message before choosing to send it through WhatsApp.",
          "The website itself does not confirm an appointment. An appointment is confirmed only when Icono responds and agrees to the requested service, date and time.",
        ],
      },
      {
        id: "whatsapp",
        title: "WhatsApp communication",
        paragraphs: [
          "When you choose to send an appointment enquiry through WhatsApp, the information in that conversation is processed through WhatsApp and may be received and used by Icono to respond to your enquiry and coordinate the requested service.",
          "WhatsApp is an independent third-party service and operates under its own terms and privacy practices. Icono does not control how WhatsApp processes information on its platform.",
        ],
      },
      {
        id: "how-information-is-used",
        title: "How information is used",
        paragraphs: [
          "Information you provide may be used to respond to your enquiry, discuss available services, coordinate appointments, communicate about an appointment, maintain necessary business records and meet applicable business or legal requirements.",
          "Icono does not use this website to create user accounts or process online payments.",
        ],
      },
      {
        id: "third-party-services",
        title: "Maps, social media and external services",
        paragraphs: [
          "The website provides links to third-party services including WhatsApp, Google Maps, Instagram and Facebook.",
          "Following or using these services may allow their respective providers to collect or process information according to their own terms and privacy practices. Icono does not control the privacy practices, availability or content of external platforms.",
        ],
      },
      {
        id: "cookies-analytics",
        title: "Cookies and analytics",
        paragraphs: [
          "The website does not intentionally operate a separate advertising or analytics system through which Icono directly collects visitor profiles.",
          "Essential technical functionality may be provided by the website's hosting infrastructure or other services required for the website to operate. Those providers may process technical information according to their own terms and policies.",
          "If analytics, advertising technologies, embedded social-media features or other tracking technologies are introduced in the future, this Privacy Policy may be updated accordingly.",
        ],
      },
      {
        id: "retention-security",
        title: "Retention and security",
        paragraphs: [
          "Information received through enquiries is retained only for as long as reasonably necessary to respond to enquiries, coordinate requested services, maintain necessary business records or meet applicable obligations.",
          "Icono takes reasonable care when handling information received through the website and its communication channels. However, no website, internet connection, email service or messaging platform can be guaranteed to be completely secure.",
        ],
      },
      {
        id: "rights",
        title: "Your choices and rights",
        paragraphs: [
          "You may contact Icono to ask about personal information that you have shared with us or to request correction or deletion of information where applicable.",
          "The availability of particular privacy rights depends on applicable law and the circumstances of the request.",
        ],
      },
      {
        id: "external-links",
        title: "External links",
        paragraphs: [
          "This website may contain links to external websites and platforms for convenience. Icono is not responsible for the privacy practices, security, content or availability of external websites or services.",
          "We recommend reviewing the privacy policies and terms of third-party services before providing them with personal information.",
        ],
      },
      {
        id: "changes",
        title: "Changes to this policy",
        paragraphs: [
          "Icono may update this Privacy Policy when the website, services, technology or applicable requirements change.",
          "The latest version of this policy will be published on this page.",
        ],
      },
      {
        id: "contact",
        title: "Privacy enquiries",
        paragraphs: [
          "Questions or requests concerning this Privacy Policy can be sent to Icono using the contact details below.",
          "Icono Beauty World & Makeover Studio",
          "Near TKM Arts College, Karicode, Peroor, Kollam, Kerala 691005, India.",
          "Email: iconobeautyworld@gmail.com",
          "Phone / WhatsApp: +91 94479 78174",
        ],
      },
    ],
  },

  terms: {
    title: "Terms & Conditions",
    description: "The terms that apply when visiting and using the Icono website.",
    status: "Last updated August 2026",
    sections: [
      {
        id: "introduction",
        title: "Introduction",
        paragraphs: [
          "These Terms & Conditions apply to your use of the website of Icono Beauty World & Makeover Studio (\"Icono\", \"we\", \"us\" or \"our\").",
          "By accessing or using this website, you agree to use it responsibly and in accordance with these terms.",
        ],
      },
      {
        id: "website-use",
        title: "Website use",
        paragraphs: [
          "This website provides general information about Icono Beauty World & Makeover Studio, its services, location and ways to contact the salon.",
          "You agree to use the website only for lawful purposes and not to interfere with its availability, security or operation.",
        ],
        bullets: [
          "Do not attempt to gain unauthorized access to the website or its systems.",
          "Do not introduce malicious code or harmful material.",
          "Do not interfere with or impair the operation of the website.",
          "Do not use website content for unauthorized commercial purposes.",
        ],
      },
      {
        id: "informational-content",
        title: "Informational nature of content",
        paragraphs: [
          "The information on this website is provided for general business and service information.",
          "Website information is not medical advice, diagnosis or treatment and should not be relied upon as a substitute for professional medical advice.",
        ],
      },
      {
        id: "service-information",
        title: "Service information",
        paragraphs: [
          "Service names and descriptions are intended to help visitors understand the categories of services offered or listed by Icono.",
          "Availability, suitability, products used, duration, preparation requirements and inclusions may vary. Important service details should be confirmed directly with Icono before an appointment.",
        ],
      },
      {
        id: "appointments",
        title: "Appointment enquiries and confirmation",
        paragraphs: [
          "Submitting an appointment enquiry through the website or WhatsApp does not create a confirmed appointment.",
          "The website appointment form prepares a WhatsApp message containing the information entered by the visitor. The visitor can review the message before sending it.",
          "An appointment is confirmed only when Icono responds and expressly agrees to the requested service, date and time.",
          "Opening WhatsApp or sending an enquiry does not guarantee availability.",
        ],
      },
      {
        id: "pricing",
        title: "Pricing",
        paragraphs: [
          "Prices are not currently published as fixed prices throughout this website.",
          "Visitors should contact Icono directly for current pricing and service information before booking. Any quotation, package or pricing information should be confirmed with the salon.",
        ],
      },
      {
        id: "service-suitability",
        title: "Service suitability",
        paragraphs: [
          "Certain beauty, skin, hair, chemical, colour or occasion-based services may not be suitable for every individual.",
          "Icono may recommend a consultation, suitability discussion, patch test or other precaution before proceeding with certain services.",
          "Visitors should provide relevant information about sensitivities, previous treatments, allergies or other circumstances that may be relevant to the requested service.",
        ],
      },
      {
        id: "results",
        title: "Individual results",
        paragraphs: [
          "Individual experiences and visible results may vary according to personal characteristics, previous treatments, products used, aftercare and other factors.",
          "Information presented on this website does not constitute a guarantee of a particular result or outcome.",
        ],
      },
      {
        id: "intellectual-property",
        title: "Intellectual property",
        paragraphs: [
          "The Icono name, branding, visual identity, website design, original text, graphics, photographs and other original website materials may be protected by applicable intellectual-property laws.",
          "You may view and use the website for personal and informational purposes. Original Icono content should not be reproduced, modified, distributed, published or commercially reused without appropriate permission.",
        ],
      },
      {
        id: "images",
        title: "Images and portfolio content",
        paragraphs: [
          "Images displayed on the website may include approved portfolio material and editorial or reference imagery.",
          "Where an image is identified as reference or editorial imagery, it should not be interpreted as a photograph of an Icono client or as completed work by Icono.",
          "Portfolio imagery is presented in the context in which it appears on the website.",
        ],
      },
      {
        id: "external-services",
        title: "External services",
        paragraphs: [
          "The website provides links to third-party services including WhatsApp, Instagram, Facebook and Google Maps.",
          "These services are operated independently of Icono. Their availability, functionality, content, terms and privacy practices are controlled by their respective providers.",
        ],
      },
      {
        id: "website-availability",
        title: "Website availability and accuracy",
        paragraphs: [
          "Icono aims to keep the information on this website useful and current. However, information may occasionally become outdated, incomplete or inaccurate.",
          "Website availability may also be affected by technical issues, maintenance, hosting problems or circumstances outside Icono's control.",
          "Important service, pricing and appointment information should be confirmed directly with Icono.",
        ],
      },
      {
        id: "changes",
        title: "Changes to the website or terms",
        paragraphs: [
          "Icono may update website content and these Terms & Conditions when services, technology or applicable requirements change.",
          "The latest version of these terms will be published on this page.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        paragraphs: [
          "Questions about these Terms & Conditions can be directed to Icono using the contact details below.",
          "Icono Beauty World & Makeover Studio",
          "Near TKM Arts College, Karicode, Peroor, Kollam, Kerala 691005, India.",
          "Email: iconobeautyworld@gmail.com",
          "Phone / WhatsApp: +91 94479 78174",
        ],
      },
    ],
  },

  disclaimer: {
    title: "Disclaimer",
    description:
      "Important context for the beauty and treatment information presented on this website.",
    status: "Last updated August 2026",
    sections: [
      {
        id: "general-information",
        title: "General information",
        paragraphs: [
          "This website presents general information about beauty, hair, makeup, grooming and salon-care services offered or listed by Icono Beauty World & Makeover Studio.",
          "The information provided on this website is not a substitute for professional medical advice, diagnosis or treatment.",
        ],
      },
      {
        id: "individual-results",
        title: "Individual results",
        paragraphs: [
          "Service experiences and visible results can vary according to individual characteristics, prior treatments, products used, aftercare and other factors.",
          "No specific result or outcome is guaranteed by the information presented on this website.",
        ],
      },
      {
        id: "consultation",
        title: "Consultation and suitability",
        paragraphs: [
          "Some services may require an in-person consultation, suitability discussion, patch test or other precaution before proceeding.",
          "Visitors should disclose relevant sensitivities, allergies, conditions and previous treatments directly to Icono when appropriate.",
          "Icono may recommend that a visitor seek appropriate professional advice where circumstances require it.",
        ],
      },
      {
        id: "treatment-descriptions",
        title: "Treatment descriptions",
        paragraphs: [
          "Terms used in salon service names, including terms such as anti-aging, pigmentation or pimples treatment, describe the cosmetic services listed by the salon.",
          "Such terminology should not be interpreted as a medical diagnosis, medical claim or promise of cure.",
        ],
      },
      {
        id: "external-platforms",
        title: "External platforms",
        paragraphs: [
          "Links to WhatsApp, Instagram, Facebook and Google Maps are provided for convenience.",
          "Icono does not control the availability, content, security or independent practices of these third-party platforms.",
        ],
      },
      {
        id: "questions-before-booking",
        title: "Questions before booking",
        paragraphs: [
          "Contact Icono before booking if you need clarification about a service, its suitability, preparation, expected experience or aftercare.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        paragraphs: [
          "Icono Beauty World & Makeover Studio",
          "Near TKM Arts College, Karicode, Peroor, Kollam, Kerala 691005, India.",
          "Email: iconobeautyworld@gmail.com",
          "Phone / WhatsApp: +91 94479 78174",
        ],
      },
    ],
  },

  appointments: {
    title: "Appointment & Cancellation Policy",
    description: "How appointment enquiries, confirmations and schedule changes are handled.",
    status: "Last updated August 2026",
    sections: [
      {
        id: "enquiries",
        title: "Appointment enquiries",
        paragraphs: [
          "Website and WhatsApp submissions are appointment enquiries only.",
          "When making an enquiry, please provide your name, phone number, preferred service, preferred date and preferred time so that the Icono team can respond accurately.",
        ],
      },
      {
        id: "confirmation",
        title: "Confirmation process",
        paragraphs: [
          "An appointment is confirmed only when Icono responds and agrees to the requested service, date and time.",
          "Opening WhatsApp, preparing a message or sending an enquiry does not by itself confirm a booking.",
          "Requested dates and times remain subject to availability until Icono provides confirmation.",
        ],
      },
      {
        id: "availability",
        title: "Availability",
        paragraphs: [
          "Appointment availability depends on the salon's schedule, the requested service and the time required to provide that service.",
          "If the requested date or time is unavailable, Icono may suggest an alternative appointment time.",
        ],
      },
      {
        id: "late-arrivals",
        title: "Late arrivals",
        paragraphs: [
          "If you expect to arrive late, please contact Icono as soon as possible through WhatsApp or phone.",
          "Depending on the length of the delay and the nature of the service, Icono may advise whether the appointment can proceed as planned or whether another arrangement is required.",
        ],
      },
      {
        id: "rescheduling",
        title: "Rescheduling",
        paragraphs: [
          "Rescheduling requests should be sent through WhatsApp or by phone as early as reasonably possible.",
          "A requested change is not considered confirmed until Icono acknowledges and agrees to the new date or time.",
        ],
      },
      {
        id: "cancellations",
        title: "Cancellations",
        paragraphs: [
          "If you cannot attend a confirmed appointment, please inform Icono as soon as possible so that the appointment time may be released.",
          "Cancellation arrangements may depend on the type of appointment and any specific arrangements communicated by Icono at the time of booking.",
        ],
      },
      {
        id: "missed-appointments",
        title: "Missed appointments",
        paragraphs: [
          "If a confirmed appointment is missed without prior notice, please contact Icono before attempting to arrange another appointment.",
          "Future appointment availability may be subject to the salon's scheduling requirements.",
        ],
      },
      {
        id: "bridal-events",
        title: "Bridal and event appointments",
        paragraphs: [
          "Bridal, event and other occasion-based services may require additional planning, consultation and schedule confirmation.",
          "Customers should discuss service requirements, timing and any other arrangements directly with Icono before considering a bridal or event appointment confirmed.",
        ],
      },
      {
        id: "consultations",
        title: "Consultation requirements",
        paragraphs: [
          "Icono may recommend an in-person consultation or preliminary check for certain advanced, chemical, skin, colour or occasion-based services before confirming suitability.",
          "Customers should provide relevant information about sensitivities, allergies, previous treatments or other circumstances that may affect the requested service.",
        ],
      },
      {
        id: "contact",
        title: "Contact Icono",
        paragraphs: [
          "Use the contact options below to enquire, reschedule or cancel an appointment.",
          "Please wait for an acknowledgement from Icono before assuming that a booking, cancellation or rescheduling request has been accepted.",
          "Phone / WhatsApp: +91 94479 78174",
          "Email: iconobeautyworld@gmail.com",
        ],
      },
      {
        id: "policy-updates",
        title: "Policy updates",
        paragraphs: [
          "Icono may update this Appointment & Cancellation Policy as its appointment procedures or service arrangements change.",
          "The latest version of this policy will be published on this page.",
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
          "We aim to make this website accessible and usable across modern devices and assistive technologies.",
          "Accessibility is considered as the website evolves. This statement does not claim a formal accessibility certification or audit that has not been completed.",
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
          "Interactive elements use standard links, buttons and form controls intended to remain usable with a keyboard.",
          "Visible focus styling is provided to help visitors understand their current position when navigating interactively.",
        ],
      },
      {
        id: "contrast",
        title: "Contrast and readability",
        paragraphs: [
          "The design uses a restrained high-contrast palette, scalable headings and comfortably spaced body text.",
          "Legal and service information is presented using readable line lengths and spacing.",
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
          "If you experience difficulty using this website or accessing its information, please contact Icono.",
          "When reporting an accessibility issue, please include the page involved and a short description of the problem so that it can be reviewed.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        paragraphs: [
          "Icono Beauty World & Makeover Studio",
          "Near TKM Arts College, Karicode, Peroor, Kollam, Kerala 691005, India.",
          "Email: iconobeautyworld@gmail.com",
          "Phone / WhatsApp: +91 94479 78174",
        ],
      },
    ],
  },
} satisfies Record<string, PolicyPageData>;