import { motion } from "motion/react";
import { Camera, Quote, Target, Ticket, Eye } from "lucide-react";
import founderPhoto from "../assets/founder/sharfaraz-hasan.jpeg";
import BlogCta from "../components/ui/BlogCta";
import { img } from "../data/img";
import Reveal from "../components/ui/Reveal";
import RevealItem from "../components/ui/RevealItem";
import { tapHover } from "../lib/motion";

const CARD_SIZE = "clamp(34px, 9vw, 128px)";

const LEFT_SERVICES = [
  { label: "Visa Assistance", image: img("1581553673739-c4906b5d0de8", 400), offsetRatio: 0 },
  { label: "Air Tickets", image: img("1527605158555-853f200063e9", 400), offsetRatio: 0.4375 },
  { label: "Hotel Stays", image: img("1611892440504-42a792e24d32", 400), offsetRatio: 0.65625 },
];

const RIGHT_SERVICES = [
  { label: "Cruises", image: img("1554254648-2d58a1bc3fd5", 400), offsetRatio: 0.65625 },
  { label: "Transfers", image: img("1555396273-b2d1cd0e3828", 400), offsetRatio: 0.4375 },
  { label: "Holiday Packages", image: img("1620752421368-46c9e04d8820", 400), offsetRatio: 0 },
];

function ServiceCard({ service, index }) {
  return (
    <div
      className="shrink-0"
      style={{ width: CARD_SIZE, marginTop: `calc(${CARD_SIZE} * ${service.offsetRatio})` }}
    >
      <RevealItem index={index} step={0.06} amount={0.01} className="flex flex-col items-center gap-1.5 sm:gap-3">
        <div
          className="w-full overflow-hidden rounded-lg shadow-card sm:rounded-2xl"
          style={{ height: CARD_SIZE }}
        >
          <img
            src={service.image}
            alt={service.label}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-center text-[9px] font-bold leading-tight text-ink-900 sm:text-sm">
          {service.label}
        </p>
      </RevealItem>
    </div>
  );
}

function MobileServiceItem({ service, index }) {
  return (
    <RevealItem index={index} step={0.06} amount={0.01} className="flex flex-col items-center gap-3">
      <div className="h-28 w-28 overflow-hidden rounded-2xl shadow-card xs:h-32 xs:w-32">
        <img
          src={service.image}
          alt={service.label}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <p className="text-center text-sm font-bold text-ink-900">{service.label}</p>
    </RevealItem>
  );
}

export default function AboutUs() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-brand rounded-b-[2.5rem] py-20 sm:py-28">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Turning Travel Dreams Into Reality
          </h1>
          <p className="mt-4 text-base text-white/90 sm:text-lg">
            Handpicked stays, honest pricing, and a team that picks up the phone.
          </p>
          <motion.a
            {...tapHover}
            href="#enquiry"
            className="mt-7 rounded-full bg-white/15 px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur transition-colors hover:bg-white/25"
          >
            Plan My Trip
          </motion.a>
        </Reveal>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
              TRIP DREAMERS <span className="text-gradient">HOLIDAYS</span>
            </h2>
            <span className="bg-gradient-brand mt-3 block h-1 w-16 rounded-full" />
            <p className="mt-5 text-base leading-relaxed text-ink-600">
              Trip Dreamers Holidays started with a simple idea — planning a trip shouldn't feel
              like a second job. We build every itinerary the way we'd want one built for
              ourselves: hotels we've actually vetted, transfers that show up on time, and pricing
              with nothing hidden in the fine print. Whether it's a quick weekend escape or a
              multi-country adventure, our team handles the logistics so you can focus on the part
              that actually matters — showing up and having a good time.
            </p>
          </Reveal>

          <Reveal>
            <h3 className="text-2xl font-extrabold leading-snug text-ink-900 sm:text-3xl">
              Travel Planning That Puts <span className="text-gradient">You First</span>
            </h3>
            <div className="mt-6 flex divide-x divide-ink-900/10 rounded-2xl bg-sky-50 p-6 shadow-card sm:p-8">
              <div className="flex-1 pr-6">
                <p className="text-gradient text-4xl font-extrabold">7+</p>
                <p className="mt-1 text-sm text-ink-600">Years of Experience</p>
              </div>
              <div className="flex-1 pl-6">
                <p className="text-gradient text-4xl font-extrabold">4000+</p>
                <p className="mt-1 text-sm text-ink-600">Happy Customers</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sky-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <RevealItem
              index={0}
              className="rounded-3xl bg-white p-8 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-10"
            >
              <span className="bg-gradient-brand flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-card">
                <Target size={28} strokeWidth={1.6} />
              </span>
              <h3 className="mt-6 text-xl font-extrabold text-ink-900 sm:text-2xl">OUR MISSION</h3>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                Too many travel deals arrive with hidden catches — surprise fees, vague
                itineraries, hotels that don't match the photos. Our mission is to fix that: clear
                pricing from the first quote, itineraries built around what you actually want to
                see, and a team that stays reachable before, during and after your trip.
              </p>
            </RevealItem>

            <RevealItem
              index={1}
              className="rounded-3xl bg-white p-8 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-10"
            >
              <span className="bg-gradient-brand flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-card">
                <Eye size={28} strokeWidth={1.6} />
              </span>
              <h3 className="mt-6 text-xl font-extrabold text-ink-900 sm:text-2xl">OUR VISION</h3>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                We want Trip Dreamers Holidays to be the travel partner people recommend without
                being asked — because the hotel matched what was promised and nothing about the
                trip felt like a gamble. That means vetting every partner we work with and treating
                each itinerary like we're the ones going on it.
              </p>
            </RevealItem>
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-16 sm:py-20">
        {/* Mobile & tablet: heading up top, left/right groups stacked as two columns */}
        <div className="lg:hidden">
          <Reveal className="mx-auto flex max-w-xs flex-col items-center px-6 text-center">
            <span className="font-script text-2xl text-brand-blue">Wonderful Experiences For You</span>
            <h2 className="mt-1 text-3xl font-extrabold text-ink-900">Our Services</h2>
          </Reveal>

          <div className="mx-auto mt-12 flex max-w-md justify-center gap-6 px-6 xs:gap-10">
            <div className="flex flex-1 flex-col items-center gap-10">
              {LEFT_SERVICES.map((service, i) => (
                <MobileServiceItem key={service.label} service={service} index={i} />
              ))}
            </div>
            <div className="flex flex-1 flex-col items-center gap-10">
              {RIGHT_SERVICES.map((service, i) => (
                <MobileServiceItem
                  key={service.label}
                  service={service}
                  index={i + LEFT_SERVICES.length}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: the original arc, unchanged */}
        <div
          className="mx-auto hidden max-w-6xl items-start justify-center px-3 lg:flex"
          style={{ gap: "clamp(3px, 1vw, 32px)" }}
        >
          {LEFT_SERVICES.map((service, i) => (
            <ServiceCard key={service.label} service={service} index={i} />
          ))}

          <Reveal
            as="div"
            className="relative flex shrink-0 flex-col items-center pt-2 text-center sm:pt-4"
            style={{ width: "clamp(92px, 24vw, 240px)" }}
          >
            <Camera
              size={28}
              strokeWidth={1.5}
              className="absolute -top-6 left-0 -rotate-12 text-brand-cyan/50 sm:-top-9"
            />
            <Ticket
              size={28}
              strokeWidth={1.5}
              className="absolute -top-6 right-0 rotate-12 text-gold-500/60 sm:-top-9"
            />
            <span
              className="font-script text-brand-blue"
              style={{ fontSize: "clamp(0.7rem, 3.2vw, 1.5rem)" }}
            >
              Wonderful Experiences For You
            </span>
            <h2
              className="mt-1 font-extrabold text-ink-900"
              style={{ fontSize: "clamp(0.85rem, 4.2vw, 1.875rem)" }}
            >
              Our Services
            </h2>
          </Reveal>

          {RIGHT_SERVICES.map((service, i) => (
            <ServiceCard key={service.label} service={service} index={i + LEFT_SERVICES.length} />
          ))}
        </div>
      </section>

      <section className="bg-sky-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">OUR FOUNDER</h2>
            <span className="bg-gradient-brand mt-3 block h-1 w-16 rounded-full" />
          </Reveal>

          <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal className="overflow-hidden rounded-3xl shadow-card">
              <img
                src={founderPhoto}
                alt="Mr. Sharfaraz Hasan, Founder of Trip Dreamers Holidays"
                className="h-152 w-full object-cover object-top"
              />
            </Reveal>

            <Reveal className="rounded-3xl bg-white p-8 shadow-card sm:p-10">
              <Quote size={32} className="text-brand-cyan" />
              <p className="mt-4 text-base italic leading-relaxed text-ink-700">
                At Trip Dreamers, we don't think a trip is just about checking places off a list.
                It's about the road you take, the people you meet, the food you try, the
                unexpected moments, and the stories you bring back home. Whether it's a weekend
                escape or a journey across the world, we're here to make every trip feel special
                and worth remembering. You dream of the destination — we'll help you make the
                journey happen.
              </p>
              <div className="mt-6 border-t border-ink-900/10 pt-5">
                <p className="font-display text-lg font-bold text-ink-900">Mr. Sharfaraz Hasan</p>
                <p className="text-sm text-ink-600">Founder & CEO, Trip Dreamers Holidays</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <BlogCta />
        </div>
      </section>
    </div>
  );
}
