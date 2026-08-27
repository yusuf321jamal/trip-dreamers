import { useState } from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { img } from "../data/img";
import { imageReveal, staggerContainer, staggerItem, tapHover } from "../lib/motion";

const QUICK_ACTIONS = ["Group Tours", "Fixed Departures"];

export default function Hero() {
  const [query, setQuery] = useState("");

  return (
    <section id="top" className="relative overflow-hidden bg-ink-900">
      <motion.img
        initial="hidden"
        animate="show"
        variants={imageReveal}
        src={img("1529333166437-7750a6dd5a70", 1920, 70)}
        alt="Friends celebrating together outdoors at sunset"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-ink-900/55" />
      <div className="absolute inset-0 bg-linear-to-t from-ink-900/70 via-transparent to-ink-900/30" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.1)}
        className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-32"
      >
        <motion.h1
          variants={staggerItem}
          className="text-4xl font-extrabold leading-tight text-white sm:text-5xl"
        >
          Discover Your Dream Vacation with{" "}
          <span className="text-gradient">Trip Dreamers Holidays</span>
        </motion.h1>
        <motion.p
          variants={staggerItem}
          className="font-script mt-2 text-3xl text-white sm:text-4xl"
        >
          Get Ready for Take Off
        </motion.p>
        <motion.p
          variants={staggerItem}
          className="text-gradient mt-4 text-2xl font-extrabold sm:text-3xl"
        >
          Search your destination
        </motion.p>

        <motion.div variants={staggerItem} className="mt-7 w-full max-w-xl">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-gradient-brand flex items-center gap-2 rounded-full p-1.5 shadow-card-hover"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Kashmir, Bali, Dubai..."
              className="w-full rounded-full bg-white/95 px-5 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
            />
            <motion.button
              {...tapHover}
              type="submit"
              aria-label="Search"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-900 text-white"
            >
              <Search size={18} />
            </motion.button>
          </form>

          <motion.div
            variants={staggerContainer(0.08)}
            className="mt-5 flex flex-wrap items-center justify-center gap-3"
          >
            {QUICK_ACTIONS.map((label) => (
              <motion.a
                key={label}
                variants={staggerItem}
                {...tapHover}
                href="#enquiry"
                className="bg-gradient-brand rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-card"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
