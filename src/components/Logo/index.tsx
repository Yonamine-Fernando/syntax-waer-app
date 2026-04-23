import LogoImage from "@/assets/images/logo.png";
import { Link } from "@tanstack/react-router";

export const Logo = () => {
  return (
    <Link className="self-center" to="/">
      <img className="w-40" src={LogoImage} alt="Logo SyntaxWear" />
    </Link>
  );
};
