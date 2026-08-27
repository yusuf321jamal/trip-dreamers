import { ArrowRight } from "lucide-react";
import { img } from "../data/img";

export default function EmiBanner() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex flex-col overflow-hidden rounded-3xl shadow-card sm:flex-row sm:items-center">
          <img
            src={img("1520250497591-112f2f40a3f4", 1200, 65)}
            alt="Traveler relaxing at a resort"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-white/80" />

          <div className="relative z-10 flex-1 p-8 sm:p-10">
            <h3 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">
              Travel Now, <span className="text-gradient">Pay Later</span>
            </h3>
            <p className="mt-1.5 text-sm text-ink-600 sm:text-base">
              Experience luxury with no-cost EMI.
            </p>
            <ul className="mt-4 space-y-2 text-sm font-medium text-ink-800">
              <li className="flex items-center gap-2">
                <ArrowRight size={15} className="text-brand-blue" />
                0% interest on all packages
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={15} className="text-brand-blue" />
                Flexible 3–12 months EMI plans
              </li>
            </ul>
          </div>

          <div className="relative z-10 flex shrink-0 items-center justify-center gap-6 p-8 sm:justify-end sm:pr-10">
            <div className="text-center">
              <p className="text-gradient font-display text-3xl font-extrabold sm:text-4xl">0%</p>
              <p className="text-xs font-semibold text-ink-900">Interest</p>
            </div>
            <div className="text-center">
              <p className="text-gradient font-display text-3xl font-extrabold sm:text-4xl">12</p>
              <p className="text-xs font-semibold text-ink-900">Months</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
