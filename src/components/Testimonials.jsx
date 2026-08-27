import { motion } from "motion/react";
import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { staggerContainer, staggerItem, tapHover, viewportOnce } from "../lib/motion";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          plain
          title="What Our Travelers Say"
          description="Real experiences from our happy travelers."
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.slice(0, 3).map((t) => (
            <motion.figure
              key={t.id}
              variants={staggerItem}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <img
                src={t.photo}
                alt={`${t.name}'s ${t.trip}`}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <figcaption className="font-display text-base font-bold text-ink-900">
                    {t.name}
                  </figcaption>
                  <span className="flex items-center gap-1 text-sm font-bold text-emerald-600">
                    {t.rating}
                    <Star size={15} className="fill-emerald-600 text-emerald-600" />
                  </span>
                </div>
                <p className="mt-1 text-xs text-ink-600">Booked: {t.trip}</p>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                  {t.quote}
                </blockquote>
                <p className="mt-4 border-t border-ink-900/10 pt-3 text-xs text-ink-400">
                  {t.date}
                </p>
              </div>
            </motion.figure>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <motion.a
            {...tapHover}
            href="#testimonials"
            className="bg-gradient-brand rounded-full px-7 py-3 text-sm font-semibold text-white shadow-card"
          >
            View All Reviews
          </motion.a>
        </div>
      </div>
    </section>
  );
}
