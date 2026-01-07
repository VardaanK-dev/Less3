"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserGroupIcon,
  MapIcon,
  SparklesIcon,
  InformationCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-20">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/#home" className="flex items-center space-x-2" onClick={handleNavClick}>
          <img src="/logo.png" alt="Less³ Logo" className="h-8 w-8" />
          <span className="text-white font-bold">Less³</span>
        </Link>

        {/* Desktop nav items */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/#home" className="group flex items-center text-white" onClick={handleNavClick}>
              <HomeIcon className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#members" className="group flex items-center text-white" onClick={handleNavClick}>
              <UserGroupIcon className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Members
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#journey" className="group flex items-center text-white" onClick={handleNavClick}>
              <MapIcon className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Journey
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#showcase" className="group flex items-center text-white" onClick={handleNavClick}>
              <SparklesIcon className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Showcase
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#credits" className="group flex items-center text-white" onClick={handleNavClick}>
              <InformationCircleIcon className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Credits
              </span>
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-md px-4 pb-4 space-y-3">
          <Link href="/#home" onClick={handleNavClick} className="flex items-center text-white">
            <HomeIcon className="h-6 w-6 mr-2" /> Home
          </Link>
          <Link href="/#members" onClick={handleNavClick} className="flex items-center text-white">
            <UserGroupIcon className="h-6 w-6 mr-2" /> Members
          </Link>
          <Link href="/#journey" onClick={handleNavClick} className="flex items-center text-white">
            <MapIcon className="h-6 w-6 mr-2" /> Journey
          </Link>
          <Link href="/#showcase" onClick={handleNavClick} className="flex items-center text-white">
            <SparklesIcon className="h-6 w-6 mr-2" /> Showcase
          </Link>
          <Link href="/#credits" onClick={handleNavClick} className="flex items-center text-white">
            <InformationCircleIcon className="h-6 w-6 mr-2" /> Credits
          </Link>
        </div>
      )}
    </nav>
  );
}
