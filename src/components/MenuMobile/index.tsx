import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import type { NavLinks } from "../Header";

interface MenuMobileProps {
  navLinks: NavLinks[];
}

export const MenuMobile = ({ navLinks }: MenuMobileProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <>
      <button className="cursor-pointer relative" onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <MdOutlineMenu className="text-2xl text-[#9856EF]" />
      </button>

      <div
        className={`${menuIsOpen ? "bg-black/60 visible" : "bg-transparent invisible"} fixed top-0 bottom-0 left-0 right-0 z-30`}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <div
          className={`${menuIsOpen ? "translate-x" : "-translate-x-full"} absolute top-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-[60%]`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="bg-black flex items-center py-5 px-5">
            <nav className="flex justify-between w-full gap-3">
              <Link className="text-white flex items-center gap-3 hover:text-accent-hover" to="/sign-in">
                <FaRegUserCircle className="h-6 w-6" />
                <p>Olá faça seu login</p>
              </Link>
              <button
                className=" text-white text-xl font-bold cursor-pointer hover:text-red-500"
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              >
                X
              </button>
            </nav>
          </header>
          <ul className=" p-4 overflow-y-auto scrollbar-hide h-[calc(100%-140px)] flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                className="hover:underline"
                to={link.href}
                key={link.name}
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              >
                {link.name}
              </Link>
            ))}
            <li>
              <Link className="hover:underline" to="/our-stores" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                Nossas Lojas
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/about" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                Sobre
              </Link>
            </li>
          </ul>

          <footer className=" absolute bottom-0 w-full h-25 p-3">
            <button className="w-full h-full bg-black text-white rounded-sm cursor-pointer hover:bg-gray-800">
              Logout
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};
