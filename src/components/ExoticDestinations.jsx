import { motion } from "motion/react";
import { exoticDestinations } from "../data/exoticDestinations";
import { slideInLeft, slideInRight, tapHover } from "../lib/motion";
import Reveal from "./ui/Reveal";
import RotatingImage from "./ui/RotatingImage";

export default function ExoticDestinations() {
  return (
    <section className="scroll-mt-24 bg-sky-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col items-center text-center">
          <span className="font-script text-2xl text-brand-blue sm:text-3xl">
            Explore the World
          </span>
          <h2 className="text-gradient text-3xl font-extrabold sm:text-4xl">
            Discover Exotic Destinations
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink-600">
            From alpine adventures to island escapes — we offer unforgettable experiences in
            destinations worldwide.
          </p>
          <span className="bg-gradient-brand mt-4 h-1 w-16 rounded-full" />
        </Reveal>

        <div className="mt-14 flex flex-col gap-16">
          {exoticDestinations.map((dest, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={dest.id}
                className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-14 ${
                  reversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                <Reveal
                  variants={reversed ? slideInRight : slideInLeft}
                  className="w-full flex-1"
                >
                  <h3 className="text-3xl font-extrabold text-ink-900">{dest.name}</h3>
                  <p className="mt-3 max-w-md text-ink-600">{dest.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {dest.cities.map((city) => (
                      <span
                        key={city}
                        className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-ink-800 shadow-sm"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    {...tapHover}
                    href="#enquiry"
                    className="bg-gradient-brand mt-6 inline-block rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-card"
                  >
                    {dest.cta}
                  </motion.a>
                </Reveal>
                <Reveal
                  variants={reversed ? slideInLeft : slideInRight}
                  className="w-full flex-1 overflow-hidden rounded-3xl shadow-card"
                >
                  <RotatingImage
                    images={dest.images}
                    alt={`${dest.name} travel destination`}
                    className="relative h-72 w-full sm:h-96"
                  />
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
