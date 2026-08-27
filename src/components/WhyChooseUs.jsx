import { motion } from "motion/react";
import { Settings2, ShieldCheck, ThumbsUp, Users } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "../lib/motion";
import HexIcon from "./ui/HexIcon";
import Reveal from "./ui/Reveal";

const REASONS = [
  {
    icon: Settings2,
    title: "No Third-Party Mess",
    description:
      "We handle everything in-house for all our trips, ensuring full transparency and efficiency. With no third parties involved, you can trust us for genuine service and no hidden surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency & Pricing",
    description:
      "The price you see is the price you pay. We share real-time updates on your itinerary so you always know exactly what you're booking and paying for.",
  },
  {
    icon: Users,
    title: "Verified Co-Travelers",
    description:
      "Enjoy your journey with like-minded travelers. Our group screening process means you're traveling with people who share similar vibes, making trips more enjoyable.",
  },
  {
    icon: ThumbsUp,
    title: "Hassle-Free Experience",
    description:
      "From comfortable stays to trained drivers and friendly trip leaders, we focus on providing a seamless experience so you can focus on creating memories.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal as="h2" className="text-center text-3xl font-extrabold text-ink-900 sm:text-4xl">
          WHY <span className="border-b-4 border-brand-cyan">WE ARE THE BEST</span>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-ink-900/10"
        >
          {REASONS.map((reason) => (
            <motion.div
              key={reason.title}
              variants={staggerItem}
              className="flex flex-col items-center px-2 text-center lg:px-6"
            >
              <HexIcon icon={reason.icon} />
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
