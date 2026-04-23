import { Copyright } from "../Copyright";
import { MenuItems } from "../MenuItems";
import { SocialLinks } from "../SociaLinks";
import { SubscritionForm } from "../SubscriptionForm";

export const Footer = () => {
  return (
    <footer className="bg-footer-bg">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between px-3 md:p-10 gap-2 ">
          <div className="flex flex-col gap-8 min-w-86">
            <SubscritionForm />
            <SocialLinks />
          </div>
          <MenuItems />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};
