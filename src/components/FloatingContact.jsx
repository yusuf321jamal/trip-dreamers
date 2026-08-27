import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href="#enquiry"
      aria-label="Chat with a travel consultant"
      className="bg-whatsapp fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-card-hover"
    >
      <MessageCircle size={26} fill="white" className="text-whatsapp" />
    </motion.a>
  );
}
