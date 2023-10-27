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
     const allMovies = await prisma.movie.findMany();
     console.log("allMovies:", allMovies);
     // Return the fetched data
     return allMovies;
   } finally {
     // Disconnect from the database, even if there is an error
     await prisma.$disconnect();
   }
 }
 

export default function MoviesById() { 
   const movies = useLoaderData()
   return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
         <h1>MOVIES</h1>
         <MovieTierList movies={movies}/>
      </div>
   );
}