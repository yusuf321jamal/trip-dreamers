import { motion } from "motion/react";
import { Clock3, MapPin } from "lucide-react";
import { staggerItem } from "../../lib/motion";
import { formatINR } from "../../utils/format";

export default function DestinationCard({ destination }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group relative flex h-80 w-60 shrink-0 snap-start flex-col justify-end overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover xs:h-96 xs:w-72 sm:w-80"
    >
      <img
        src={destination.image}
        alt={`${destination.name}, ${destination.country} — ${destination.tagline}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink-900/95 via-ink-900/30 to-transparent" />

      <span className="absolute left-4 top-4 flex items-baseline gap-2 rounded-full bg-gold-400 px-3.5 py-1.5 shadow-md">
        <span className="text-[11px] font-medium text-ink-900/60 line-through">
          {formatINR(destination.priceOriginal)}
        </span>
        <span className="text-xs font-extrabold text-ink-900">
          {formatINR(destination.price)}
        </span>
      </span>

      <div className="relative p-5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-cyan">
          {destination.country}
        </p>
        <h3 className="mt-1 font-display text-2xl font-bold text-white">{destination.name}</h3>
        <p className="mt-1 text-xs text-white/75">{destination.tagline}</p>
        <div className="mt-3 flex items-center gap-4 text-xs font-medium text-white/85">
          <span className="flex items-center gap-1.5">
            <Clock3 size={13} className="text-gold-400" />
            {destination.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-gold-400" />
            {destination.country}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
