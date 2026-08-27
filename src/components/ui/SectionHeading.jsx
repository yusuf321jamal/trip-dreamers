import Reveal from "./Reveal";

export default function SectionHeading({
  script,
  title,
  underlineWord,
  plain = false,
  description,
  align = "left",
}) {
  const isCenter = align === "center";
  const words = underlineWord ? title.split(underlineWord) : null;

  return (
    <Reveal
      className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      {script && (
        <span className="font-script text-2xl text-brand-blue sm:text-3xl">{script}</span>
      )}
      <h2
        className={`text-3xl font-extrabold leading-tight sm:text-4xl ${
          plain ? "text-ink-900" : "text-gradient"
        }`}
      >
        {words ? (
          <>
            {words[0]}
            <span className="border-b-4 border-brand-cyan">{underlineWord}</span>
            {words[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base text-ink-600">{description}</p>
      )}
    </Reveal>
  );
}
