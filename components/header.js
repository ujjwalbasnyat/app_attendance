'use client'
import { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { CgSearch } from "react-icons/cg";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary  p-4 sticky top-0 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* App Name (Top Left) */}
        <div className="text-xl font-semibold text-white">AutoAttend</div>

        {/* Hamburger Icon (Visible on Small Screens) */}
        <div className="sm:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Items for Larger Screens */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search student..."
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary "
          />
          <button className="bg-secondary rounded-md"><CgSearch/></button>

          {/* Add Student Button */}
          <button className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-accent  flex item-center justify-between">
            <MdOutlineAdd className="text-xl"/>
            <Link href="/root/addstudent" className="text-white">
            Add Student
            </Link>
          </button>

          {/* Profile (Not Button) */}
          <div class="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center text-xl font-bold">
                UB
            </div>
        </div>
      </div>

      {/* Navbar Items for Mobile Screens (When Hamburger is Open) */}
      <div
        className={`sm:hidden fixed inset-0 bg-opacity-50 bg-black z-50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)} // Close menu when clicked outside
      >
        <div
          className={`flex flex-col items-end space-y-4 bg-primary  p-6 pt-16 h-full sm:hidden transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* Close Button (Cross Icon) */}
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search student..."
            className=" p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary w-full"
          />

          {/* Add Student Button */}
          <button className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-accent focus:ring-2 focus:ring-accent w-full">
            Add Student
          </button>

          {/* Profile (Not Button) */}
          <div className="py-2 px-4 cursor-pointer hover:bg-accent rounded-lg w-full text-white">
            Profile
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
