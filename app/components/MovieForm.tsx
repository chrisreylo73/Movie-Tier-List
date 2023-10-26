import { Form } from '@remix-run/react'
import styles from "./MovieForm.css";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

const MovieForm  = ({ isSubmitting }: { isSubmitting: boolean }) =>  {
  return (
     <div className="movieForm" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>ADD MOVIE</h1>
      <Form method="post">
      <div className="inputs">
        <label>
                 Title:
                 </label>
          <input name="title" placeholder="Title" size={30} />
        
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