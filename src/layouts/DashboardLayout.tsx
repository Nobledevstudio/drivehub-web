import { Outlet } from "react-router-dom"
import Navbar from "../components/dashboard/Navbar"
import Sidebar from "../components/dashboard/Sidebar"


const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
            <Navbar/>
            <main className="flex-1 overflow-y-auto p-4">
               <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default DashboardLayout