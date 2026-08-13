import { useState } from "react";
import {
    MoreVertical,
    Eye,
    CheckCircle,
    XCircle,
} from "lucide-react";

export interface Booking {
    _id: string;
    user: {
        _id: string;
        name: string;
        email: string;
    } | null;
    car: {
        _id: string;
        brand: string;
        model: string;
        year: number;
        images?: {
            url: string;
        }[];
    } | null;
    dealer: string;
    startDate: string;
    endDate: string;
    status: string;
    paymentStatus: string;
    createdAt: string;
    updatedAt: string;
}

interface BookingsTableProps {
    bookings: Booking[];
}

const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-700",
    confirmed: "bg-blue-100 text-blue-700",
    active: "bg-green-100 text-green-700",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
    rejected: "bg-red-100 text-red-700",
};

const paymentColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-700",
    completed: "bg-green-100 text-green-700",
    failed: "bg-red-100 text-red-700",
};

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-NG", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
};

const BookingsTable = ({ bookings }: BookingsTableProps) => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (id: string) => {
        setOpenMenu(openMenu === id ? null : id);
    };

    const getRentalDays = (startDate: string, endDate: string) => {
        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime();

        return Math.max(1,
            Math.ceil((end - start) / (1000 * 60 * 60 * 24))
        );
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
                                <th className="w-[24%] border border-gray-200 px-5 py-4">
                                    Customer
                                </th>

                                <th className="w-[24%] border border-gray-200 px-5 py-4">
                                    Vehicle
                                </th>

                                <th className="w-[20%] border border-gray-200 px-5 py-4">
                                    Rental Period
                                </th>

                                <th className="hidden w-[12%] border border-gray-200 px-5 py-4 xl:table-cell">
                                    Status
                                </th>

                                <th className="hidden w-[12%] border border-gray-200 px-5 py-4 xl:table-cell">
                                    Payment
                                </th>

                                <th className="w-18 border border-gray-200 px-4 py-4 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {bookings.length > 0 ? (
                                bookings.map((booking) => (
                                    <tr
                                        key={booking._id}
                                        className="transition-colors hover:bg-gray-50"
                                    >
                                        {/* Customer */}
                                        <td className="border border-gray-200 px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                                                    {booking.user?.name
                                                        ?.charAt(0)
                                                        .toUpperCase() ?? "U"}
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="truncate font-semibold text-gray-900">
                                                        {booking.user?.name ??
                                                            "Unknown User"}
                                                    </p>

                                                    <p
                                                        className="mt-1 max-w-48 truncate text-xs text-gray-500"
                                                        title={
                                                            booking.user?.email
                                                        }
                                                    >
                                                        {booking.user?.email ??
                                                            "No email"}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Vehicle */}
                                        <td className="border border-gray-200 px-5 py-4">
                                            {booking.car ? (
                                                <div className="flex items-center gap-3">
                                                    {booking.car.images?.[0]
                                                        ?.url ? (
                                                        <img
                                                            src={
                                                                booking.car
                                                                    .images[0]
                                                                    .url
                                                            }
                                                            alt={`${booking.car.brand} ${booking.car.model}`}
                                                            className="h-12 w-16 rounded-lg object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex h-12 w-16 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400">
                                                            No Image
                                                        </div>
                                                    )}

                                                    <div className="min-w-0">
                                                        <p className="truncate font-semibold text-gray-900">
                                                            {booking.car.brand}{" "}
                                                            {booking.car.model}
                                                        </p>

                                                        <p className="mt-1 text-xs text-gray-500">
                                                            {booking.car.year} •
                                                            ID:{" "}
                                                            {booking.car._id.slice(
                                                                -6
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="text-sm text-gray-500">
                                                    Vehicle unavailable
                                                </span>
                                            )}
                                        </td>

                                        {/* Rental Period */}
                                        <td className="border border-gray-200 px-5 py-4">
                                            <div>
                                                <p className="text-sm font-semibold text-gray-800">
                                                    {formatDate(booking.startDate)}
                                                    <span className="mx-2 text-gray-400">→</span>
                                                    {formatDate(booking.endDate)}
                                                </p>

                                                <p className="mt-1 text-xs text-gray-500">
                                                    {getRentalDays(booking.startDate, booking.endDate)}{" "}
                                                    {getRentalDays(booking.startDate, booking.endDate) === 1
                                                        ? "day"
                                                        : "days"}{" "}
                                                    rental
                                                </p>
                                            </div>
                                        </td>


                                        {/* Status */}
                                        <td className="hidden border border-gray-200 px-5 py-4 xl:table-cell">
                                            <span
                                                className={`inline-flex rounded-full px-3 py-1 text-xs font-medium capitalize ${statusColors[
                                                    booking.status
                                                ] ??
                                                    "bg-gray-100 text-gray-700"
                                                    }`}
                                            >
                                                {booking.status}
                                            </span>
                                        </td>

                                        {/* Payment */}
                                        <td className="hidden border border-gray-200 px-5 py-4 xl:table-cell">
                                            <span
                                                className={`inline-flex rounded-full px-3 py-1 text-xs font-medium capitalize ${paymentColors[
                                                    booking.paymentStatus
                                                ] ??
                                                    "bg-gray-100 text-gray-700"
                                                    }`}
                                            >
                                                {booking.paymentStatus}
                                            </span>
                                        </td>

                                        {/* Actions */}
                                        <td className="relative border border-gray-200 px-4 py-4">
                                            <div className="flex justify-center">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        toggleMenu(
                                                            booking._id
                                                        )
                                                    }
                                                    className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                                                    title="More Actions"
                                                >
                                                    <MoreVertical size={19} />
                                                </button>

                                                {openMenu === booking._id && (
                                                    <div
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                        className="absolute right-4 top-12 z-50 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
                                                    >
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setOpenMenu(
                                                                    null
                                                                )
                                                            }
                                                            className="flex w-full items-center gap-3 px-4 py-3 text-sm transition hover:bg-gray-50"
                                                        >
                                                            <Eye size={16} />
                                                            View Booking
                                                        </button>

                                                        {booking.status ===
                                                            "pending" && (
                                                                <>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() =>
                                                                            setOpenMenu(
                                                                                null
                                                                            )
                                                                        }
                                                                        className="flex w-full items-center gap-3 px-4 py-3 text-sm text-green-600 transition hover:bg-green-50"
                                                                    >
                                                                        <CheckCircle
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                        Approve
                                                                        Booking
                                                                    </button>

                                                                    <button
                                                                        type="button"
                                                                        onClick={() =>
                                                                            setOpenMenu(
                                                                                null
                                                                            )
                                                                        }
                                                                        className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 transition hover:bg-red-50"
                                                                    >
                                                                        <XCircle
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                        Reject
                                                                        Booking
                                                                    </button>
                                                                </>
                                                            )}
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
                                        className="py-12 text-center text-gray-500"
                                    >
                                        No bookings found.
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

            <div className="space-y-3 p-3 sm:p-4 lg:hidden">
                {bookings.length > 0 ? (
                    bookings.map((booking) => (
                        <div
                            key={booking._id}
                            className="relative rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-300"
                        >
                            {/* Top section */}
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex min-w-0 items-center gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                                        {booking.user?.name
                                            ?.charAt(0)
                                            .toUpperCase() ?? "U"}
                                    </div>

                                    <div className="min-w-0">
                                        <p className="truncate font-semibold text-gray-900">
                                            {booking.user?.name ??
                                                "Unknown User"}
                                        </p>

                                        <p className="mt-1 truncate text-xs text-gray-500">
                                            {booking.user?.email ?? "No email"}
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile actions */}
                                <div className="relative shrink-0">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleMenu(booking._id)
                                        }
                                        className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100"
                                        title="More Actions"
                                    >
                                        <MoreVertical size={19} />
                                    </button>

                                    {openMenu === booking._id && (
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
                                                View Booking
                                            </button>

                                            {booking.status === "pending" && (
                                                <>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(null)
                                                        }
                                                        className="flex w-full items-center gap-3 px-4 py-3 text-sm text-green-600 hover:bg-green-50"
                                                    >
                                                        <CheckCircle size={16} />
                                                        Approve Booking
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(null)
                                                        }
                                                        className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                                                    >
                                                        <XCircle size={16} />
                                                        Reject Booking
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Vehicle */}
                            <div className="mt-4 border-t border-gray-100 pt-4">
                                {booking.car ? (
                                    <div className="flex items-center gap-3">
                                        {booking.car.images?.[0]?.url ? (
                                            <img
                                                src={
                                                    booking.car.images[0].url
                                                }
                                                alt={`${booking.car.brand} ${booking.car.model}`}
                                                className="h-14 w-20 rounded-lg object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-14 w-20 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400">
                                                No Image
                                            </div>
                                        )}

                                        <div>
                                            <p className="font-semibold text-gray-900">
                                                {booking.car.brand}{" "}
                                                {booking.car.model}
                                            </p>

                                            <p className="mt-1 text-sm text-gray-500">
                                                {booking.car.year}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-sm text-gray-500">
                                        Vehicle unavailable
                                    </p>
                                )}
                            </div>

                            {/* Rental period */}
                            <div className="mt-4 border-t border-gray-100 pt-4">
                                <p className="text-xs text-gray-500">
                                    Rental Period
                                </p>

                                <p className="mt-1 text-sm font-medium text-gray-700">
                                    {formatDate(booking.startDate)} —{" "}
                                    {formatDate(booking.endDate)}
                                </p>
                            </div>

                            {/* Bottom information */}
                            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Status
                                    </p>

                                    <span
                                        className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-medium capitalize ${statusColors[booking.status] ??
                                            "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {booking.status}
                                    </span>
                                </div>

                                <div className="text-right">
                                    <p className="text-xs text-gray-500">
                                        Payment
                                    </p>

                                    <span
                                        className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-medium capitalize ${paymentColors[
                                            booking.paymentStatus
                                        ] ??
                                            "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {booking.paymentStatus}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-12 text-center text-gray-500">
                        No bookings found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingsTable;