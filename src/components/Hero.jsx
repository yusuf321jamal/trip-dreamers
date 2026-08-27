import { useState } from "react";
import { Search } from "lucide-react";
import { img } from "../data/img";

const QUICK_ACTIONS = ["Group Tours", "Fixed Departures"];

export default function Hero() {
  const [query, setQuery] = useState("");

  return (
    <section id="top" className="relative overflow-hidden bg-ink-900">
      <img
        src={img("1529333166437-7750a6dd5a70", 1920, 70)}
        alt="Friends celebrating together outdoors at sunset"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-ink-900/55" />
      <div className="absolute inset-0 bg-linear-to-t from-ink-900/70 via-transparent to-ink-900/30" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <h1 className="animate-fade-up text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Discover Your Dream Vacation with Trip Dreamers
        </h1>
        <p
          className="font-script animate-fade-up mt-2 text-3xl text-white sm:text-4xl"
          style={{ animationDelay: "0.08s" }}
        >
          Get Ready for Take Off
        </p>
        <p
          className="text-gradient animate-fade-up mt-4 text-2xl font-extrabold sm:text-3xl"
          style={{ animationDelay: "0.16s" }}
        >
          Search your destination
        </p>

        <div
          className="animate-fade-up mt-7 w-full max-w-xl"
          style={{ animationDelay: "0.24s" }}
        >
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
            <button
              type="submit"
              aria-label="Search"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-900 text-white transition-transform hover:scale-105"
            >
              <Search size={18} />
            </button>
          </form>

          <div
            className="animate-fade-up mt-5 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "0.32s" }}
          >
            {QUICK_ACTIONS.map((label) => (
              <a
                key={label}
                href="#enquiry"
                className="bg-gradient-brand rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-card transition-transform hover:scale-105"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
