import whatsappLogo from "@/Image/whatsapp.png";

export default function ThemeToggle() {
  return (
    <a
      href="https://wa.me/5519981640280"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        hover:scale-110
        transition-transform
        duration-300
      "
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="w-14 h-14"
      />
    </a>
  );
}