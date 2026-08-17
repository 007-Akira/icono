"use client";

import { useEffect, useRef, useState } from "react";

const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// Preferred-time options follow the published usual hours. They are enquiry
// preferences only; Icono still confirms actual availability on WhatsApp.
const timeOptions = Array.from({ length: 21 }, (_, index) => {
  const totalMinutes = 9 * 60 + index * 30;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const value = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  const displayHour = hours % 12 || 12;
  return {
    value,
    label: `${displayHour}:${String(minutes).padStart(2, "0")} ${hours < 12 ? "AM" : "PM"}`,
  };
});

type OpenPicker = "date" | "time" | null;

export function AppointmentDateTimePickers() {
  const today = startOfDay(new Date());
  const pickerArea = useRef<HTMLDivElement>(null);
  const [openPicker, setOpenPicker] = useState<OpenPicker>(null);
  const [visibleMonth, setVisibleMonth] = useState(() => startOfMonth(today));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    function closePickers(event: PointerEvent) {
      if (!pickerArea.current?.contains(event.target as Node)) setOpenPicker(null);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPicker(null);
    }

    document.addEventListener("pointerdown", closePickers);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closePickers);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const calendarDays = createCalendarDays(visibleMonth);

  return (
    <div ref={pickerArea} className="grid gap-7 sm:grid-cols-2">
      <div>
        <span id="date-picker-label" className="eyebrow text-olive">
          Preferred date
        </span>
        <div className="relative mt-2">
          <input type="hidden" name="date" value={selectedDate ? toDateValue(selectedDate) : ""} />
          <button
            type="button"
            className="picker-field flex touch-manipulation items-center justify-between text-left"
            aria-labelledby="date-picker-label date-picker-value"
            aria-haspopup="dialog"
            aria-expanded={openPicker === "date"}
            onClick={() => setOpenPicker((open) => (open === "date" ? null : "date"))}
          >
            <span id="date-picker-value" className={selectedDate ? "text-smoke" : "text-olive"}>
              {selectedDate ? formatSelectedDate(selectedDate) : "Choose a date"}
            </span>
            <CalendarIcon />
          </button>
          {openPicker === "date" ? (
            <div
              role="dialog"
              aria-label="Choose a preferred date"
              className="absolute left-0 top-[calc(100%+0.5rem)] z-30 w-[min(22rem,calc(100vw-2.5rem))] border border-smoke/10 bg-floral p-4 shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-olive/20 pb-3">
                <button
                  type="button"
                  onClick={() => setVisibleMonth(addMonths(visibleMonth, -1))}
                  aria-label="Previous month"
                  className="grid size-9 place-items-center hover:bg-bone/40"
                >
                  ‹
                </button>
                <p className="display text-lg font-semibold">
                  {visibleMonth.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
                </p>
                <button
                  type="button"
                  onClick={() => setVisibleMonth(addMonths(visibleMonth, 1))}
                  aria-label="Next month"
                  className="grid size-9 place-items-center hover:bg-bone/40"
                >
                  ›
                </button>
              </div>
              <div className="mt-4 grid grid-cols-7 text-center">
                {weekdays.map((day) => (
                  <span key={day} className="eyebrow py-2 text-olive">
                    {day}
                  </span>
                ))}
                {calendarDays.map((date, index) =>
                  date ? (
                    <button
                      type="button"
                      key={toDateValue(date)}
                      disabled={date < today}
                      aria-label={date.toLocaleDateString("en-IN", { dateStyle: "long" })}
                      aria-pressed={selectedDate ? isSameDay(date, selectedDate) : false}
                      onClick={() => {
                        setSelectedDate(date);
                        setOpenPicker(null);
                      }}
                      className={`aspect-square text-sm transition-colors disabled:cursor-not-allowed disabled:text-olive/30 ${selectedDate && isSameDay(date, selectedDate) ? "bg-smoke text-floral" : "hover:bg-bone/40"}`}
                    >
                      {date.getDate()}
                    </button>
                  ) : (
                    <span key={`empty-${index}`} />
                  ),
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div>
        <span id="time-picker-label" className="eyebrow text-olive">
          Preferred time
        </span>
        <div className="relative mt-2">
          <input type="hidden" name="time" value={selectedTime} />
          <button
            type="button"
            className="picker-field flex touch-manipulation items-center justify-between text-left"
            aria-labelledby="time-picker-label time-picker-value"
            aria-haspopup="listbox"
            aria-expanded={openPicker === "time"}
            onClick={() => setOpenPicker((open) => (open === "time" ? null : "time"))}
          >
            <span id="time-picker-value" className={selectedTime ? "text-smoke" : "text-olive"}>
              {timeOptions.find((option) => option.value === selectedTime)?.label ||
                "Choose a time"}
            </span>
            <ClockIcon />
          </button>
          {openPicker === "time" ? (
            <div
              role="listbox"
              aria-label="Choose a preferred time"
              className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-30 max-h-72 overflow-y-auto border border-smoke/10 bg-floral p-3 shadow-xl"
            >
              {timeOptions.map((option) => (
                <button
                  type="button"
                  role="option"
                  aria-selected={selectedTime === option.value}
                  key={option.value}
                  onClick={() => {
                    setSelectedTime(option.value);
                    setOpenPicker(null);
                  }}
                  className={`block w-full px-4 py-3 text-left text-sm transition-colors hover:bg-bone/40 ${selectedTime === option.value ? "bg-bone/40 font-medium" : ""}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="pointer-events-none size-5 shrink-0 text-olive"
      aria-hidden="true"
    >
      <path d="M6.5 3.5v3M17.5 3.5v3M4 9h16M5.5 5h13A1.5 1.5 0 0 1 20 6.5v12a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-12A1.5 1.5 0 0 1 5.5 5Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="pointer-events-none size-5 shrink-0 text-olive"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}
function isSameDay(first: Date, second: Date) {
  return toDateValue(first) === toDateValue(second);
}
function toDateValue(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function formatSelectedDate(date: Date) {
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
function createCalendarDays(month: Date) {
  const firstWeekday = month.getDay();
  const dayCount = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  return [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from(
      { length: dayCount },
      (_, index) => new Date(month.getFullYear(), month.getMonth(), index + 1),
    ),
  ];
}
