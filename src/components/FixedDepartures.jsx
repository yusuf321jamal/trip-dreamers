import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { withFlights, withoutFlights } from "../data/fixedDepartures";
import CarouselDots from "./ui/CarouselDots";
import FixedDepartureCard from "./ui/FixedDepartureCard";

function DepartureRow({ title, items, withFlight }) {
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
    <div className="mt-14 first:mt-0">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-gradient text-2xl font-extrabold sm:text-3xl">{title}</h3>
        <span className="bg-gradient-brand mt-3 rounded-full px-5 py-1.5 text-sm font-semibold text-white">
          Fixed Departures
        </span>
      </div>

      <div className="relative mt-8">
        <button
          onClick={() => scrollBy(-1)}
          className="absolute left-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-900 shadow-card-hover sm:flex"
          aria-label={`Scroll ${title} left`}
        >
          <ChevronLeft size={18} />
        </button>
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="scrollbar-none flex gap-5 overflow-x-auto px-1 pb-2 sm:px-14"
        >
          {items.map((pkg) => (
            <FixedDepartureCard key={pkg.id} pkg={pkg} withFlight={withFlight} />
          ))}
        </div>
        <button
          onClick={() => scrollBy(1)}
          className="absolute right-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-900 shadow-card-hover sm:flex"
          aria-label={`Scroll ${title} right`}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <CarouselDots count={items.length} active={Math.min(active, items.length - 1)} />
    </div>
  );
}

export default function FixedDepartures() {
  return (
    <section className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <DepartureRow title="With Flights" items={withFlights} withFlight />
        <DepartureRow title="Without Flights" items={withoutFlights} withFlight={false} />
      </div>
    </section>
  );
}
