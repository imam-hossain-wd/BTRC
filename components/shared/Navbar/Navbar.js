// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAssets } from "@/utils/get-assets";

const Navbar = () => {

  const hospital = getAssets.logo.btrc
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 md:py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link className="flex justify-center items-center" href="/">
            <Image
              src={hospital}
              alt="Hospital"
              width={600}
              height={400}
              className=" w-14 h-14 transparent"
            />
            <h3 className="text-5xl ml-2">BTRC</h3>
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link href="/patients" className="text-gray-700 hover:text-blue-600">
            Patients
          </Link>
          <Link href="/team" className="text-gray-700 hover:text-blue-600">
            Team
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
          <Link
            href="/donate"
            className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700"
          >
            Donate
          </Link>
        </div>


        <div className="md:hidden">
          <button
            id="menu-button"
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
