import { Compass } from "lucide-react";
import arcDeTriomphe from "../assets/landmarks/arc-de-triomphe.png";
import baliTemple from "../assets/landmarks/bali-temple.png";
import colosseum from "../assets/landmarks/colosseum.png";
import eiffelTower from "../assets/landmarks/eiffel-tower.png";
import venicePoles from "../assets/landmarks/venice-poles.png";
import { fadeIn } from "../lib/motion";
import Reveal from "./ui/Reveal";
import SocialIcon from "./ui/SocialIcon";

const QUICK_LINKS = [
  "Home",
  "About Us",
  "Destination Packages",
  "Trending Packages",
  "Contact Us",
  "Careers",
  "Terms & Conditions",
  "Reviews",
  "Refund & Cancellation",
  "EMI Calculator",
];

const INTERNATIONAL_TOURS = [
  "Europe Trip",
  "Vietnam Trip",
  "Bali Trip",
  "Dubai Trip",
  "Switzerland Trip",
  "Singapore Trip",
  "Maldives Trip",
  "Sri Lanka Trip",
];

const DOMESTIC_TOURS = ["Kashmir Trip", "Kerala Trip", "Rajasthan Trip", "Manali Trip"];

const SOCIALS = [
  { icon: "instagram", label: "Instagram", bg: "bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600" },
  { icon: "twitter", label: "Twitter", bg: "bg-ink-900" },
  { icon: "facebook", label: "Facebook", bg: "bg-blue-600" },
  { icon: "linkedin", label: "LinkedIn", bg: "bg-sky-700" },
  { icon: "youtube", label: "YouTube", bg: "bg-red-600" },
];

const LANDMARKS = [
  { src: eiffelTower, alt: "Eiffel Tower" },
  { src: baliTemple, alt: "Balinese temple" },
  { src: venicePoles, alt: "Venetian mooring poles" },
  { src: colosseum, alt: "The Colosseum" },
  { src: arcDeTriomphe, alt: "Arc de Triomphe" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/10 bg-white pt-16 text-ink-700">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variants={fadeIn} className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="bg-gradient-brand-r flex h-10 w-10 items-center justify-center rounded-xl text-white">
                <Compass size={20} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-ink-900">Trip Dreamers</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  Holidays
                </span>
              </span>
            </a>
            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-brand-blue">
              Trip Dreamers Holidays Private Limited
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-600">
              Trip Dreamers Holidays is your trusted partner for seamless travel experiences and comprehensive
              holiday planning — since 2014.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ icon, label, bg }) => (
                <a
                  key={label}
                  href="#top"
                  aria-label={label}
                  className={`grid h-9 w-9 place-items-center rounded-full text-white transition-transform hover:scale-110 ${bg}`}
                >
                  <SocialIcon name={icon} size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold text-brand-blue">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {QUICK_LINKS.map((item) => (
                <li key={item}>
                  <a href="#top" className="transition-colors hover:text-brand-blue">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold text-brand-blue">
              Fixed Departures
            </h4>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-900">
              International Tours
            </p>
            <ul className="mb-5 flex flex-col gap-2 border-b border-ink-900/10 pb-5 text-sm">
              {INTERNATIONAL_TOURS.map((item) => (
                <li key={item}>
                  <a href="#international" className="transition-colors hover:text-brand-blue">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-900">
              Domestic Tours
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {DOMESTIC_TOURS.map((item) => (
                <li key={item}>
                  <a href="#india" className="transition-colors hover:text-brand-blue">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-14 flex items-center justify-center gap-2 border-t border-ink-900/10 pt-8 xs:gap-4 sm:gap-8">
          {LANDMARKS.map((landmark) => (
            <img
              key={landmark.alt}
              src={landmark.src}
              alt={landmark.alt}
              loading="lazy"
              className="h-8 w-auto shrink-0 object-contain opacity-80 transition-opacity hover:opacity-100 xs:h-11 sm:h-16"
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-1 py-6 text-center text-xs text-ink-400">
          <p>© 2026 Trip Dreamers Holidays Private Limited. All rights reserved.</p>
          <p>Making travel dreams come true since 2014.</p>
        </div>
      </div>
    </footer>
  );
}
