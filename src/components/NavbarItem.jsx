"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function NavbarItem({ param, title }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={` hover:bg-amber-500 ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
