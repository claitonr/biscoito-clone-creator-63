import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 ease-elegant hover:bg-hover hover:scale-110 focus-visible:bg-hover focus-visible:scale-110"
      aria-label={label}
    >
      <Icon className="w-6 h-6 transition-colors duration-200 ease-elegant group-hover:text-hover-foreground" />
    </a>
  );
};

export default SocialLink;