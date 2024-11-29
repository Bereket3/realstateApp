'use client'
import { useState } from "react";
import { ThemeSwitch } from "@/components/theme-switch";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="shadow-md sticky top-0 z-10 bg-white dark:bg-black" >
      <div className="md:w-[80%] w-[90%] mx-auto ">
        <div className="flex justify-between items-center py-2 ">
          <div className="logo font-bold text-xl text-light-primary">mela</div>
          <div className="hidden md:flex space-x-4">
            <Link href="#" className="transition dark ease-in-out duration-1000 hover:text-accent-500">Properties </Link>
            <Link href="#" className="transition ease-in-out duration-1000 hover:text-accent-500">Services </Link>
            <Link href="#" className="transition ease-in-out duration-1000 hover:text-accent-500">About </Link>
            <Link href="#" className="transition ease-in-out duration-1000 hover:text-accent-500">Contact </Link>
            <ThemeSwitch />
          </div>

          <button
            className="md:hidden text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>

          <div className={cn(
            "text-center border-1.5 rounded-full border-accent-300 text-accent-300 md:px-6 px-2 py-2 transition ease-in-out duration-700 hover:bg-accent-300 hover:text-text-900 text-[14px]",
            "dark:bg-accent-300 dark:text-white dark:hover:bg-accent-100 dark:hover:text-accent-950")}>Book an <br /> appointment</div>
        </div>

        {
          isMenuOpen && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 shadow-lg z-10 w-[80%] md:hidden flex flex-col items-center">
              <Link href="#" className=" btn-hover " >Properties </Link>
              <Link href="#" className=" btn-hover ">Services </Link>
              <Link href="#" className=" btn-hover ">About </Link>
              <Link href="#" className=" btn-hover ">Contact </Link>
            </div>
          )
        }
      </div >
    </div >
  );
};

export default Navbar;
