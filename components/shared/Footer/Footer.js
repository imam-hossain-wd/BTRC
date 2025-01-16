// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAssets } from "@/utils/get-assets";

const Footer = () => {

  const btrc = getAssets.logo.btrc
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="flex justify-center ">

            <Image
              className="w-20 h-20 mr-3 "
              src={btrc}
              alt="Hospital"
              width={1000}
              height={1000}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">Bewarish Treatment & Rehabilitation Center</h3>
              <p className="mt-4 text-sm">
                Dedicated to providing care and rehabilitation services for those
                in need. Together, we can make a difference.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/patients" className="hover:text-blue-500">
                  Patients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-blue-500">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span className="font-semibold">Address:</span> Omar Faruk Building , Shahidullah Para, Owazdia , Hathazari Chattogram
              </li>
              <li>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+123456789" className="hover:text-blue-500">
                  +880 1819832832
                </a>
              </li>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@carecenter.com"
                  className="hover:text-blue-500"
                >
                  btrc.3205@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-4 flex space-x-4">
      {/* Facebook Icon */}
      <Link href="https://www.facebook.com/Bewarish.Treatment.and.Rehabilitation.Center/" passHref>
        <p className="text-gray-400 hover:text-blue-500" aria-label="Facebook">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.56v15.1c0 2.4-1.93 4.34-4.34 4.34H4.34C1.93 24 0 22.07 0 19.66V4.56C0 2.16 1.93.23 4.34.23h15.32C22.07.23 24 2.16 24 4.56zM9.57 20.22V12.9H7.57v-2.4h2v-1.64c0-1.93.87-4.46 4.13-4.46l1.64.01v2.4h-1.2c-.6 0-.8.28-.8.73v1.53h2l-.27 2.4h-1.73v7.32h-3.4z" />
          </svg>
        </p>
      </Link>

      {/* YouTube Icon */}
      <Link href="https://www.youtube.com/@bewarishsebafoundation5744" passHref>
        <p className="text-gray-400 hover:text-red-500" aria-label="YouTube">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8.7 18.3H5.6V9.4h3.1v8.9zM7.1 8.2C6 8.2 5.2 7.4 5.2 6.3c0-1.1.8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9 0 1-.9 1.9-1.9 1.9zm12.4 10.1h-3.1v-4.3c0-1-.3-1.8-1.3-1.8-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.8v4.3h-3.1V9.4h3v1.2h.1c.4-.7 1.2-1.4 2.5-1.4 1.8 0 3.1 1.2 3.1 3.9v5.2z" />
          </svg>
        </p>
      </Link>
    </div>
          </div>

          {/* Social Media Links */}
          {/* <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.56v15.1c0 2.4-1.93 4.34-4.34 4.34H4.34C1.93 24 0 22.07 0 19.66V4.56C0 2.16 1.93.23 4.34.23h15.32C22.07.23 24 2.16 24 4.56zM9.57 20.22V12.9H7.57v-2.4h2v-1.64c0-1.93.87-4.46 4.13-4.46l1.64.01v2.4h-1.2c-.6 0-.8.28-.8.73v1.53h2l-.27 2.4h-1.73v7.32h-3.4z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.64 4.56c-.84.37-1.74.62-2.69.74.97-.58 1.7-1.5 2.04-2.6-.9.54-1.89.93-2.95 1.15a5.22 5.22 0 0 0-8.89 4.76c-4.34-.22-8.2-2.3-10.79-5.46a5.23 5.23 0 0 0 1.6 6.97c-.76-.03-1.48-.23-2.1-.57v.06a5.23 5.23 0 0 0 4.18 5.13c-.68.19-1.4.24-2.14.09a5.22 5.22 0 0 0 4.87 3.63 10.47 10.47 0 0 1-6.47 2.23c-.42 0-.83-.03-1.24-.07a14.77 14.77 0 0 0 7.95 2.33c9.55 0 14.77-7.91 14.77-14.77 0-.23 0-.46-.02-.69A10.56 10.56 0 0 0 24 4.56z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8.7 18.3H5.6V9.4h3.1v8.9zM7.1 8.2C6 8.2 5.2 7.4 5.2 6.3c0-1.1.8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9 0 1-.9 1.9-1.9 1.9zm12.4 10.1h-3.1v-4.3c0-1-.3-1.8-1.3-1.8-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.8v4.3h-3.1V9.4h3v1.2h.1c.4-.7 1.2-1.4 2.5-1.4 1.8 0 3.1 1.2 3.1 3.9v5.2z" />
                </svg>
              </a>
            </div>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2025 CareCenter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
