import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";
import { useRevealOnce } from "../../lib/useRevealOnce";

export default function Reveal({ children, variants = fadeUp, as = "div", ...rest }) {
  const Comp = motion[as] ?? motion.div;
  const [ref, visible] = useRevealOnce();
  return (
    <Comp ref={ref} initial="hidden" animate={visible ? "show" : "hidden"} variants={variants} {...rest}>
      {children}
    </Comp>
  );
}
