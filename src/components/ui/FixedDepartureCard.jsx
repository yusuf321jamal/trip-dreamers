import { motion } from "motion/react";
import { CalendarDays, Clock3, MapPin, Plane } from "lucide-react";
import { staggerItem, tapHover, tapHoverSubtle } from "../../lib/motion";
import { formatINR } from "../../utils/format";

export default function FixedDepartureCard({ pkg, withFlight }) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex h-80 w-60 shrink-0 flex-col justify-end overflow-hidden rounded-2xl bg-card-950 shadow-card xs:h-96 xs:w-72 sm:w-96"
    >
      <img
        src={pkg.image}
        alt={`${pkg.title} - ${pkg.cities}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-linear-to-t from-card-950 via-card-950/50 to-card-950/5" />

      <span className="absolute left-3 top-3 flex items-baseline gap-2 rounded-full bg-gold-400 px-3.5 py-1.5 shadow-md">
        <span className="text-[11px] font-medium text-ink-900/60 line-through">
          {formatINR(pkg.priceOriginal)}
        </span>
        <span className="text-xs font-extrabold text-ink-900">{formatINR(pkg.price)}</span>
        <span className="text-[10px] font-medium text-ink-900/70">onwards</span>
      </span>

      {withFlight && (
        <span className="bg-gradient-brand absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-white shadow-md">
          <Plane size={16} />
        </span>
      )}

      <div className="relative p-5">
        <h3 className="font-display text-lg font-bold leading-snug text-white">{pkg.title}</h3>
        <p className="mt-1 text-xs text-white/70">{pkg.cities}</p>

        <div className="mt-3 grid grid-cols-2 gap-y-1.5 text-xs font-medium text-white/90">
          <span className="flex items-center gap-1.5">
            <Clock3 size={13} className="text-gold-400" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-gold-400" />
            {pkg.departureCity}
          </span>
          <span className="col-span-2 flex items-center gap-1.5">
            <CalendarDays size={13} className="text-gold-400" />
            {pkg.dates}
          </span>
        </div>

        <div className="mt-4 flex gap-2 border-t border-white/10 pt-4">
          <motion.button
            {...tapHoverSubtle}
            className="flex-1 rounded-full bg-white/10 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
          >
            View Details
          </motion.button>
          <motion.button
            {...tapHover}
            className="bg-gradient-brand flex-1 rounded-full py-2.5 text-xs font-semibold text-white"
          >
            Enquire Now
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
