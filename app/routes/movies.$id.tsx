import { PrismaClient } from "@prisma/client";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MovieTierList, {links as MovieTierLinks} from "~/components/MovieTierList";
import NavBar, {links as NavBarLinks} from "~/components/NavBar";

export function links() {
  return [...MovieTierLinks(), ...NavBarLinks()];
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
 
export async function action({ request }: { request: Request }) {
   // Extract form data from the request
   const formData = await request.formData();
   // Create a new instance of PrismaClient
   const prisma = new PrismaClient();
 
   try {
     // Handle DELETE requests (deleting a user)
     if (request.method === "DELETE") {
       // Extract user ID from the form data
       const movieId = parseInt(formData.get('id') as string);
       // Delete the user
       const delResponse = await prisma.movie.delete({
         where: { movie_id: movieId },
       });
       console.log("Deleted Movie:", delResponse);
     }
   } finally {
     // Disconnect from the database, even if there is an error
     await prisma.$disconnect();
   }
 
   // Redirect to the main page after the action is performed
   return redirect('./');
 }

export default function MoviesById() { 
   const categorizedMovies = useLoaderData()
   return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
         <h1>MOVIES</h1>
         <NavBar userId={"2"} ></NavBar>
         <MovieTierList categorizedMovies={categorizedMovies}/>
      </div>
   );
}