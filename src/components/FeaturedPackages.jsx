import { useState } from "react";
import { motion } from "motion/react";
import { featuredPackages } from "../data/packages";
import { tapHover, tapHoverSubtle } from "../lib/motion";
import PackageCard from "./ui/PackageCard";
import SectionHeading from "./ui/SectionHeading";

const FILTERS = [
  { key: "all", label: "All Packages" },
  { key: "Bestseller", label: "Bestsellers" },
  { key: "Honeymoon Special", label: "Honeymoon" },
  { key: "India Favourite", label: "India" },
  { key: "Trending", label: "Trending" },
];

function PackageGrid({ filtered }) {
  return (
    <div className="mt-11 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((pkg, i) => (
        <PackageCard key={pkg.id} pkg={pkg} index={i} />
      ))}
    </div>
  );
}

export default function FeaturedPackages() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? featuredPackages : featuredPackages.filter((p) => p.tag === active);

  return (
    <section className="scroll-mt-24 bg-sky-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          script="Fixed departures"
          title="Featured Tour Packages"
          description="Transparent, all-inclusive pricing on our most-booked itineraries — flights, stays, and sightseeing bundled in."
          align="center"
        />

        <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
          {FILTERS.map((f) => (
            <motion.button
              key={f.key}
              {...tapHoverSubtle}
              onClick={() => setActive(f.key)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active === f.key
                  ? "bg-gradient-brand border-transparent text-white"
                  : "border-ink-900/10 bg-white text-ink-700 hover:border-brand-cyan hover:text-brand-blue"
              }`}
            >
              {f.label}
            </motion.button>
          ))}
        </div>

        <PackageGrid key={active} filtered={filtered} />

        <div className="mt-12 flex justify-center">
          <motion.a
            {...tapHover}
            href="#enquiry"
            className="bg-gradient-brand rounded-full px-7 py-3 text-sm font-semibold text-white shadow-card"
          >
            View All Packages
          </motion.a>
        </div>
      </div>
    </section>
  );
}
