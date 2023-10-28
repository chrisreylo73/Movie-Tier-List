import { NavLink } from '@remix-run/react'
import styles from "app/styles/NavBar.css";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

const NavBar = ({userId}: {userId: string}) => {
   return (
      <nav id="Nav-Bar">
     <ul>
     <li className="nav-item">
      <NavLink to={`/movies/${userId}/overall`} >OVERALL</NavLink>
     </li>
     <li className="nav-item">
      <NavLink to={`/movies/${userId}/story`} >STORY</NavLink>
     </li>
     <li className="nav-item">
      <NavLink to={`/movies/${userId}/characters`} >CHARACTERS</NavLink>
     </li>
     <li className="nav-item">
      <NavLink to={`/movies/${userId}/acting`}>ACTING</NavLink>
      </li>
     <li className="nav-item">
      <NavLink to={`/movies/${userId}/action`} >ACTION</NavLink>
     </li>
     <li className="nav-item">
      <NavLink to={`/movies/${userId}/cinematography`} >CINEMATOGRAPHY</NavLink>
     </li>
     </ul>
   </nav>
  )
}

export default NavBar
