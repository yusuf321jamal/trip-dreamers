import { MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <a
      href="#enquiry"
      aria-label="Chat with a travel consultant"
      className="bg-whatsapp fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-card-hover transition-transform hover:scale-110"
    >
      <MessageCircle size={26} fill="white" className="text-whatsapp" />
    </a>
  );
}
