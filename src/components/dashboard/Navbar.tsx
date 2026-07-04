import { Bell, Search } from "lucide-react";
import { getCurrentUser } from "../../services/authServices";

const Navbar = () => {

    const user = getCurrentUser()

    return (
        <header className="flex h-18 items-center justify-between border-b border-gray-200 bg-white px-3">
            <div className="relative w-96">
                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 outline-gray-100"
                />

                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-xl border py-2 pl-10 pr-4 outline-none focus:border-amber-500"
                />
            </div>

            <div className="flex items-center gap-6">
                <button className="relative">
                    <Bell />
                    <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-amber-500"></span>
                </button>

                <div className="flex items-center gap-3">
                    {user?.avatar ? (
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="h-10 w-10 rounded-full object-cover"
                        />
                    ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white font-semibold">
                            {user?.name?.charAt(0).toUpperCase()}
                        </div>
                    )}

                    <div>
                        <p className="font-semibold">{user?.name}</p>
                        <p className="text-sm text-gray-500 capitalize">
                            {user?.role}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;