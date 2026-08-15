"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { business } from "@/data/business";
import { referenceImages } from "@/data/images";
import { services } from "@/data/services";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function AppointmentEnquiry() {
  const [error, setError] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const servicePicker = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeServicePicker(event: PointerEvent) {
      if (!servicePicker.current?.contains(event.target as Node)) setServiceOpen(false);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setServiceOpen(false);
    }

    document.addEventListener("pointerdown", closeServicePicker);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeServicePicker);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = {
      name: String(form.get("name") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      service: String(form.get("service") || ""),
      date: String(form.get("date") || ""),
      time: String(form.get("time") || ""),
      message: String(form.get("message") || "").trim(),
    };
    if (!data.name || !data.phone || !data.service) {
      setError("Please complete your name, phone number, and service.");
      return;
    }
    // Nothing is submitted to this website. The helper prepares a wa.me URL and
    // lets the visitor review the populated message inside WhatsApp.
    const url = createWhatsAppUrl(business.whatsapp, data);
    if (!url) {
      setError("ICONO’s WhatsApp number has not been added yet. Please check back soon.");
      return;
    }
    setError("");
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <section id="appointment" className="scroll-mt-24 py-section">
      <div className="page-shell grid gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <p className="eyebrow text-olive">Appointment Enquiry</p>
          <h2 className="display mt-4 text-5xl">Request an appointment</h2>
          <p className="mt-6 max-w-lg leading-7 text-olive">
            Share your preferred service and timing. Your request is confirmed only after ICONO
            responds on WhatsApp.
          </p>
          <div className="relative mt-10 h-64 overflow-hidden">
            <Image
              src={referenceImages.tools}
              alt="Editorial arrangement of beauty tools"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <form onSubmit={submit} noValidate className="space-y-7">
          <Field label="Full name" name="name" required />
          <Field label="Phone number" name="phone" type="tel" required />
          <div className="block" ref={servicePicker}>
            <span id="service-picker-label" className="eyebrow text-olive">
              Service *
            </span>
            <div className="relative mt-2">
              <input type="hidden" name="service" value={selectedService} />
              <button
                type="button"
                className="picker-field flex items-center text-left"
                aria-labelledby="service-picker-label service-picker-value"
                aria-haspopup="listbox"
                aria-controls="appointment-service-options"
                aria-expanded={serviceOpen}
                onClick={() => setServiceOpen((open) => !open)}
              >
                <span
                  id="service-picker-value"
                  className={selectedService ? "text-smoke" : "text-olive"}
                >
                  {selectedService || "Select a service"}
                </span>
              </button>
              <PickerIcon type="chevron" />
              {serviceOpen ? (
                <div
                  id="appointment-service-options"
                  role="listbox"
                  aria-labelledby="service-picker-label"
                  className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-30 max-h-80 overflow-y-auto border border-smoke/10 bg-floral p-3 shadow-xl"
                >
                  {services.map((service) => (
                    <button
                      type="button"
                      role="option"
                      aria-selected={selectedService === service.title}
                      key={service.slug}
                      onClick={() => {
                        setSelectedService(service.title);
                        setServiceOpen(false);
                        setError("");
                      }}
                      className={`block w-full px-4 py-3 text-left text-sm transition-colors hover:bg-bone/40 ${selectedService === service.title ? "bg-bone/40 font-medium" : ""}`}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div className="grid gap-7 sm:grid-cols-2">
            <Field label="Preferred date" name="date" type="date" icon="calendar" />
            <Field label="Preferred time" name="time" type="time" icon="clock" />
          </div>
          <label className="block">
            <span className="eyebrow text-olive">Message</span>
            <textarea className="field min-h-24 resize-y" name="message" />
          </label>
          {error && (
            <p role="alert" className="border-l-2 border-smoke pl-4 text-sm">
              {error}
            </p>
          )}
          <button type="submit" className="eyebrow min-h-12 w-full bg-smoke px-8 py-4 text-floral">
            Continue to WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
function Field({
  label,
  name,
  type = "text",
  required = false,
  icon,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  icon?: "calendar" | "clock";
}) {
  return (
    <label className="block">
      <span className="eyebrow text-olive">
        {label}
        {required ? " *" : ""}
      </span>
      {icon ? (
        <span className="relative mt-2 block">
          <input className="picker-field" name={name} type={type} required={required} />
          <PickerIcon type={icon} />
        </span>
      ) : (
        <input className="field" name={name} type={type} required={required} />
      )}
    </label>
  );
}

function PickerIcon({ type }: { type: "chevron" | "calendar" | "clock" }) {
  if (type === "chevron") {
    return (
      <span
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-olive"
        aria-hidden
      >
        ⌄
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-olive"
      aria-hidden="true"
    >
      {type === "calendar" ? (
        <>
          <path d="M6.5 3.5v3M17.5 3.5v3M4 9h16M5.5 5h13A1.5 1.5 0 0 1 20 6.5v12a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-12A1.5 1.5 0 0 1 5.5 5Z" />
        </>
      ) : (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </>
      )}
    </svg>
  );
}
