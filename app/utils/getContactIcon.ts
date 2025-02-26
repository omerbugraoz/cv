import {
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiLinkSimpleHorizontalLight,
  PiMailboxLight,
  PiPhoneCallLight,
} from "react-icons/pi";

type IconType = React.ComponentType<React.SVGAttributes<SVGElement>>;

// Map to associate contact names with their corresponding icons
const iconMap: Record<string, IconType> = {
  email: PiMailboxLight,
  phone: PiPhoneCallLight,
  linkedin: PiLinkedinLogoLight,
  github: PiGithubLogoLight,
  website: PiLinkSimpleHorizontalLight,
};

// Function to get icon component based on contact name
export const getContactIcon = (contactName: string): IconType => {
  return iconMap[contactName] || null;
};
