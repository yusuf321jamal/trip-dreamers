export default function HexIcon({ icon: Icon }) {
  return (
    <span
      className="bg-gradient-brand-r relative flex h-24 w-24 shrink-0 items-center justify-center text-white"
      style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
    >
      <Icon size={38} strokeWidth={1.6} />
    </span>
  );
}
