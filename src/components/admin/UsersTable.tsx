import { useState } from "react";
import {
    MoreVertical,
    Eye,
    Pencil,
    Trash2,
} from "lucide-react";
import type { User } from "../../pages/admin/Users";

interface UsersTableProps {
    users: User[];
}

const roleColors: Record<string, string> = {
    admin: "bg-red-100 text-red-700",
    manager: "bg-blue-100 text-blue-700",
    employee: "bg-green-100 text-green-700",
};

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-gray-100 text-gray-700",
  suspended: "bg-red-100 text-red-700",
  pending: "bg-yellow-100 text-yellow-700",
};

const UsersTable = ({ users }: UsersTableProps) => {

    const [openMenu, setOpenMenu] = useState<string | null>(null);

    return (
        <div className="mt-4 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto border border-gray-200 bg-white">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-50">
                        <tr className="text-left text-sm font-semibold text-gray-600">
                            <th className="border border-gray-200 px-6 py-4">User</th>
                            <th className="border border-gray-200 px-6 py-4">Email</th>
                            <th className="border border-gray-200 px-6 py-4">Phone</th>
                            <th className="border border-gray-200 px-6 py-4">Role</th>
                            <th className="border border-gray-200 px-6 py-4">Status</th>
                            <th className="border border-gray-200 px-6 py-4">Joined On</th>
                            <th className="border border-gray-200 px-6 py-4 text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr
                                    key={user._id}
                                    className="transition-colors duration-200 hover:bg-gray-50"
                                >
                                    {/* Employee */}
                                    <td className="border border-gray-200 px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                                                {user.name.charAt(0).toUpperCase()}
                                            </div>

                                            <div>
                                                <p className="font-semibold text-gray-900">
                                                    {user.name}
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    ID: {user._id.slice(-6)}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Email */}
                                    <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-gray-700">
                                        {user.email}
                                    </td>

                                    {/* Phone */}
                                    <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-gray-700">
                                        {user.phone}
                                    </td>

                                    {/* Role */}
                                    <td className="border border-gray-200 px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${roleColors[user.role] ??
                                                "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {user.role}
                                        </span>
                                    </td>
                                    {/* Status */}
                                    <td className="border border-gray-200 px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${statusColors[user.status] ?? "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    {/* Joined Date */}
                                    <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-gray-600">
                                        {new Date(user.joinedDate).toLocaleDateString()}
                                    </td>

                                    {/* Actions */}
                                    <td className="relative border border-gray-200 px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                className="rounded-lg p-2 hover:bg-gray-100"
                                                title="View User"
                                            >
                                                <Eye size={18} />
                                            </button>

                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setOpenMenu(
                                                        openMenu === user._id ? null : user._id
                                                    );
                                                }}
                                                className="rounded-lg p-2 transition hover:bg-gray-100"
                                            >
                                                <MoreVertical size={18} />
                                            </button>

                                            {openMenu === user._id && (
                                                <div className="absolute right-6 top-12 z-50 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
                                                    <button
                                                        onClick={() => {
                                                            // handleView(user)
                                                            setOpenMenu(null);
                                                        }}
                                                        className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50"
                                                    >
                                                        <Eye size={16} />
                                                        View Details
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            // handleEdit(user)
                                                            setOpenMenu(null);
                                                        }}
                                                        className="flex w-full items-center gap-3 px-4 py-3 text-sm text-blue-600 hover:bg-blue-50"
                                                    >
                                                        <Pencil size={16} />
                                                        Edit User
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            // handleDelete(user._id)
                                                            setOpenMenu(null);
                                                        }}
                                                        className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                                                    >
                                                        <Trash2 size={16} />
                                                        Delete User
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="border border-gray-200 py-12 text-center text-gray-500"
                                >
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTable;