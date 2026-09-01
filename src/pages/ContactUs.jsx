import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mail, MapPin, MessageSquare, Phone, Send, Tag, User } from "lucide-react";
import { contactInfo } from "../data/contact";
import { tapHover } from "../lib/motion";
import Reveal from "../components/ui/Reveal";
import RevealItem from "../components/ui/RevealItem";
import SocialIcon from "../components/ui/SocialIcon";

const SOCIALS = [
  { icon: "instagram", label: "Instagram", bg: "bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600" },
  { icon: "twitter", label: "Twitter", bg: "bg-ink-900" },
  { icon: "facebook", label: "Facebook", bg: "bg-blue-600" },
  { icon: "linkedin", label: "LinkedIn", bg: "bg-sky-700" },
  { icon: "youtube", label: "YouTube", bg: "bg-red-600" },
];

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <section className="bg-sky-50 py-14 sm:py-16">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <h1 className="text-gradient text-3xl font-extrabold sm:text-4xl">We're Here to Help</h1>
          <p className="mt-3 text-base text-ink-600">
            Have a question about a package, a booking or just planning your next trip? Reach out and our team
            will get back to you.
          </p>
        </Reveal>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-5 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-6 shadow-card sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-start rounded-2xl bg-mint-50 p-6"
                  >
                    <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-blue">
                      <Send size={20} />
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink-900">
                      Thanks! We've got your message.
                    </h3>
                    <p className="mt-1 text-sm text-ink-600">
                      A Trip Dreamers travel consultant will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                  >
                    <Field icon={User} label="Full Name" name="name" placeholder="Enter your full name" required />
                    <Field
                      icon={Mail}
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                    />
                    <Field
                      icon={Phone}
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                    />
                    <Field icon={Tag} label="Subject" name="subject" placeholder="What is this regarding?" required />
                    <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                      <span className="font-medium text-ink-800">
                        Message <span className="text-red-500">*</span>
                      </span>
                      <div className="flex items-start gap-2 rounded-xl border border-ink-900/15 px-3.5 py-2.5 focus-within:border-brand-cyan">
                        <MessageSquare size={16} className="mt-0.5 shrink-0 text-ink-400" />
                        <textarea
                          name="message"
                          rows={5}
                          required
                          placeholder="Tell us more about your inquiry..."
                          className="w-full resize-none bg-transparent text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
                        />
                      </div>
                    </label>

                    <motion.button
                      {...tapHover}
                      type="submit"
                      className="bg-gradient-brand mt-1 rounded-xl py-3.5 text-sm font-bold text-white shadow-card sm:col-span-2"
                    >
                      Send Message
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <RevealItem className="rounded-3xl bg-sky-50 p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-ink-900">Get in Touch</h3>
              <div className="mt-5 flex flex-col gap-4 text-sm">
                <a href={contactInfo.phoneHref} className="flex items-start gap-3 text-ink-700 transition-colors hover:text-brand-blue">
                  <span className="bg-gradient-brand flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white">
                    <Phone size={15} />
                  </span>
                  {contactInfo.phoneDisplay}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-ink-700 transition-colors hover:text-brand-blue"
                >
                  <span className="bg-gradient-brand flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white">
                    <Mail size={15} />
                  </span>
                  {contactInfo.email}
                </a>
                <span className="flex items-start gap-3 text-ink-700">
                  <span className="bg-gradient-brand flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white">
                    <MapPin size={15} />
                  </span>
                  <span className="flex flex-col">
                    {contactInfo.addressLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </span>
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-ink-900/10 pt-6">
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
            </RevealItem>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex flex-col items-center text-center">
            <h2 className="text-gradient text-2xl font-extrabold sm:text-3xl">Find Us Here</h2>
            <p className="mt-2 max-w-xl text-sm text-ink-600">{contactInfo.addressFull}</p>
            <a
              href={contactInfo.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm font-semibold text-brand-blue underline underline-offset-2 hover:text-brand-cyan"
            >
              Get Directions on Google Maps
            </a>
          </Reveal>
          <Reveal className="mt-8 overflow-hidden rounded-3xl shadow-card">
            <iframe
              title="Trip Dreamers Holidays location"
              src={contactInfo.mapEmbedSrc}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </Reveal>
        </div>
      </section>
    </div>
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
