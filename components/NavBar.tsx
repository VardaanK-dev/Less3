"use client";

import Link from "next/link";
import { HomeIcon, UserGroupIcon, MapIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-20">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="less³ Logo" className="h-8 w-8" />
          <span className="text-white font-bold">less³</span>
        </Link>

        {/* Nav items */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="group flex items-center text-white">
              <HomeIcon className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/members" className="group flex items-center text-white">
              <UserGroupIcon className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Members
              </span>
            </Link>
          </li>
          <li>
            <Link href="/journey" className="group flex items-center text-white">
              <MapIcon className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Journey
              </span>
            </Link>
          </li>
          <li>
            <Link href="/showcase" className="group flex items-center text-white">
              <SparklesIcon className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Showcase
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
