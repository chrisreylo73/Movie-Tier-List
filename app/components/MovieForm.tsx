import { Form } from '@remix-run/react'
import styles from "./MovieForm.css";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

const MovieForm  = ({ isSubmitting }: { isSubmitting: boolean }) =>  {
  return (
     <div className="userForm" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>ADD A NEW MOVIE</h1>
      <Form method="post">
        <div>
          <input name="title" placeholder="Title" size={30} />
        </div>
        {/* <div className="dropdown">
           <button className="dropbtn">Dropdown</button>
           <div className="dropdown-content">
             <a href="#">Option 1</a>
             <a href="#">Option 2</a>
             <a href="#">Option 3</a>
           </div>
         </div> */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create New User"}
           </button>
       </Form>
    </div>
  )
}

export default MovieForm


/*
model Movie {
   movie_id    Int       @id @default(autoincrement())
   titlw String
   story Int (1-5)
   characters Int (1-5)
   acting Int (1-5)
   action Int (1-5)
   cinematography Int (1-5)
   overall Int (1-5)
*/