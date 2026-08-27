import { useState } from "react";
import { CalendarDays, MapPin, PhoneCall, User, Users2 } from "lucide-react";
import { img } from "../data/img";

export default function CallToAction() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl shadow-card">
          <img
            src={img("1521295121783-8a321d551ad2", 900, 65)}
            alt="Travelers enjoying a scenic overlook"
            className="h-80 w-full object-cover lg:h-105"
          />
        </div>

        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl">
            Ready For Your Next Adventure?
          </h2>
          <p className="mt-1 text-lg font-semibold text-brand-blue">Allow Us to Call You Back!</p>

          {submitted ? (
            <div className="mt-8 flex flex-col items-start rounded-2xl bg-mint-50 p-6">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-blue">
                <PhoneCall size={22} />
              </span>
              <h3 className="font-display text-lg font-bold text-ink-900">
                Thanks! We've got your details.
              </h3>
              <p className="mt-1 text-sm text-ink-600">
                A Trip Dreamers travel consultant will call you back shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field icon={User} label="Name" name="name" placeholder="e.g. John Smith" required />
              <Field
                icon={PhoneCall}
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Enter your 10 digit number"
                required
              />
              <Field icon={CalendarDays} label="Start Date" name="date" type="date" required />
              <Field
                icon={MapPin}
                label="Destination"
                name="destination"
                placeholder="Where to?"
                required
              />
              <Field
                icon={CalendarDays}
                label="Days"
                name="days"
                type="number"
                min="1"
                placeholder="Duration"
                required
              />
              <Field
                icon={Users2}
                label="Adults"
                name="adults"
                type="number"
                min="1"
                placeholder="Adults count"
                required
              />

              <button
                type="submit"
                className="bg-gradient-brand col-span-full mt-1 rounded-xl py-3.5 text-sm font-bold text-white shadow-card transition-transform hover:scale-[1.01]"
              >
                Plan My Trip
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ icon: Icon, label, required, ...props }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-ink-800">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <div className="flex items-center gap-2 rounded-xl border border-ink-900/15 px-3.5 py-2.5 focus-within:border-brand-cyan">
        <Icon size={16} className="shrink-0 text-ink-400" />
        <input
          {...props}
          className="w-full bg-transparent text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
        />
      </div>
    </label>
  );
}
