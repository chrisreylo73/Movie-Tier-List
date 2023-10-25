import { PrismaClient } from "@prisma/client";
import { redirect } from "@remix-run/node";
import { useTransition } from "react";
import UserForm, {links as userFormLinks} from "~/components/UserForm";

export function links() {
  return [...userFormLinks()];
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
 
const add_user = () => {
  const {state} = useTransition();
  const isSubmitting = state === "submitting";
  return (
    <div>
      <UserForm isSubmitting={isSubmitting} />
    </div>
  )
}

export default add_user

