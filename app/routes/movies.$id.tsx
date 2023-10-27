import { PrismaClient } from "@prisma/client";
import { useLoaderData } from "@remix-run/react";
import MovieTierList, {links as MovieTierLinks} from "~/components/MovieTierList";

export function links() {
  return [...MovieTierLinks()];
}

export async function loader() {
   // Create a new instance of PrismaClient
   const prisma = new PrismaClient();
   try {
     // Fetch data from the database
     const movies = await prisma.movie.findMany();
      console.log("allMovies:", movies);
      const categorizedMovies = {
         S: movies.filter((movie) => movie.overall === 5),
         A: movies.filter((movie) => movie.overall === 4),
         B: movies.filter((movie) => movie.overall === 3),
         C: movies.filter((movie) => movie.overall === 2),
         D: movies.filter((movie) => movie.overall === 1),
       };
     // Return the fetched data
     return categorizedMovies;
   } finally {
     // Disconnect from the database, even if there is an error
     await prisma.$disconnect();
   }
}
 
export default function MoviesById() { 
   const categorizedMovies = useLoaderData()
   return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
         <h1>MOVIES</h1>
         <MovieTierList categorizedMovies={categorizedMovies}/>
      </div>
   );
}