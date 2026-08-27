import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { popularDestinations } from "../data/destinations";
import CarouselDots from "./ui/CarouselDots";
import DestinationCard from "./ui/DestinationCard";
import SectionHeading from "./ui/SectionHeading";

export default function PopularDestinations() {
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
        <SectionHeading
          script="Handpicked for you"
          title="Popular Destinations"
          description="The most-loved escapes booked by Trip Dreamers travelers this season — from tropical islands to Himalayan hideaways."
          align="center"
        />
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => scrollBy(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink-900/10 bg-white text-ink-900 shadow-card transition-colors hover:text-brand-blue"
            aria-label="Scroll left"
          >
            <ChevronLeft size={19} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink-900/10 bg-white text-ink-900 shadow-card transition-colors hover:text-brand-blue"
            aria-label="Scroll right"
          >
            <ChevronRight size={19} />
          </button>
        </div>

        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {popularDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
        <CarouselDots
          count={popularDestinations.length}
          active={Math.min(active, popularDestinations.length - 1)}
        />
      </div>
    </section>
  );
}
