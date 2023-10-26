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
          <input name="title" placeholder="title" size={30} />
        </div>
        <div>
          <input name="name" placeholder="User Name" size={30} />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create New User"}
           </button>
       </Form>
    </div>
  )
}

export default MovieForm
