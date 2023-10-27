import React from 'react';
import styles from "app/styles/MovieTierList.css";
import { Link, useLoaderData, useLocation, useParams } from '@remix-run/react';
import { LoaderFunction } from '@remix-run/node';

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}


export let loader: LoaderFunction = ({ params }) => {
  const userId = params.id // Retrieve the userId from the route parameters
  console.log('userId:', userId);
  return {userId};
};


const MovieTierList = () => {
  // const { params } = useParams();
  // console.log(params);
  // const { data } = useLoaderData();
  return (
    <div>
       <div className="tiers">
            <div className="S">
              <p className="tierLabel">S</p>
              <div className="movie">
                 <div className="del"></div>
                 <p className="movieTitle">The Dark Knight</p>
              </div>
            </div>
            <div className="A" style={{backgroundColor: ""}}>
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
        <Link to={`${""}./add_movie`}>
          <button style={{ borderRadius: "5px 5px 15px 15px" }}>ADD MOVIE</button>
        </Link>
    </div>
  )
}

export default MovieTierList
function useRouteData(): { data: any; } {
  throw new Error('Function not implemented.');
}

