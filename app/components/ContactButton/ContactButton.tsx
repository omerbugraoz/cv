import { getContactIcon } from "@/util/getContactIcon";
import { IContactButton } from "./ContactButton.type";
import { Button } from "@/components/ui/button";

const ContactButton: React.FC<IContactButton> = ({ name, href }) => {
  const Icon = getContactIcon(name);
  return (
    <Button asChild variant="outline" size="icon">
      <a
        href={href}
        className="contact-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        {Icon && <Icon className="icon" />}
      </a>
    </Button>
  );
};

export default ContactButton;
