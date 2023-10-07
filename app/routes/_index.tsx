import { PrismaClient, User } from "@prisma/client";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { useTransition } from "react";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
// import UserForm from "~/components/UserForm";
import UserList , { links as userListLinks } from "~/components/UserList";

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

export function links() {
  return [...userListLinks()];
}


export default function Index() {
  const users = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>REEL REVIEWS</h1>
      <h3>Choose a user below:</h3>
      <UserList users={users} />
      <div>
        <button>Add User</button>
        <button>Delete User</button>
      </div>
    </div>
  );
}



