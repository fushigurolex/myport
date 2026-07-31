"use client";

import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  const links = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];


  return (
    <nav
      className="
        fixed
        top-0
        w-full
        z-50
        bg-black/70
        backdrop-blur-md
        border-b
        border-gray-800
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          py-4
          flex
          justify-between
          items-center
        "
      >


        {/* Logo */}

        <a
          href="#home"
          className="
            text-xl
            font-bold
          "
        >
          Shin.
        </a>



        {/* Desktop Menu */}

        <div
          className="
            hidden
            md:flex
            gap-8
          "
        >

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="
                text-gray-300
                hover:text-white
                transition
              "
            >
              {link.name}
            </a>

          ))}

        </div>



        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            text-2xl
          "
        >

          {isOpen ? "✕" : "☰"}

        </button>


      </div>



      {/* Mobile Menu */}

      {isOpen && (

        <div
          className="
            md:hidden
            px-6
            pb-6
            flex
            flex-col
            gap-5
            bg-black
          "
        >

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                text-gray-300
                hover:text-white
              "
            >
              {link.name}
            </a>

          ))}


        </div>

      )}


    </nav>
  );
}