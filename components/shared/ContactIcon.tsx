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
      <path d="M20.2 11.8a8.2 8.2 0 0 1-12.1 7.1L3 20.3l1.4-4.9a8.2 8.2 0 1 1 15.8-3.6Z" />
      <path d="M8.2 7.7c.3-.6.6-.6 1-.6h.3l1 2.3c.1.3.1.5-.1.7l-.8 1c1 2 2.4 3.3 4.4 4.1l.9-1c.2-.2.5-.3.7-.2l2.2 1.1c.3.2.4.4.3.7-.2 1.1-1.2 2.1-2.3 2.2-1.2.1-3.1-.5-5.3-2.4-2.7-2.3-4.4-5.1-4.3-6.4 0-.6.3-1.1.6-1.5" />
    </svg>
  );
}
