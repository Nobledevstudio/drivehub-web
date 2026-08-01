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

    const toggleMenu = (id: string) => {
        setOpenMenu(openMenu === id ? null : id);
    };

    return (
        <div className="mt-4 rounded-xl border border-gray-200 bg-white shadow-sm">

            {/* ================================================= */}
            {/* DESKTOP TABLE */}
            {/* ================================================= */}

            <div className="hidden lg:block">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-50">
                            <tr className="text-left text-sm font-semibold text-gray-600">
                                <th className="w-[28%] border border-gray-200 px-5 py-4">
                                    User
                                </th>

                                <th className="w-[32%] border border-gray-200 px-5 py-4">
                                    Contact
                                </th>

                                <th className="w-[15%] border border-gray-200 px-5 py-4">
                                    Status
                                </th>

                                <th className="w-[15%] border border-gray-200 px-5 py-4">
                                    Joined On
                                </th>

                                <th className="w-24 border border-gray-200 px-4 py-4 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr
                                        key={user._id}
                                        className="transition-colors hover:bg-gray-50"
                                    >
                                        {/* User */}
                                        <td className="border border-gray-200 px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                                                    {user.name
                                                        .charAt(0)
                                                        .toUpperCase()}
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="truncate font-semibold text-gray-900">
                                                        {user.name}
                                                    </p>

                                                    <p className="mt-1 text-xs text-gray-500">
                                                        ID: {user._id.slice(-6)}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Contact */}
                                        <td className="border border-gray-200 px-5 py-4">
                                            <div className="min-w-0">
                                                <p
                                                    className="max-w-70 truncate text-sm font-medium text-gray-700"
                                                    title={user.email}
                                                >
                                                    {user.email}
                                                </p>

                                                <p className="mt-1 text-sm text-gray-500">
                                                    {user.phone}
                                                </p>

                                                <span
                                                    className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium capitalize ${
                                                        roleColors[user.role] ??
                                                        "bg-gray-100 text-gray-700"
                                                    }`}
                                                >
                                                    {user.role}
                                                </span>
                                            </div>
                                        </td>

                                        {/* Status */}
                                        <td className="border border-gray-200 px-5 py-4">
                                            <span
                                                className={`inline-flex rounded-full px-3 py-1 text-xs font-medium capitalize ${
                                                    statusColors[user.status] ??
                                                    "bg-gray-100 text-gray-700"
                                                }`}
                                            >
                                                {user.status}
                                            </span>
                                        </td>

                                        {/* Joined On */}
                                        <td className="whitespace-nowrap border border-gray-200 px-5 py-4 text-sm text-gray-600">
                                            {new Date(
                                                user.joinedDate
                                            ).toLocaleDateString()}
                                        </td>

                                        {/* Actions */}
                                        <td className="relative border border-gray-200 px-4 py-4">
                                            <div className="flex justify-center">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        toggleMenu(user._id)
                                                    }
                                                    className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                                                    title="More Actions"
                                                >
                                                    <MoreVertical size={19} />
                                                </button>

                                                {openMenu === user._id && (
                                                    <div
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                        className="absolute right-4 top-12 z-50 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
                                                    >
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setOpenMenu(null)
                                                            }
                                                            className="flex w-full items-center gap-3 px-4 py-3 text-sm transition hover:bg-gray-50"
                                                        >
                                                            <Eye size={16} />
                                                            View Details
                                                        </button>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setOpenMenu(null)
                                                            }
                                                            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-blue-600 transition hover:bg-blue-50"
                                                        >
                                                            <Pencil size={16} />
                                                            Edit User
                                                        </button>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setOpenMenu(null)
                                                            }
                                                            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 transition hover:bg-red-50"
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
                                        colSpan={5}
                                        className="py-12 text-center text-gray-500"
                                    >
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ================================================= */}
            {/* MOBILE / TABLET CARDS */}
            {/* ================================================= */}

            <div className="space-y-3 p-3 lg:hidden sm:p-4">
                {users.length > 0 ? (
                    users.map((user) => (
                        <div
                            key={user._id}
                            className="relative rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-300"
                        >
                            {/* Top section */}
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex min-w-0 items-center gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                                        {user.name
                                            .charAt(0)
                                            .toUpperCase()}
                                    </div>

                                    <div className="min-w-0">
                                        <p className="truncate font-semibold text-gray-900">
                                            {user.name}
                                        </p>

                                        <p className="mt-1 text-xs text-gray-500">
                                            ID: {user._id.slice(-6)}
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile actions */}
                                <div className="relative shrink-0">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleMenu(user._id)
                                        }
                                        className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100"
                                        title="More Actions"
                                    >
                                        <MoreVertical size={19} />
                                    </button>

                                    {openMenu === user._id && (
                                        <div
                                            onClick={(e) =>
                                                e.stopPropagation()
                                            }
                                            className="absolute right-0 top-10 z-50 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
                                        >
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenMenu(null)
                                                }
                                                className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50"
                                            >
                                                <Eye size={16} />
                                                View Details
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenMenu(null)
                                                }
                                                className="flex w-full items-center gap-3 px-4 py-3 text-sm text-blue-600 hover:bg-blue-50"
                                            >
                                                <Pencil size={16} />
                                                Edit User
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenMenu(null)
                                                }
                                                className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                                            >
                                                <Trash2 size={16} />
                                                Delete User
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="mt-4 border-t border-gray-100 pt-4">
                                <p className="truncate text-sm font-medium text-gray-700">
                                    {user.email}
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    {user.phone}
                                </p>

                                <span
                                    className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-xs font-medium capitalize ${
                                        roleColors[user.role] ??
                                        "bg-gray-100 text-gray-700"
                                    }`}
                                >
                                    {user.role}
                                </span>
                            </div>

                            {/* Bottom information */}
                            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Status
                                    </p>

                                    <span
                                        className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-medium capitalize ${
                                            statusColors[user.status] ??
                                            "bg-gray-100 text-gray-700"
                                        }`}
                                    >
                                        {user.status}
                                    </span>
                                </div>

                                <div className="text-right">
                                    <p className="text-xs text-gray-500">
                                        Joined
                                    </p>

                                    <p className="mt-1 text-sm text-gray-700">
                                        {new Date(
                                            user.joinedDate
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-12 text-center text-gray-500">
                        No users found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default UsersTable