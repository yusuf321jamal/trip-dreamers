import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "../../lib/motion";

export default function Reveal({ children, variants = fadeUp, as = "div", ...rest }) {
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp initial="hidden" whileInView="show" viewport={viewportOnce} variants={variants} {...rest}>
      {children}
    </Comp>
  );
}
