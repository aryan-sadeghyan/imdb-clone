import Results from "@/components/Results";
import Image from "next/image";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "Trending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "top_rated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;

  return (
    <main className='mx-auto'>
      <Results results={results} />
    </main>
  );
}
