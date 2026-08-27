import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { img } from "../data/img";
import { tapHoverSubtle } from "../lib/motion";
import CarouselDots from "./ui/CarouselDots";
import Reveal from "./ui/Reveal";
import RevealItem from "./ui/RevealItem";

const PHOTOS = [
  { id: 1, src: img("1570077188670-e3a8d69ac5ff", 500), alt: "Santorini's whitewashed cliffs at sunset" },
  { id: 2, src: img("1573843981267-be1999ff37cd", 500), alt: "Overwater villas in the Maldives" },
  { id: 3, src: img("1540541338287-41700207dee6", 600), alt: "Aerial view of a Bali resort pool" },
  { id: 4, src: img("1530122037265-a5f1f91d3b99", 500), alt: "A village in the Swiss Alps" },
  { id: 5, src: img("1525625293386-3f8f99389edd", 500), alt: "Marina Bay Sands, Singapore" },
  { id: 6, src: img("1477587458883-47145ed94245", 500), alt: "Hawa Mahal in Jaipur, Rajasthan" },
  { id: 7, src: img("1528127269322-539801943592", 500), alt: "Boats on Halong Bay, Vietnam" },
  { id: 8, src: img("1552465011-b4e21bf6e79a", 500), alt: "Longtail boats on a Thailand beach" },
  { id: 9, src: img("1602216056096-3b40cc0c9944", 500), alt: "Houseboat on the Kerala backwaters" },
];

const ITEM_WIDTH = 224;

export default function PhotoGallery() {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * ITEM_WIDTH * 2, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / (ITEM_WIDTH * 2)));
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal as="h2" className="text-gradient text-center text-3xl font-extrabold sm:text-4xl">
          Pictures Perfect Moments
        </Reveal>
        <p className="mt-3 text-center text-base text-ink-600">
          A few frames from the trips our travelers keep going back to.
        </p>

        <div className="relative mt-12">
          <motion.button
            {...tapHoverSubtle}
            onClick={() => scrollBy(-1)}
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-900 shadow-card-hover sm:flex"
            aria-label="Scroll gallery left"
          >
            <ChevronLeft size={18} />
          </motion.button>

          <div
            ref={scrollerRef}
            onScroll={onScroll}
            className="scrollbar-none flex items-center gap-4 overflow-x-auto px-1 pb-6 sm:px-10"
          >
            {PHOTOS.map((photo, i) => (
              <RevealItem
                key={photo.id}
                index={i}
                step={0.05}
                amount={0.01}
                className={`shrink-0 overflow-hidden rounded-2xl shadow-card transition-shadow duration-300 hover:shadow-card-hover ${
                  i % 3 === 1 ? "h-72 w-56 sm:h-80 sm:w-64" : "h-52 w-40 sm:h-60 sm:w-48"
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </RevealItem>
            ))}
          </div>

          <motion.button
            {...tapHoverSubtle}
            onClick={() => scrollBy(1)}
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-white text-ink-900 shadow-card-hover sm:flex"
            aria-label="Scroll gallery right"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>

        <CarouselDots count={Math.ceil(PHOTOS.length / 2)} active={active} />
      </div>
    </section>
  );
}
