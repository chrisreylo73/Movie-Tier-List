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
               <p>S</p>
            </div>
            <div className="A" style={{backgroundColor: ""}}>
               <p>A</p>
            </div>
            <div className="B">
               <p>B</p>
            </div>
            <div className="C">
               <p>C</p>
            </div>
            <div className="D">
               <p>D</p>
            </div>
        </div>
        {/* <Link to={`/`}>
          <button style={{ borderRadius: "5px 5px 15px 15px" }}>HOME</button>
        </Link> */}
        <Link to={`/`}>
          <button style={{ borderRadius: "5px 5px 5px 15px" }}>ADD MOVIE</button>
        </Link>
        <Link to={`/`}>
          <button style={{ borderRadius: "5px 5px 15px 5px" }}>DELETE MOVIE</button>
        </Link>
    </div>
  )
}

export default MovieTierList
