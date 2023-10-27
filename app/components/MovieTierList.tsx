
import styles from "app/styles/MovieTierList.css";
import { Link, useLoaderData, useLocation, useParams } from '@remix-run/react';
import { LoaderFunction } from '@remix-run/node';
import { PrismaClient } from "@prisma/client";
import { Movie } from "@prisma/client";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

const MovieTierList = ({movies}: {movies: Movie[]}) => {
  return (
    <div>
      {/* {movies.map((movie) => ( */}
        <div>
       <div className="tiers">
            <div className="S">
              <p className="tierLabel">S</p>
              {movies.map((movie) => (
              <div className="movie">
                 <div className="del"></div>
                 <p className="movieTitle">The Dark Knight</p>
                </div>
               ))}
            </div>
            <div className="A">
            <p className="tierLabel">A</p>
            </div>
            <div className="B">
            <p className="tierLabel">B</p>
            </div>
            <div className="C">
            <p className="tierLabel">C</p>
            </div>
            <div className="D">
               <p className="tierLabel">D</p>
            </div>
        </div>
        <Link to={`./add_movie`}>
          <button style={{ borderRadius: "5px 5px 15px 15px" }}>ADD MOVIE</button>
        </Link>
        </div>
       {/* ))} */}
    </div>
  )
}


export default MovieTierList