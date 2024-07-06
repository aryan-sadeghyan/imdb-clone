import Image from "next/image";
import React from "react";

const API_KEY = process.env.API_KEY;
export default async function page({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error("not found!");
  }
  const data = await res.json();

  return (
    <div className='max-w-6xl mx-auto flex p-5 gap-5 mt-[50px] flex-wrap md:flex-nowrap'>
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        }`}
        alt='...'
        width={500}
        height={300}
        className='rounded-md'
        style={{ maxWidth: "100%", height: "100%" }}
      ></Image>
      <div className='flex flex-col gap-3'>
        {" "}
        <h1 className='font-bold text-amber-300'>
          {data.original_title || data.name}
        </h1>
        <p>{data.overview}</p>
        <p>release date : {data.release_date}</p>
        <p className='flex gap-2 items-center'>Rating : {data.popularity}</p>
      </div>
    </div>
  );
}
