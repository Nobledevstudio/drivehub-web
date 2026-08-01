import { Outlet } from "react-router-dom"
import Navbar from "../components/dashboard/Navbar"
import Sidebar from "../components/dashboard/Sidebar"
import { useState } from "react";


const DashboardLayout = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex flex-1 flex-col overflow-hidden">
            <Navbar onMenuClick={() => setSidebarOpen(true)} />
            <main className="flex-1 overflow-y-auto p-4">
               <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default DashboardLayout