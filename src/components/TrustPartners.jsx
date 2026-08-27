import Reveal from "./ui/Reveal";

const PARTNERS = [
  "IATA",
  "Emirates",
  "Qatar Airways",
  "IndiGo",
  "Etihad Airways",
  "Marriott Bonvoy",
  "Hilton",
  "TripAdvisor",
  "Booking.com",
  "Air India",
];

const LOOP = [...PARTNERS, ...PARTNERS];

export default function TrustPartners() {
  return (
    <section className="overflow-hidden bg-sky-50 py-14">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal as="h2" className="text-xl font-bold text-ink-900 sm:text-2xl">
          <span className="text-gradient">Partnered</span> with the best in the industry
        </Reveal>
      </div>

      <div className="group relative mt-10 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-16 group-hover:[animation-play-state:paused]">
          {LOOP.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 font-display text-2xl font-bold text-ink-400 transition-colors duration-300 hover:text-brand-blue sm:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
