import { motion } from "motion/react";
import { Clock3, MapPin, Star } from "lucide-react";
import { staggerItem, tapHover, tapHoverSubtle } from "../../lib/motion";
import { formatINR } from "../../utils/format";

export default function PackageCard({ pkg }) {
  const discount = Math.round(((pkg.priceOriginal - pkg.price) / pkg.priceOriginal) * 100);

  return (
    <motion.article
      variants={staggerItem}
      className="group relative flex h-96 flex-col justify-end overflow-hidden rounded-2xl bg-card-950 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
    >
      <img
        src={pkg.image}
        alt={`${pkg.title} - ${pkg.cities}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-card-950 via-card-950/55 to-card-950/10" />

      {discount > 0 && (
        <span className="absolute right-3 top-3 rounded-full bg-gold-400 px-3 py-1 text-[11px] font-bold text-ink-900 shadow-md">
          {discount}% OFF
        </span>
      )}
      {pkg.tag && (
        <span className="bg-gradient-brand absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold text-white">
          {pkg.tag}
        </span>
      )}

      <div className="relative flex flex-col p-5">
        <h3 className="font-display text-xl font-bold text-white">{pkg.title}</h3>
        <p className="mt-1 text-xs text-white/70">{pkg.cities}</p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium text-white/90">
          <span className="flex items-center gap-1.5">
            <Clock3 size={13} className="text-gold-400" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-gold-400" />
            {pkg.departure}
          </span>
          <span className="flex items-center gap-1 rounded-md bg-white/10 px-1.5 py-0.5">
            <Star size={12} className="fill-mint-100 text-mint-100" />
            <span className="text-mint-100">{pkg.rating}</span>
            <span className="text-white/60">({pkg.reviews})</span>
          </span>
        </div>

        <div className="mt-4 flex flex-col items-start gap-3 border-t border-white/10 pt-4">
          <div>
            <p className="text-[11px] text-white/60">Starts from</p>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-lg font-bold text-white">
                {formatINR(pkg.price)}
              </span>
              {discount > 0 && (
                <span className="text-xs text-white/50 line-through">
                  {formatINR(pkg.priceOriginal)}
                </span>
              )}
            </div>
          </div>
          <div className="flex shrink-0 gap-2">
            <motion.button
              {...tapHoverSubtle}
              className="rounded-full bg-white/10 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/20"
            >
              View Details
            </motion.button>
            <motion.button
              {...tapHover}
              className="bg-gradient-brand rounded-full px-3.5 py-2 text-xs font-semibold text-white shadow-sm"
            >
              Enquire Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
