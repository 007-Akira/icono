type ContactIconName = "email" | "instagram" | "location" | "phone" | "whatsapp";

type ContactIconProps = {
  name: ContactIconName;
  className?: string;
};

// These compact outline icons use currentColor so they automatically match
// dark and light sections without requiring separate image files.
export function ContactIcon({ name, className = "size-4" }: ContactIconProps) {
  const commonProps = {
    "aria-hidden": true,
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
  };

  if (name === "instagram") {
    return (
      <svg {...commonProps}>
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg {...commonProps}>
        <rect x="2.75" y="5" width="18.5" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === "location") {
    return (
      <svg {...commonProps}>
        <path d="M20 10c0 5.25-8 11-8 11s-8-5.75-8-11a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...commonProps}>
        <path d="M7.2 3.5 9.5 7 7.9 9.1a14.8 14.8 0 0 0 7 7l2.1-1.6 3.5 2.3-.8 3.1c-.2.8-1 1.3-1.8 1.2A17.2 17.2 0 0 1 2.9 6.1c-.1-.8.4-1.6 1.2-1.8l3.1-.8Z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <circle cx="12" cy="11.5" r="8.25" />
      <path d="m6.2 17.4-2 3.4 4.1-1.3" />
      <path d="M8.5 7.8c.7 4.3 3.4 7 7.7 7.7l1.3-1.7 2 1.3c-.3 1.6-1.2 2.5-2.8 2.8-5-.8-8.8-4.6-9.6-9.6.3-1.6 1.2-2.5 2.8-2.8l1.3 2-1.7 1.3" />
    </svg>
  );
}
