import { getCurrentUser } from "../../services/authServices"

const CustomerDashboard = () => {

  const user = getCurrentUser()

  return (
   <div>
      <h1>Welcome {user?.name}</h1>
    </div>
  )
}

export default CustomerDashboard