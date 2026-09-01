import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fixedDepartures } from "../data/fixedDepartures";
import { tapHoverSubtle } from "../lib/motion";
import CarouselDots from "./ui/CarouselDots";
import FixedDepartureCard from "./ui/FixedDepartureCard";
import Reveal from "./ui/Reveal";

export default function FixedDepartures() {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);

  const getStep = () => {
    const el = scrollerRef.current;
    const card = el?.children[0];
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0");
    return card.getBoundingClientRect().width + gap;
  };

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * getStep(), behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    const step = getStep();
    if (!el || !step) return;
    setActive(Math.round(el.scrollLeft / step));
  };

  return (
    <section className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="text-gradient text-3xl font-extrabold sm:text-4xl">Our Packages</h2>
          <span className="bg-gradient-brand mt-3 rounded-full px-5 py-1.5 text-sm font-semibold text-white">
            Guaranteed Dates
          </span>
          <p className="mt-4 max-w-2xl text-base text-ink-600">
            Set departure dates, transparent pricing — the plane icon marks packages with
            flights included.
          </p>
        </Reveal>

        <div className="relative mt-8">
          <motion.button
            {...tapHoverSubtle}
            onClick={() => scrollBy(-1)}
            className="absolute left-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-900 shadow-card-hover sm:flex"
            aria-label="Scroll fixed departures left"
          >
            <ChevronLeft size={18} />
          </motion.button>
          <div
            ref={scrollerRef}
            onScroll={onScroll}
            className="scrollbar-none flex gap-5 overflow-x-auto px-1 pb-2 sm:px-14"
          >
            {fixedDepartures.map((pkg, i) => (
              <FixedDepartureCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <motion.button
            {...tapHoverSubtle}
            onClick={() => scrollBy(1)}
            className="absolute right-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-900 shadow-card-hover sm:flex"
            aria-label="Scroll fixed departures right"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>

        <CarouselDots
          count={fixedDepartures.length}
          active={Math.min(active, fixedDepartures.length - 1)}
        />
      </div>
    </section>
  );
}
