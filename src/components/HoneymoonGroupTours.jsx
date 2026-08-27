import { useState } from "react";
import { motion } from "motion/react";
import { Heart, Users } from "lucide-react";
import { groupTourPackages, honeymoonPackages } from "../data/packages";
import { staggerContainer, staggerItem, tapHover, tapHoverSubtle, viewportOnce } from "../lib/motion";
import { formatINR } from "../utils/format";
import SectionHeading from "./ui/SectionHeading";

const TABS = [
  { key: "honeymoon", label: "Honeymoon Escapes", icon: Heart, data: honeymoonPackages },
  { key: "group", label: "Group Tours", icon: Users, data: groupTourPackages },
];

export default function HoneymoonGroupTours() {
  const [active, setActive] = useState("honeymoon");
  const current = TABS.find((t) => t.key === active);

  return (
    <section id="honeymoon" className="scroll-mt-24 bg-sky-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            script="Together, better"
            title="Honeymoon & Group Tours"
            description="Whether it's just the two of you or the whole friend group — we design trips around who you're traveling with."
          />

          <div className="flex shrink-0 gap-2 rounded-full bg-white p-1.5 shadow-card">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.key === active;
              return (
                <motion.button
                  key={tab.key}
                  {...tapHoverSubtle}
                  onClick={() => setActive(tab.key)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-gradient-brand text-white"
                      : "text-ink-700 hover:text-brand-blue"
                  }`}
                >
                  <Icon size={15} />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={active}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {current.data.map((pkg) => (
            <motion.article
              key={pkg.id}
              variants={staggerItem}
              className="group relative flex h-96 flex-col justify-end overflow-hidden rounded-2xl bg-card-950 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-card-950 via-card-950/40 to-transparent" />

              <div className="relative flex items-end justify-between gap-3 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                    {pkg.duration}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">{pkg.title}</h3>
                  <p className="mt-1 text-sm text-white/80">
                    from <span className="font-semibold text-white">{formatINR(pkg.price)}</span>
                  </p>
                </div>
                <motion.a
                  {...tapHover}
                  href="#enquiry"
                  className="bg-gradient-brand shrink-0 rounded-full px-4 py-2 text-xs font-semibold text-white"
                >
                  Enquire
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
