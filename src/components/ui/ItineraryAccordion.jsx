import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function ItineraryAccordion({ day, title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl bg-sky-50">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-3 p-4 text-left sm:items-center sm:p-5"
        aria-expanded={open}
      >
        <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
          <span className="text-sm font-semibold text-brand-blue">Day {day}</span>
          <span className="font-display text-base font-bold text-ink-900">{title}</span>
        </div>
        <ChevronDown
          size={18}
          className={`mt-0.5 shrink-0 text-brand-blue transition-transform sm:mt-0 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="px-4 pb-4 text-sm leading-relaxed text-ink-600 sm:px-5 sm:pb-5">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
