export default function CarouselDots({ count, active }) {
  return (
    <div className="mt-5 flex items-center justify-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === active ? "bg-gradient-brand w-6" : "w-2 bg-ink-900/15"
          }`}
        />
      ))}
    </div>
  );
}
