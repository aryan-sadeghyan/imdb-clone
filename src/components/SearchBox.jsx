"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-6xl mx-auto flex justify-between items-center pt-3'
    >
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type='text'
        placeholder='search Keywords...'
        className='w-full bg-transparent placeholder:text-gray-500 h-9 max-w-6xl mx-auto outline-none px-4'
      />
      <button
        disabled={search === ""}
        className='text-amber-500 px-4 disabled:text-gray-500'
      >
        search
      </button>
    </form>
  );
}
