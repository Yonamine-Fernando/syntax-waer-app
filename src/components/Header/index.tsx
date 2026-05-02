import Logo from "@/assets/images/logo.png";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "../ShoppingBag";
import { MenuMobile } from "../MenuMobile";

export interface NavLinks {
  name: string;
  href: string;
}

const navLinks: NavLinks[] = [
  { name: "Masculino", href: "/products/category/masculino" },
  { name: "Feminino", href: "/products/category/feminino" },
  { name: "Outlet", href: "/products/category/outlet" },
];

export const Header = () => {
  return (
    <div className="relative">
      <header className="fixed top-10 left-0 right-0 z-10 mx-10">
        <div className="bg-white/96  text-black max-w-330 mx-auto flex justify-between items-center py-3 px-7 rounded-2xl md:mt-5 shadow-2xs">
          <Link to="/">
            <img className="w-32 md:w-36" src={Logo} alt="Logo SyntaxWaer" />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-10">
              {navLinks.map((link) => (
                <li className="hover:underline" key={link.name}>
                  <Link to={link.href} key={link.name}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <ul className="flex gap-4 md:gap-10">
              <li className="hidden lg:block hover:underline">
                <Link to="/our-stores">Nossas Lojas</Link>
              </li>
              <li className="lg:hidden">
                <MenuMobile navLinks={navLinks} />
              </li>
              <li className="hidden lg:block">
                <Link to="/sign-up">
                  <IoPersonOutline className="text-2xl text-[#9856EF]" />
                </Link>
              </li>
              <li className="hidden lg:block">
                <Link to="/about">
                  <AiOutlineQuestionCircle className="text-2xl text-[#9856EF]" />
                </Link>
              </li>
              <li>
                <ShoppingBag />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
