import { Bell, Menu, Search } from "lucide-react";
import { getCurrentUser } from "../../services/authServices";

interface NavbarProps {
    onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
    const user = getCurrentUser();

    return (
        <header className="flex h-18 w-full items-center justify-between gap-3 border-b border-gray-200 bg-white px-3 sm:px-4 lg:px-6">
            {/* Left side */}
            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                {/* Mobile / Tablet Menu */}
                <button
                    type="button"
                    onClick={onMenuClick}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 lg:hidden"
                    aria-label="Toggle sidebar"
                >
                    <Menu size={21} />
                </button>

                {/* Search */}
                <div className="relative w-full max-w-96">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full rounded-xl border border-gray-200 py-2 pl-10 pr-3 text-sm outline-none transition focus:border-amber-500 sm:pr-4"
                    />
                </div>
            </div>

            {/* Right side */}
            <div className="flex shrink-0 items-center gap-3 sm:gap-5 lg:gap-6">
                {/* Notifications */}
                <button
                    type="button"
                    className="relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                    aria-label="Notifications"
                >
                    <Bell size={21} />

                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-amber-500" />
                </button>

                {/* User */}
                <div className="flex items-center gap-2 sm:gap-3">
                    {user?.avatar ? (
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="h-9 w-9 shrink-0 rounded-full object-cover sm:h-10 sm:w-10"
                        />
                    ) : (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-semibold text-white sm:h-10 sm:w-10">
                            {user?.name?.charAt(0).toUpperCase()}
                        </div>
                    )}

                    {/* User information - hide on small screens */}
                    <div className="hidden sm:block">
                        <p className="max-w-32 truncate text-sm font-semibold text-gray-900 lg:max-w-none">
                            {user?.name}
                        </p>

                        <p className="text-xs capitalize text-gray-500 sm:text-sm">
                            {user?.role}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;