import { PrismaClient, User } from "@prisma/client";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { useTransition } from "react";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
// import UserForm from "~/components/UserForm";
import UserList , { links as userListLinks } from "~/components/UserList";
import UserForm from "~/components/UserForm";

export async function loader() {
  // Create a new instance of PrismaClient
  const prisma = new PrismaClient();
  try {
    // Fetch data from the database
    const allUsers = await prisma.user.findMany();
    console.log("allUsers:", allUsers);
    // Return the fetched data
    return allUsers;
  } finally {
    // Disconnect from the database, even if there is an error
    await prisma.$disconnect();
  }
}

// Action Function: Handle form submissions
export async function action({ request }: { request: Request }) {
  // Extract form data from the request
  const formData = await request.formData();
  // Create a new instance of PrismaClient
  const prisma = new PrismaClient();

  try {
    // Handle DELETE requests (deleting a user)
    if (request.method === "DELETE") {
      // Extract user ID from the form data
      const userId = parseInt(formData.get('id') as string);
      // Delete the user
      const delResponse = await prisma.user.delete({
        where: { user_id: userId },
      });
      console.log("Deleted User:", delResponse);
    }
  } finally {
    // Disconnect from the database, even if there is an error
    await prisma.$disconnect();
  }

  // Redirect to the main page after the action is performed
  return redirect('./');
}

export function links() {
  return [...userListLinks()];
}

export default function Index() {
  const users = useLoaderData();
  // Get transition state for form submission
  // const { state } = useTransition();
  // const isSubmitting = state === "submitting";
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>REEL REVIEWS</h1>
      <h3>Choose a user below:</h3>
      <UserList users={users} />
      <div className="user-buttons">
        <Link to={`/add_user`}>
          <button style={{borderRadius: "5px 5px 15px 15px"}}>ADD</button>
        </Link>
          {/* <button style={{ borderRadius: "5px 5px 15px 5px" }}>DELETE</button> */}
      </div>
      {/* <UserForm isSubmitting={isSubmitting} /> */}
    </div>
  );
}



