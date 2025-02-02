"use client";
import { useState } from 'react';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle, hoverUnderlineGradient } from "./ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-[#EFE7E4] p-4 shadow-md sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <img src='/images/logo.jpg' alt="MUN YCCE LOGO" width="10%" height="10%" />
        <div className="hidden md:flex space-x-6">
          <NavigationMenu>
            <div className="flex space-x-6">
              <NavigationMenuItem>
                <Link href="/about" passHref>
                  <NavigationMenuLink className={hoverUnderlineGradient()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className={hoverUnderlineGradient()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" passHref>
                  <NavigationMenuLink className={hoverUnderlineGradient()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/register" passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Register Now!
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
          </NavigationMenu>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#54250B] focus:outline-none">
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
          isMenuOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="bg-[#FFFFF] p-4 space-y-4">
          <Link
            href="/about"
            className="text-[#54250B] block hover:text-[#54250B] hover:bg-[#FFF4E2] py-2 px-4 rounded-md transition duration-200"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="text-[#54250B] block hover:text-[#54250B] hover:bg-[#FFF4E2] py-2 px-4 rounded-md transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-[#54250B] block hover:text-[#54250B] hover:bg-[#FFF4E2] py-2 px-4 rounded-md transition duration-200"
          >
            Contact
          </Link>
          <Link
            href="/register"
            className="text-[#54250B] block hover:text-[#54250B] hover:bg-[#FFF4E2] py-2 px-4 rounded-md transition duration-200"
          >
            Register Now!
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
