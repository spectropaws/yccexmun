"use client";
import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  hoverUnderlineGradient,
} from "./ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { title: "About Us", url: "/about" },
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Chairs",
      url: "/Chairs.js",
    },
    {
      title: "Contact",
      url: "/Contact",
    },
    {
      title: "Register Now!",
      url: "/register",
    },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-[#EFE7E4] p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="/images/logo.jpg"
          alt="MUN YCCE LOGO"
          width="10%"
          height="10%"
        ></img>

        <div className="hidden md:flex space-x-6">
          <NavigationMenu>
            <div className="flex space-x-6">
              {links.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={
                      item.url === "/register"
                        ? navigationMenuTriggerStyle()
                        : hoverUnderlineGradient()
                    }
                    href={item.url}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
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
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#FFFFF] p-4 space-y-4">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="text-[#54250B] block hover:text-[#54250B] hover:bg-[#FFF4E2] py-2 px-4 rounded-md transition duration-200"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
