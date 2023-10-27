import { PrismaClient } from "@prisma/client";
import { LoaderFunction, redirect } from "@remix-run/node";
import { useNavigation } from "@remix-run/react";
import MovieForm, { links as movieFormLinks } from "~/components/MovieForm";


export function links() {
  return [...movieFormLinks()];
}

export let loader: LoaderFunction = ({ params }) => {
  const userId = params.userId; // Retrieve the userId from the route parameters
  return { userId};
};

export async function action({request, data}: {request: Request; data: { userId: string };}) {
  // Extract form data from the request
  const formData = await request.formData();
  // Create a new instance of PrismaClient
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
          userId: parseInt(data.userId)
        },
      });
      console.log("New User:", newMovie);
    }
  } finally {
    // Disconnect from the database, even if there is an error
    await prisma.$disconnect();
  }
  // Redirect to the main page after the action is performed
  return redirect('');
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
