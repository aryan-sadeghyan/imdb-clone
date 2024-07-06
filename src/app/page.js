import Image from "next/image";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "Trending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "top_rated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = data.results;

  return (
    <main>
      <div>
        {result.map((movie) => {
          return <div key={movie.id}>{movie.title}</div>;
        })}
      </div>
    </main>
  );
}
