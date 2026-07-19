import { useState } from "react";
import {
    MoreVertical,
    Eye,
    Pencil,
    Trash2,
} from "lucide-react";
import type { CarItem } from "../../data/carData";

interface CarsTableProps {
    cars: CarItem[];
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

const VechiclesTables = ({ cars }: CarsTableProps) => {

    const [openMenu, setOpenMenu] = useState<string | null>(null);

    return (
        <div className="mt-4 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto border border-gray-200 bg-white">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-50">
                        <tr className="text-left text-sm font-semibold text-gray-600">
                            <th className="border border-gray-200 px-6 py-4">Vehicles</th>
                            <th className="border border-gray-200 px-6 py-4">Dealer</th>
                            <th className="border border-gray-200 px-6 py-4">Type</th>
                            <th className="border border-gray-200 px-6 py-4">Price</th>
                            <th className="border border-gray-200 px-6 py-4">Status</th>
                            <th className="border border-gray-200 px-6 py-4">Listed On</th>
                            <th className="border border-gray-200 px-6 py-4 text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {cars.length > 0 ? (
                            cars.map((car) => (
                                <tr
                                    key={car._id}
                                    className="transition-colors duration-200 hover:bg-gray-50">
                                    {/* Cars */}
                                    <td className="border border-gray-200 px-6 py-4">
                                        <div className="relative flex items-center gap-4">
                                            <div className="h-14 w-20 overflow-hidden rounded-lg border border-gray-200">
                                                {car.images?.[0]?.url ? (
                                                    <img
                                                        src={car.images[0].url}
                                                        alt={`${car.brand} ${car.model}`}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center bg-amber-100 text-xl font-bold text-amber-600 uppercase">
                                                        {car.brand.charAt(4)}
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">
                                                    {car.brand} {car.model}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    ID: {car._id.slice(-6)}
                                                </p>
                                                <span
                                                    className={`absolute top-[8] right-1 rounded px-1.5 py-0.5 text-[9px] font-semibold text-white ${car.listingType === "buy"
                                                        ? "bg-green-600"
                                                        : car.listingType === "rent"
                                                            ? "bg-amber-500"
                                                            : "bg-blue-500"
                                                        }`}
                                                >
                                                    {car.listingType.toUpperCase()}
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Dealer Info */}
                                    <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-gray-700">
                                        {car.dealer.name}
                                    </td>

                                    {/* Phone */}
                                    <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-gray-700">
                                        {car.status}
                                    </td>

                                    {/* Role */}
                                    <td className="border border-gray-200 px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${roleColors[car.brand] ??
                                                "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {car.color}
                                        </span>
                                    </td>
                                    {/* Status */}
                                    <td className="border border-gray-200 px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${statusColors[car.status] ?? "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {car.status}
                                        </span>
                                    </td>
                                    {/* Joined Date */}
                                    <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-gray-600">
                                        {car.createdAt}
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
                                                        openMenu === car._id ? null : car._id
                                                    );
                                                }}
                                                className="rounded-lg p-2 transition hover:bg-gray-100"
                                            >
                                                <MoreVertical size={18} />
                                            </button>

                                            {openMenu === car._id && (
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

export default VechiclesTables;