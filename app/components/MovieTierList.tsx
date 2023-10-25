import React from 'react';
import styles from "./MovieTierList.css";
import { Link } from '@remix-run/react';

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

const MovieTierList = () => {
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
        {/* <Link to={`/`}>
          <button style={{ borderRadius: "5px 5px 15px 15px" }}>HOME</button>
        </Link> */}
        <Link to={`/`}>
          <button style={{ borderRadius: "5px 5px 15px 15px" }}>ADD MOVIE</button>
        </Link>
        {/* <Link to={`/`}>
          <button style={{ borderRadius: "5px 5px 15px 5px" }}>DELETE MOVIE</button>
        </Link> */}
    </div>
  )
}

export default MovieTierList
