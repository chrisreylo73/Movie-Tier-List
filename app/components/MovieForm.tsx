import { Form } from '@remix-run/react'
import styles from "app/styles/MovieForm.css";
import { redirect } from '@remix-run/node';
import { PrismaClient } from '@prisma/client';

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}
export async function action({ request }: { request: Request }) {
   // Extract form data from the request
   const formData = await request.formData();
   // Create a new instance of PrismaClient
   const prisma = new PrismaClient();
   try {
     // Handle POST requests (creating a new user)
     if (request.method === "POST") {
       // Create a new user
       const newUser = await prisma.user.create({
         data: {
           email: formData.get('email') as string,
           name: formData.get('name') as string,
         },
       });
       console.log("New User:", newUser);
     }
   } finally {
     // Disconnect from the database, even if there is an error
     await prisma.$disconnect();
   }
   // Redirect to the main page after the action is performed
   return redirect('/');
}

const MovieForm  = ({ isSubmitting }: { isSubmitting: boolean }) =>  {
  return (
     <div className="movieForm" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>ADD MOVIE</h1>
      <Form method="post">
      <div className="inputs">
        <label>Title:</label>
        <input name="title" size={30} />
      </div>
      <div className="inputs" >
        <label>Story:</label>
        <input name="story" type="number" min="1" max="5" step="1" />
      </div>
      <div className="inputs">
        <label>Characters:</label>
        <input name="characters" type="number" min="1" max="5" step="1" />
      </div>
      <div className="inputs">
        <label>Acting:</label>
        <input name="acting" type="number" min="1" max="5" step="1" />
      </div>
      <div className="inputs">
        <label>Action:</label>
        <input name="action" type="number" min="1" max="5" step="1" />
      </div>
      <div className="inputs">
        <label>Cinematography:</label>
        <input name="cinematography" type="number" min="1" max="5" step="1" />
      </div>
      <div className="inputs">
        <label>Overall:</label>
        <input name="overall" type="number" min="1" max="5" step="1" />
      </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Add Movie"}
           </button>
       </Form>
    </div>
  )
}

export default MovieForm
