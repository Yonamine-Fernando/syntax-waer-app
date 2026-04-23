import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

interface SocialLinksPorp {
  href: string;
  Icon: IconType;
  name: string;
}

const socialLink = [
  { href: "#", Icon: FaInstagram, name: "Instagram" },
  { href: "#", Icon: FaFacebookF, name: "Facebook" },
  { href: "#", Icon: FaTiktok, name: "TikTok" },
  { href: "#", Icon: FaWhatsapp, name: "Whatsapp" },
];

export const SocialLinks = () => {
  return (
    <div className="mb-4">
      <p className="mb-4 text-xl font-medium text-surface-alt">Redes Sociais</p>

      <ul className="flex gap-5">
        {socialLink.map(({ href, Icon, name }: SocialLinksPorp) => (
          <li key={name}>
            <a href={href} aria-label={name}>
              <Icon className="border-2 rounded-2xl size-8 p-1 hover:text-[#cccccc]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
