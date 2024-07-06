import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaThumbsUp } from "react-icons/fa";

export default function Card({ result }) {
  return (
    <div className='group cursor-pointer sm:border border-gray-600 rounded-lg sm:m-2 sm:shadow-md transition-shadow duration-200 text-left'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt='...'
          width={500}
          height={300}
          className='sm:rounded-t-lg group-hover:opacity-75 duration-300'
        ></Image>
        <div className='p-2'>
          <p className='line-clamp-2'>{result.overview}</p>

          <h2 className='text-lg font-bold truncate'>
            {result.title || result.name}
          </h2>
          <div className='flex'>
            {result.release_date || result.first_air_date}

            <FaThumbsUp className='h-5 mr-1 ml-3' />
            {result.vote_count}
          </div>
        </div>
      </Link>
    </div>
  );
}
