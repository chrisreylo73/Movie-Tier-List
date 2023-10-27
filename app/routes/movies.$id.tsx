import MovieTierList, {links as MovieTierLinks} from "~/components/MovieTierList";

export function links() {
  return [...MovieTierLinks()];
}



export default function MoviesById() { 
   return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
         <h1>MOVIES</h1>
         <MovieTierList/>
      </div>
   );
}