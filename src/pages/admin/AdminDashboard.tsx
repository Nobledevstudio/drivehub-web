import { getCurrentUser } from "../../services/authServices"

const AdminDashboard = () => {

   const user = getCurrentUser()

  return (
       <h1>Welcome {user?.name}</h1>
  )
}

export default AdminDashboard