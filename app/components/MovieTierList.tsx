
import styles from "app/styles/MovieTierList.css";
import { Link, useLoaderData, useLocation, useParams } from '@remix-run/react';
import { Movie } from "@prisma/client";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

const MovieTierList = ({ categorizedMovies }: { categorizedMovies: Record<string, Movie[]> })  => {
  return (
    <div>
       <div className="tiers">
            <div className="S">
              <p className="tierLabel">S</p>
              {categorizedMovies['S'].map((movie) => (
              <div className="movie">
                 <div className="del"></div>
                 <p className="movieTitle">{movie.title}</p>
                </div>
               ))}
            </div>
            <div className="A">
          <p className="tierLabel">A</p>
          {categorizedMovies['A'].map((movie) => (
              <div className="movie">
                 <div className="del"></div>
                 <p className="movieTitle">{movie.title}</p>
                </div>
               ))}
            </div>
            <div className="B">
          <p className="tierLabel">B</p>
          {categorizedMovies['B'].map((movie) => (
              <div className="movie">
                 <div className="del"></div>
                 <p className="movieTitle">{movie.title}</p>
                </div>
               ))}
            </div>
            <div className="C">
          <p className="tierLabel">C</p>
          {categorizedMovies['C'].map((movie) => (
              <div className="movie">
                 <div className="del"></div>
                 <p className="movieTitle">{movie.title}</p>
                </div>
               ))}
            </div>
            <div className="D">
          <p className="tierLabel">D</p>
          {categorizedMovies['D'].map((movie) => (
              <div className="movie">
                 <div className="del"></div>
                 <p className="movieTitle">{movie.title}</p>
                </div>
               ))}
            </div>
        </div>
        <Link to={`./add_movie`}>
          <button style={{ borderRadius: "5px 5px 15px 15px" }}>ADD MOVIE</button>
        </Link>
    </div>
  )
}


export default MovieTierList