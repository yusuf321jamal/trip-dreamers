import DestinationTile from "./ui/DestinationTile";

export default function DestinationGrid({ id, icon, script, title, description, places }) {
  return (
    <section id={id} className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{icon}</span>
            <h2 className="text-gradient text-3xl font-extrabold sm:text-4xl">{title}</h2>
            <span className="text-2xl">{icon}</span>
          </div>
          <span className="font-script mt-1 text-2xl text-brand-blue sm:text-3xl">{script}</span>
          <p className="mt-4 max-w-2xl text-base text-ink-600">{description}</p>
          <span className="bg-gradient-brand mt-4 h-1 w-16 rounded-full" />
        </div>

        <div className="mt-11 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {places.map((place) => (
            <DestinationTile key={place.id} place={place} />
          ))}
        </div>
      </div>
    </section>
  );
}
