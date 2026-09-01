import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { CalendarDays, Check, X } from "lucide-react";
import { fixedDepartures } from "../data/fixedDepartures";
import { packageDetails } from "../data/packageDetails";
import { tapHover } from "../lib/motion";
import { formatINR } from "../utils/format";
import ItineraryAccordion from "../components/ui/ItineraryAccordion";
import RotatingImage from "../components/ui/RotatingImage";

const TAB_OFFSET = 150;

export default function PackageDetails() {
  const { id } = useParams();
  const pkg = fixedDepartures.find((p) => p.id === id);
  const detail = packageDetails[id];

  const sectionRefs = useRef({});
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { key: "overview", label: "Overview & Highlights" },
    detail?.itinerary?.length && { key: "itinerary", label: "Itinerary" },
    detail?.inclusions?.length && { key: "inclusions", label: "Inclusions" },
    detail?.exclusions?.length && { key: "exclusions", label: "Exclusions" },
    (detail?.hotels?.length || detail?.notes?.length) && { key: "other", label: "Other Info" },
  ].filter(Boolean);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.dataset.section);
        });
      },
      { rootMargin: "-160px 0px -60% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [detail]);

  const scrollToSection = (key) => {
    const el = sectionRefs.current[key];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - TAB_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  if (!pkg) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-ink-900">Package not found</h1>
        <Link to="/" className="text-brand-blue underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <section className="relative h-[380px] w-full overflow-hidden sm:h-[440px]">
        <RotatingImage
          images={detail?.heroImages ?? [pkg.image]}
          alt={pkg.title}
          interval={4500}
          showDots={false}
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                {pkg.title}
              </h1>
              <p className="mt-3 flex items-center gap-2 text-sm text-white/90 sm:text-base">
                <CalendarDays size={16} className="text-brand-cyan" />
                {pkg.dates}
              </p>
            </div>
            <motion.a {...tapHover} href="#enquiry" className="bg-gradient-brand w-fit rounded-full px-6 py-3 text-sm font-semibold text-white shadow-card-hover">
              Book Now
            </motion.a>
          </div>
        </div>
      </section>

      <nav className="sticky top-16 z-30 border-b border-ink-900/5 bg-white/95 backdrop-blur lg:top-[108px]">
        <div className="scrollbar-none mx-auto flex max-w-7xl gap-10 overflow-x-auto px-6 sm:justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => scrollToSection(tab.key)}
              className={`shrink-0 whitespace-nowrap border-b-2 py-4 text-base font-semibold transition-colors ${
                activeTab === tab.key
                  ? "border-brand-blue text-brand-blue"
                  : "border-transparent text-ink-600 hover:text-brand-blue"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <div
        ref={(el) => (sectionRefs.current.overview = el)}
        data-section="overview"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-3"
      >
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-brand-blue">About This Package</h2>
          <hr className="mt-3 border-ink-900/10" />
          <p className="mt-4 text-base leading-relaxed text-ink-600">{detail?.about}</p>

          {detail?.overview?.length > 0 && (
            <div className="mt-6 rounded-xl bg-sky-50 p-6">
              <h3 className="font-display text-lg font-bold text-ink-900">Tour Overview</h3>
              <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {detail.overview.map((item) => (
                  <p key={item.day} className="text-sm text-ink-700">
                    <span className="font-semibold text-brand-blue">Day {item.day}:</span>{" "}
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
          )}

          {detail?.facts?.length > 0 && (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {detail.facts.map((fact) => (
                <div key={fact.label} className="rounded-xl bg-ink-900/[0.03] p-4">
                  <p className="font-display text-sm font-bold text-ink-900">{fact.label}</p>
                  <p className="mt-1.5 text-sm text-ink-600">{fact.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-2xl bg-white p-6 text-center shadow-card lg:sticky lg:top-[190px]">
            {pkg.priceOriginal > pkg.price && (
              <p className="text-sm text-ink-400 line-through">{formatINR(pkg.priceOriginal)}</p>
            )}
            <p className="text-gradient mt-1 text-3xl font-extrabold">{formatINR(pkg.price)}</p>
            <p className="mt-1 text-sm text-ink-600">per person</p>
            <motion.a
              {...tapHover}
              href="#enquiry"
              className="bg-gradient-brand mt-5 block w-full rounded-full py-3 text-sm font-semibold text-white shadow-card-hover"
            >
              Book Now
            </motion.a>
          </div>
        </div>
      </div>

      {detail?.itinerary?.length > 0 && (
        <div
          ref={(el) => (sectionRefs.current.itinerary = el)}
          data-section="itinerary"
          className="mx-auto max-w-7xl px-6 py-10"
        >
          <h2 className="text-2xl font-bold text-brand-blue">Detailed Itinerary</h2>
          <hr className="mt-3 border-ink-900/10" />
          <div className="mt-6 flex flex-col gap-4">
            {detail.itinerary.map((day) => (
              <ItineraryAccordion key={day.day} {...day} />
            ))}
          </div>
        </div>
      )}

      {detail?.inclusions?.length > 0 && (
        <div
          ref={(el) => (sectionRefs.current.inclusions = el)}
          data-section="inclusions"
          className="mx-auto max-w-7xl px-6 py-10"
        >
          <h2 className="font-display text-2xl font-bold text-ink-900">Tour Inclusions</h2>
          <hr className="mt-3 border-ink-900/10" />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {detail.inclusions.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-ink-900/[0.03] p-4">
                <Check size={18} className="mt-0.5 shrink-0 text-emerald-500" />
                <p className="text-sm text-ink-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {detail?.exclusions?.length > 0 && (
        <div
          ref={(el) => (sectionRefs.current.exclusions = el)}
          data-section="exclusions"
          className="mx-auto max-w-7xl px-6 py-10"
        >
          <h2 className="font-display text-2xl font-bold text-ink-900">Tour Exclusions</h2>
          <hr className="mt-3 border-ink-900/10" />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {detail.exclusions.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-ink-900/[0.03] p-4">
                <X size={18} className="mt-0.5 shrink-0 text-red-500" />
                <p className="text-sm text-ink-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {(detail?.hotels?.length > 0 || detail?.notes?.length > 0) && (
        <div
          ref={(el) => (sectionRefs.current.other = el)}
          data-section="other"
          className="mx-auto max-w-7xl px-6 py-10"
        >
          <h2 className="font-display text-2xl font-bold text-ink-900">Other Information</h2>
          <hr className="mt-3 border-ink-900/10" />

          {detail?.hotels?.length > 0 && (
            <>
              <h3 className="mt-6 font-display text-lg font-bold text-ink-900">Hotels</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {detail.hotels.map((hotel) => (
                  <div key={hotel.city} className="rounded-xl bg-sky-50 p-5">
                    <p className="font-display font-bold text-ink-900">{hotel.city}</p>
                    <p className="mt-1 text-sm text-ink-700">{hotel.options}</p>
                    <p className="mt-1 text-xs text-ink-400">{hotel.roomType}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {detail?.notes?.length > 0 && (
            <>
              <h3 className="mt-6 font-display text-lg font-bold text-ink-900">Important Notes</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {detail.notes.map((note) => (
                  <div key={note} className="rounded-xl bg-sky-50 p-5">
                    <p className="text-sm text-ink-700">{note}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <motion.a
        {...tapHover}
        href="#enquiry"
        className="bg-gradient-brand fixed bottom-24 right-6 z-40 flex items-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-card-hover lg:hidden"
      >
        Book Now
      </motion.a>
    </div>
  );
}
