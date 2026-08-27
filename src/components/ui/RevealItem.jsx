import { motion } from "motion/react";
import { easeOut } from "../../lib/motion";
import { useRevealOnce } from "../../lib/useRevealOnce";

export default function RevealItem({
  children,
  index = 0,
  step = 0.08,
  as = "div",
  hoverY = 0,
  ...rest
}) {
  const Comp = motion[as] ?? motion.div;
  const [ref, visible] = useRevealOnce();
  return (
    <Comp
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: easeOut, delay: index * step }}
      whileHover={hoverY ? { y: hoverY, transition: { duration: 0.25, ease: easeOut } } : undefined}
      {...rest}
    >
      {children}
    </Comp>
  );
}
