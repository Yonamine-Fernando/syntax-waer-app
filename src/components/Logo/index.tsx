import { Link } from "@tanstack/react-router";
import LogoImage from "@/assets/images/logo.png";

export const Logo = () => {
    return (
        <Link className="self-center" to="/">
            <img className="w-40" src={LogoImage} alt="Logo SyntaxWear" />
        </Link>
    );
};