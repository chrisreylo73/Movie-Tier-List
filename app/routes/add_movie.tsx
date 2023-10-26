import { useNavigation } from "@remix-run/react";
import MovieForm, { links as movieFormLinks } from "~/components/MovieForm";


export function links() {
  return [...movieFormLinks()];
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
