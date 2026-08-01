import { NavLink } from "react-router-dom";
import { getCurrentUser } from "../../services/authServices";
import { adminMenu, customerMenu, dealerMenu } from "./menu";
import { LogOut, X } from "lucide-react";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const user = getCurrentUser();

    const menu =
        user?.role === "admin"
            ? adminMenu
            : user?.role === "customer"
              ? customerMenu
              : dealerMenu;

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 md:hidden"
                    onClick={onClose}
                />
            )}
            <aside
                className={`fixed inset-y-0 left-0 z-50 flex h-screen w-72 flex-col border-r border-gray-200 bg-white
                    transition-transform duration-300
                    lg:static lg:translate-x-0
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                {/* Logo */}
                <div className="flex items-center justify-between border-b border-gray-300 p-5">
                    <h1 className="text-2xl font-bold">
                        Drive<span className="text-amber-500">Hub</span>
                    </h1>

                    {/* Close button - mobile only */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 md:hidden"
                        aria-label="Close sidebar"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-2 overflow-y-auto p-4">
                    {menu.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-md px-3 py-2 transition ${
                                        isActive
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
                    <button
                        type="button"
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-100"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;