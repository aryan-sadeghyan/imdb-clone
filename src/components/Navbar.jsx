import React from "react";
import NavbarItem from "./NavbarItem";
import { Suspense } from "react";
export default function Navbar() {
  return (
    <nav className='w-screen dark:bg-gray-600 bg-amber-100 flex gap-14 justify-center p-4'>
      <Suspense>
        {" "}
        <NavbarItem param='trending' title='Trending' />
        <NavbarItem param='top_rated' title='Top Rated' />
      </Suspense>
    </nav>
  );
}
