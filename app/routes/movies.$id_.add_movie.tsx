import { PrismaClient } from "@prisma/client";
import { LoaderFunction, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { useLoaderData, useNavigation} from "@remix-run/react";
import MovieForm, { links as movieFormLinks } from "~/components/MovieForm";
import { useRouteLoaderData } from "@remix-run/react";
import { useParams } from 'react-router-dom';

export function links() {
  return [...movieFormLinks()];
}

export async function loader({params}: LoaderFunctionArgs) { 
  return params.id;
}

export async function action({ request, params }: { request: Request; }) {
  // Extract form data from the request
  const formData = await request.formData();
  const prisma = new PrismaClient();
  
  try {
    // Handle POST requests (creating a new user)
    if (request.method === "POST") {
      // Create a new user
      const newMovie = await prisma.movie.create({
        data: {
         title: formData.get('title') as string,
         story: parseInt(formData.get('story') as string),
         characters: parseInt(formData.get('characters') as string), // Add a comma here
         action: parseInt(formData.get('action') as string),
         acting: parseInt(formData.get('acting') as string),
         cinematography: parseInt(formData.get('cinematography') as string),
         overall: parseInt(formData.get('overall') as string),
         userId: parseInt(params.id as string),
        },
      });
      console.log("New User:", newMovie);
    }
  } finally {
    // Disconnect from the database, even if there is an error
    await prisma.$disconnect();
  }
  // Redirect to the main page after the action is performed
  return redirect('./');
}

const add_movie = () => {
  
  const nav = useNavigation();
  const isSubmitting = nav.state === "submitting";
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <MovieForm isSubmitting={isSubmitting}/>
    </div>
  )
}

export default add_movie
