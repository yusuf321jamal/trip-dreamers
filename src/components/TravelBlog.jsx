import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blog";
import { tapHover } from "../lib/motion";
import Reveal from "./ui/Reveal";
import RevealItem from "./ui/RevealItem";

export default function TravelBlog() {
  return (
    <section id="blog" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="bg-gradient-brand flex flex-col items-start gap-5 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Explore Our Travel Blog
            </h2>
            <p className="mt-1.5 max-w-md text-sm text-white/90 sm:text-base">
              Discover travel tips, destination guides, and insider insights from our expert
              travelers.
            </p>
          </div>
          <motion.a
            {...tapHover}
            href="#blog"
            className="flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-blue"
          >
            Read Our Blog
            <ArrowRight size={16} />
          </motion.a>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <RevealItem
              key={post.id}
              as="article"
              index={i}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3 text-xs font-medium text-ink-600">
                  <span className="rounded-full bg-mint-100 px-2.5 py-1 font-semibold text-brand-blue">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-display text-lg font-bold leading-snug text-ink-900">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-ink-900/10 pt-4">
                  <span className="text-xs text-ink-400">{post.date}</span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-brand-blue">
                    Read more
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
