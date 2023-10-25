import { Form, Link } from '@remix-run/react'
import { User } from "@prisma/client";
import styles from "./UserList.css";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

const UserList = ({ users }: { users: User[] }, { delDisplay }: {delDisplay: string}) => {
  return (
    <div>
      {users.map((user) => (
        <div className="user-list" key={user.user_id}>
          <div  className="delete" >
            <Form method="delete" >
           		<input title="BM" type={"hidden"} value={user.user_id} name="id" />
           		<button type="submit">X</button>
             </Form>
          </div>  
          <div className="user">
            <p style={{color: "#434e62"}}>Name:</p>
            <p style={{color: "hsl(37, 100%, 81%)"}}>{user.name?.toUpperCase()}</p>
          </div>
          <div className="user">
            <p style={{color: "#434e62"}}>Email:</p>
            <p style={{color: "hsl(37, 100%, 81%)"}}>{user.email}</p>
          </div>
          {/* Link to view user details */}
          <div className='mButton'>
            <Link to={`/movies/${user.user_id}`}>
              <button>
                <img
                src="/film-reel.png" // Path to your image in the "public" folder
                alt="M" // Alt text for accessibility
                />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}



export default UserList
