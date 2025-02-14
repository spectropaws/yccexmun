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
                    // className={
                    //   item.url == "/register"
                    //     ? "text-[#54250B] hover:bg-[#FFF4E2] hover:text-[#54250B] py-2 px-4 rounded-md transition duration-200 border-2 border-[#54250B] hover:border-[#FFF4E2] hover:scale-105 transform"
                    //     : hoverUnderlineGradient()
                    // }
                    className={hoverUnderlineGradient()}
                    href={item.url}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <button
                className="text-[#54250B] hover:bg-[#FFF4E2] hover:text-[#54250B] -mt-2 py-2 px-4 rounded-md transition duration-200 border-2 border-[#54250B] hover:border-[#FFF4E2] hover:scale-105 transform"
                onClick={() => document.getElementById("nav_modal").showModal()}
              >
                Register
              </button>

              {/* ---------------------------Dialog--------------------- */}
              <dialog id="nav_modal" className="modal">
                <div className="modal-box h-[700px] bg-white">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Register here</h3>
                  <div>
                    <iframe
                      src="https://konfhub.com/widget/ycce-x-mun?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Prompt&borderRadius=10"
                      id="konfhub-widget"
                      title="Register for YCCE X MUN"
                      width="100%"
                      height="570"
                    ></iframe>
                  </div>
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
            className="text-[#54250B] w-full text-left block hover:text-[#54250B] hover:bg-[#FFF4E2] py-2 px-4 rounded-md transition duration-200"
            onClick={() =>
              document.getElementById("nav_mobile_modal").showModal()
            }
          >
            Register
          </button>

          {/* ---------------------------Dialog */}
          <dialog id="nav_mobile_modal" className="modal">
            <div className="modal-box h-[700px] bg-white">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Register here</h3>
              <div>
                <iframe
                  src="https://konfhub.com/widget/ycce-x-mun?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Prompt&borderRadius=10"
                  id="konfhub-widget"
                  title="Register for YCCE X MUN"
                  width="100%"
                  height="570"
                ></iframe>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
