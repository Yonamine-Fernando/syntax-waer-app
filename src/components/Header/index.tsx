import Logo from "@/assets/images/logo.png";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "../ShoppingBag";

export const Header = () => {
  return (
    <div className="relative">
      <header className="fixed top-10 left-0 right-0 z-10 mx-10">
        <div className="bg-white text-black max-w-330 mx-auto flex justify-between items-center py-3 px-7 rounded-2xl mt-5 shadow-2xs">
          <Link to="/">
            <img className="w-32 md:w-36" src={Logo} alt="Logo SyntaxWaer" />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-10">
              <li>
                <a href="#">Masculino</a>
              </li>
              <li>
                <a href="#">Feminino</a>
              </li>
              <li>
                <a href="#">Outlet</a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul className="flex gap-4 md:gap-10">
              <li className="hidden md:block">
                <a href="#">Nossa Lojas</a>
              </li>
              <li className="hidden md:block">
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">
                  <IoPersonOutline className="text-2xl text-[#9856EF]" />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineQuestionCircle className="text-2xl text-[#9856EF]" />
                </a>
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
