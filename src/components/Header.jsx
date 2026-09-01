import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";
import logo from "../assets/brand/logo.png";
import { contactInfo } from "../data/contact";
import { navMenus } from "../data/navMenus";
import { tapHoverSubtle } from "../lib/motion";

const UTILITY_LINKS = [
  { label: "Why Trip Dreamers", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact Us", href: "/contact" },
];

function UtilityLink({ link, className, onClick }) {
  if (link.href.startsWith("/")) {
    return (
      <Link to={link.href} onClick={onClick} className={className}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} onClick={onClick} className={className}>
      {link.label}
    </a>
  );
}

const dropdownMotion = {
  initial: { opacity: 0, y: -6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  useEffect(() => {
    if (!menuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b border-ink-900/5 bg-white"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3.5">
        <Link to="/" className="flex shrink-0 items-center">
          <img src={logo} alt="Trip Dreamers Holidays" className="h-11 w-auto object-contain sm:h-12" />
        </Link>

        <div className="hidden max-w-md flex-1 items-center gap-2 rounded-full border border-ink-900/10 bg-sky-50 px-4 py-2.5 md:flex">
          <Search size={16} className="shrink-0 text-ink-400" />
          <input
            type="text"
            placeholder="Discover your next adventure..."
            className="w-full bg-transparent text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
          />
        </div>

        <nav className="ml-auto hidden items-center gap-6 lg:flex">
          {UTILITY_LINKS.map((link) => (
            <UtilityLink
              key={link.label}
              link={link}
              className="text-sm font-semibold text-ink-700 transition-colors hover:text-brand-blue"
            />
          ))}
        </nav>

        <motion.a
          {...tapHoverSubtle}
          href={contactInfo.phoneHref}
          className="hidden shrink-0 items-center gap-1.5 rounded-full border border-brand-cyan/40 bg-mint-50 px-4 py-2 text-sm font-semibold text-ink-800 transition-colors hover:bg-mint-100 sm:flex"
        >
          <Phone size={14} className="text-brand-blue" />
          {contactInfo.phoneDisplay}
        </motion.a>

        <motion.button
          {...tapHoverSubtle}
          className="ml-auto grid h-10 w-10 place-items-center rounded-full text-ink-900 lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <div className="hidden border-t border-ink-900/5 lg:block">
        <nav className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6 py-2.5">
          {navMenus.map((menu) => (
            <div
              key={menu.key}
              className="relative"
              onMouseEnter={() => setOpenDesktopMenu(menu.key)}
              onMouseLeave={() => setOpenDesktopMenu(null)}
            >
              <a
                href={menu.href}
                className="flex items-center gap-1 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-cyan"
              >
                {menu.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${openDesktopMenu === menu.key ? "rotate-180" : ""}`}
                />
              </a>

              <AnimatePresence>
                {openDesktopMenu === menu.key && (
                  <motion.div {...dropdownMotion} className="absolute left-0 top-full z-20 pt-3">
                    <div className="flex gap-10 rounded-xl bg-white p-6 shadow-card-hover ring-1 ring-ink-900/5">
                      {menu.columns.map((col) => (
                        <div key={col.heading}>
                          <p className="mb-3 whitespace-nowrap text-xs font-bold uppercase tracking-wider text-brand-cyan">
                            {col.heading}
                          </p>
                          <ul className="flex flex-col gap-3">
                            {col.items.map((item) => (
                              <li key={item}>
                                <a
                                  href={menu.href}
                                  className="whitespace-nowrap text-sm text-ink-700 transition-colors hover:text-brand-blue"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-ink-900/50 lg:hidden"
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm overflow-y-auto bg-white px-6 py-5 shadow-card-hover lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-ink-900/10 pb-4">
                <img src={logo} alt="Trip Dreamers Holidays" className="h-9 w-auto object-contain" />
                <motion.button
                  {...tapHoverSubtle}
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-ink-900"
                >
                  <X size={22} />
                </motion.button>
              </div>
            <nav className="flex flex-col gap-1 pt-4">
              {navMenus.map((menu) => (
                <div key={menu.key} className="border-b border-ink-900/5 py-2">
                  <button
                    className="flex w-full items-center justify-between text-sm font-semibold text-ink-800"
                    onClick={() =>
                      setOpenMobileMenu((v) => (v === menu.key ? null : menu.key))
                    }
                  >
                    {menu.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${openMobileMenu === menu.key ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMobileMenu === menu.key && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="mt-3 flex flex-col gap-4 pl-2"
                      >
                        {menu.columns.map((col) => (
                          <div key={col.heading}>
                            <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-brand-cyan">
                              {col.heading}
                            </p>
                            <ul className="flex flex-col gap-2">
                              {col.items.map((item) => (
                                <li key={item}>
                                  <a
                                    href={menu.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm text-ink-700"
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              {UTILITY_LINKS.map((link) => (
                <UtilityLink
                  key={link.label}
                  link={link}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-ink-900/5 py-3 text-sm font-semibold text-ink-800 hover:text-brand-blue"
                />
              ))}
              <a
                href={contactInfo.phoneHref}
                className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-brand-blue"
              >
                <Phone size={14} />
                {contactInfo.phoneDisplay}
              </a>
            </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
