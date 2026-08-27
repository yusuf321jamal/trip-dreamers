import { motion } from "motion/react";
import { easeOut } from "../../lib/motion";
import { useRevealOnce } from "../../lib/useRevealOnce";

export default function DestinationTile({ place, index = 0 }) {
  const [ref, visible] = useRevealOnce();

  return (
    <motion.a
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease: easeOut, delay: index * 0.04 }}
      href="#enquiry"
      className="group relative flex h-44 flex-col justify-end overflow-hidden rounded-xl shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:h-52"
    >
      <img
        src={place.image}
        alt={`${place.name} travel destination`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink-900/90 via-ink-900/15 to-transparent transition-colors group-hover:from-ink-900/95" />
      <div className="bg-gradient-brand absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      <span className="relative p-4 font-display text-base font-bold text-white sm:text-lg">
        {place.name}
      </span>
    </motion.a>
  );
}
