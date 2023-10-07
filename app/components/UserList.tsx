import { Form, Link } from '@remix-run/react'
import { User } from "@prisma/client";
import styles from "./UserList.css";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

const UserList = ({users}: { users: User[] }) => {
  return (
    <div>
      {users.map((user) => (
        <div className="user-list" key={user.user_id}>
          <div className="user">
            <p style={{color: "#434e62"}}>Name:</p>
            <p style={{color: "hsl(37, 100%, 81%)"}}>{user.name?.toUpperCase()}</p>
          </div>
          <div className="user">
            <p style={{color: "#434e62"}}>Email:</p>
            <p style={{color: "hsl(37, 100%, 81%)"}}>{user.email}</p>
          </div>
          {/* Link to view user details */}
          <div>
            <Link to={`/movies/${user.user_id}`}>
              <button> Movie List </button>
            </Link>
          </div>

          {/* Form for user deletion */}
          {/* <Form method="delete">
            <input title="UserId" type="hidden" value={user.id} name="id" />
            <button type="submit">DELETE</button>
          </Form> */}
        </div>
      ))}
    </div>
  )
}



export default UserList
