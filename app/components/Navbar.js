"use client";
import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  hoverUnderlineGradient,
} from "./ui/navigation-menu";
import Image from "next/image";
import MUNLogo from "../../public/images/mun-logo.jpg";
import { NavbarLinksData } from "../../data";
import RegisterDialog from "../../components/Register/register-dialog";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <nav className="bg-[#EFE7E4] p-4 shadow-md sticky top-0 z-50 nav-bar">
      <div className="container mx-auto flex justify-between items-center">
        {/* MUN YCCE logo */}
        <Image
          src={MUNLogo}
          alt="MUN YCCE LOGO"
          className="h-[10%] w-[10%] cursor-pointer"
          onClick={() => window.location.replace("/")}
        />

        <div className="hidden md:flex space-x-6">
          <NavigationMenu>
            <div className="flex space-x-6">
              {NavbarLinksData.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={
                      item.url == "/register"
                        ? "text-[#54250B] hover:bg-[#FFF4E2] hover:text-[#54250B] py-2 px-4 rounded-md transition duration-200 border-2 border-[#54250B] hover:border-[#FFF4E2] hover:scale-105 transform"
                        : hoverUnderlineGradient()
                    }
                    href={item.url}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <button
                className="border px-4 py-1 text-black bg-[#C2A597] rounded-sm -mt-1 hover:bg-transparent hover:scale-105 hover:shadow-md duration-300"
                onClick={() => document.getElementById("nav_modal").showModal()}
              >
                Rgister
              </button>

              {/* ---------------------------Dialog--------------------- */}
              <dialog id="nav_modal" className="modal">
                <div className="modal-box bg-white">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Rigister here</h3>
                  <p className="py-4">Iframe content Here</p>
                </div>
              </dialog>
            </div>
          </NavigationMenu>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#54250B] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#FFFFF] p-4 space-y-4">
          {NavbarLinksData.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="text-[#54250B] block hover:text-[#54250B] hover:bg-[#FFF4E2] py-2 px-4 rounded-md transition duration-200"
            >
              {item.title}
            </Link>
          ))}
          <button
            className="border px-4 py-1 text-black bg-[#C2A597] rounded-sm -mt-1 hover:bg-transparent hover:scale-105 hover:shadow-md duration-300"
            onClick={() => document.getElementById("nav_mobile_modal").showModal()}
          >
            Rgister
          </button>

          {/* ---------------------------Dialog */}
          <dialog id="nav_mobile_modal" className="modal">
            <div className="modal-box bg-white">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Rigister here</h3>
              <p className="py-4">Iframe content Here</p>
            </div>
          </dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
