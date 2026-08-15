"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { business } from "@/data/business";
import { referenceImages } from "@/data/images";
import { services } from "@/data/services";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { AppointmentDateTimePickers } from "./AppointmentDateTimePickers";

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
              <PickerIcon />
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
          <AppointmentDateTimePickers />
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-olive">
        {label}
        {required ? " *" : ""}
      </span>
      <input className="field" name={name} type={type} required={required} />
    </label>
  );
}

function PickerIcon() {
  return (
    <span
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-olive"
      aria-hidden
    >
      ⌄
    </span>
  );
}
