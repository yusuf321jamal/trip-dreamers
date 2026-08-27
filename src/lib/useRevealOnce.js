import { useEffect, useRef, useState } from "react";

/**
 * Like Motion's `whileInView`, but also does a synchronous
 * getBoundingClientRect() check on mount. This avoids a real bug where
 * whileInView's IntersectionObserver can miss an element that is
 * already on screen at mount time (e.g. reloading the page while
 * scrolled down, where the browser restores scroll position before
 * the observer has a chance to attach) — leaving content stuck at
 * opacity: 0 forever since `once: true` never re-checks.
 */
export function useRevealOnce(amount = 0.2, externalRef = null) {
  const ownRef = useRef(null);
  const ref = externalRef || ownRef;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    const ratio = rect.height > 0 ? visibleHeight / rect.height : 0;
    if (ratio >= amount) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: amount }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [amount, visible]);

  return [ref, visible];
}
