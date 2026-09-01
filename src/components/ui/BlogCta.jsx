import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { tapHover } from "../../lib/motion";
import Reveal from "./Reveal";

export default function BlogCta() {
  return (
    <Reveal className="bg-gradient-brand flex flex-col items-start gap-5 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
      <div>
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Explore Our Travel Blog</h2>
        <p className="mt-1.5 max-w-md text-sm text-white/90 sm:text-base">
          Discover travel tips, destination guides, and insider insights from our expert travelers.
        </p>
      </div>
      <motion.a
        {...tapHover}
        href="#blog"
        className="flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-blue"
      >
        Read Our Blog
        <ArrowRight size={16} />
      </motion.a>
    </Reveal>
  );
}
