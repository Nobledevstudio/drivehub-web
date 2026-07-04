import { NavLink } from "react-router-dom";
import { getCurrentUser } from "../../services/authServices";
import { adminMenu, customerMenu, dealerMenu } from "./menu";
import { LogOut } from "lucide-react";


const Sidebar = () => {

    const user = getCurrentUser();
    const menu = user?.role === "admin" ? adminMenu: user?.role === "customer"  ? customerMenu : dealerMenu;

    return (
        <aside className="flex h-screen w-72 flex-col border-r border-gray-200 bg-white">
            {/* Logo */}
            <div className="border-b border-gray-300 p-5">
                <h1 className="text-2xl font-bold">
                    Drive<span className="text-amber-500">Hub</span>
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2 p-4">
                {menu.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-md px-3 py-2 transition ${isActive
                                    ? "bg-amber-400 text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`
                            }
                        >
                            <Icon size={20} />
                            <span>{item.name}</span>
                        </NavLink>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4">
                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-100">
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;