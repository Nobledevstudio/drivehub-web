import { useState } from "react";
import {
    MoreVertical,
    Eye,
    CheckCircle,
    XCircle,
    Trash2,
} from "lucide-react";

export interface Purchase {
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
        pricing?: {
            buy?: number;
            rent?: number;
        };
    } | null;

    dealer:
        | string
        | {
              _id: string;
              name: string;
              email: string;
          };

    status: string;
    paymentStatus: string;
    purchaseDate: string;
    createdAt: string;
    updatedAt: string;
}

interface PurchasesTableProps {
    purchases: Purchase[];
}

const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-700",
    confirmed: "bg-blue-100 text-blue-700",
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

const formatPrice = (price?: number) => {
    if (price === undefined || price === null) {
        return "-";
    }

    return price.toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
    });
};

const PurchasesTable = ({ purchases }: PurchasesTableProps) => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (id: string) => {
        setOpenMenu((current) => (current === id ? null : id));
    };

    const getDealerName = (dealer: Purchase["dealer"]) => {
        if (typeof dealer === "string") {
            return dealer;
        }

        return dealer?.name ?? "-";
    };

    return (
        <div className="mt-4 w-full rounded-xl border border-gray-200 bg-white shadow-sm">

            {/* ========================================================= */}
            {/* DESKTOP TABLE - LG AND ABOVE */}
            {/* ========================================================= */}

            <div className="hidden w-full lg:block">
                <div className="w-full overflow-x-auto">
                    <table className="w-full table-fixed border-collapse">
                        <thead className="bg-gray-50">
                            <tr className="text-left text-sm font-semibold text-gray-600">

                                {/* Customer - visible LG, hidden XL */}
                                <th className="w-[22%] border border-gray-200 px-4 py-4">
                                    Customer
                                </th>

                                {/* Vehicle */}
                                <th className="w-[28%] border border-gray-200 px-4 py-4">
                                    Vehicle
                                </th>

                                {/* Dealer */}
                                <th className="w-[18%] border border-gray-200 px-4 py-4">
                                    Dealer
                                </th>

                                {/* Purchase Date - visible LG, hidden XL */}
                                <th className="w-[15%] border border-gray-200 px-4 py-4 xl:hidden">
                                    Purchase Date
                                </th>

                                {/* Status */}
                                <th className="hidden w-[12%] border border-gray-200 px-4 py-4 xl:table-cell">
                                    Status
                                </th>

                                {/* Payment */}
                                <th className="hidden w-[12%] border border-gray-200 px-4 py-4 xl:table-cell">
                                    Payment
                                </th>

                                {/* Actions */}
                                <th className="w-17.5 border border-gray-200 px-3 py-4 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {purchases.length > 0 ? (
                                purchases.map((purchase) => (
                                    <tr
                                        key={purchase._id}
                                        className="transition-colors hover:bg-gray-50"
                                    >
                                        {/* ================= CUSTOMER ================= */}

                                        <td className="border border-gray-200 px-4 py-4">
                                            <div className="flex min-w-0 items-center gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                                                    {purchase.user?.name
                                                        ?.charAt(0)
                                                        .toUpperCase() ?? "U"}
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="truncate font-semibold text-gray-900">
                                                        {purchase.user?.name ??
                                                            "Unknown User"}
                                                    </p>

                                                    <p
                                                        className="mt-1 max-w-40 truncate text-xs text-gray-500"
                                                        title={
                                                            purchase.user?.email
                                                        }
                                                    >
                                                        {purchase.user?.email ??
                                                            "No email"}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* ================= VEHICLE ================= */}

                                        <td className="border border-gray-200 px-4 py-4">
                                            {purchase.car ? (
                                                <div className="flex min-w-0 items-center gap-3">
                                                    <img
                                                        src={
                                                            purchase.car
                                                                .images?.[0]
                                                                ?.url ||
                                                            "https://placehold.co/80x60?text=Car"
                                                        }
                                                        alt={`${purchase.car.brand} ${purchase.car.model}`}
                                                        className="h-14 w-20 shrink-0 rounded-lg border border-gray-200 object-cover"
                                                    />

                                                    <div className="min-w-0">
                                                        <p className="truncate font-semibold text-gray-900">
                                                            {
                                                                purchase.car
                                                                    .brand
                                                            }{" "}
                                                            {
                                                                purchase.car
                                                                    .model
                                                            }
                                                        </p>

                                                        <p className="mt-1 truncate text-sm text-gray-500">
                                                            {
                                                                purchase.car
                                                                    .year
                                                            }{" "}
                                                            • ID:{" "}
                                                            {purchase.car._id.slice(
                                                                -6
                                                            )}
                                                        </p>

                                                        <p className="mt-1 truncate text-xs text-gray-400">
                                                            {formatPrice(
                                                                purchase.car
                                                                    .pricing
                                                                    ?.buy
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

                                        {/* ================= DEALER ================= */}

                                        <td className="border border-gray-200 px-4 py-4">
                                            <div className="min-w-0">
                                                <p className="truncate font-medium text-gray-800">
                                                    {getDealerName(
                                                        purchase.dealer
                                                    )}
                                                </p>

                                                {typeof purchase.dealer !==
                                                    "string" &&
                                                    purchase.dealer?.email && (
                                                        <p className="mt-1 truncate text-xs text-gray-500">
                                                            {
                                                                purchase.dealer
                                                                    .email
                                                            }
                                                        </p>
                                                    )}
                                            </div>
                                        </td>

                                        {/* ================= PURCHASE DATE ================= */}

                                        <td className="whitespace-nowrap border border-gray-200 px-4 py-4 text-sm text-gray-600 xl:hidden">
                                            {formatDate(
                                                purchase.purchaseDate
                                            )}
                                        </td>

                                        {/* ================= STATUS ================= */}

                                        <td className=" hidden border border-gray-200 px-4 py-4 xl:table-cell">
                                            <span
                                                className={`inline-flex whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium capitalize ${
                                                    statusColors[
                                                        purchase.status
                                                    ] ??
                                                    "bg-gray-100 text-gray-700"
                                                }`}
                                            >
                                                {purchase.status}
                                            </span>
                                        </td>

                                        {/* ================= PAYMENT ================= */}

                                        <td className="hidden border border-gray-200 px-4 py-4 xl:table-cell">
                                            <span
                                                className={`inline-flex whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium capitalize ${
                                                    paymentColors[
                                                        purchase.paymentStatus
                                                    ] ??
                                                    "bg-gray-100 text-gray-700"
                                                }`}
                                            >
                                                {purchase.paymentStatus}
                                            </span>
                                        </td>

                                        {/* ================= ACTIONS ================= */}

                                        <td className="relative border border-gray-200 px-2 py-4">
                                            <div className="flex items-center justify-center">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        toggleMenu(
                                                            purchase._id
                                                        )
                                                    }
                                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                                                    title="More Actions"
                                                >
                                                    <MoreVertical size={19} />
                                                </button>

                                                {openMenu ===
                                                    purchase._id && (
                                                    <div
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                        className="absolute right-2 top-12 z-100 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
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
                                                            View Purchase
                                                        </button>

                                                        {purchase.status ===
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
                                                                    Purchase
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
                                                                    Purchase
                                                                </button>
                                                            </>
                                                        )}

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                setOpenMenu(
                                                                    null
                                                                )
                                                            }
                                                            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 transition hover:bg-red-50"
                                                        >
                                                            <Trash2 size={16} />
                                                            Delete
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
                                        colSpan={7}
                                        className="py-12 text-center text-gray-500"
                                    >
                                        No purchases found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ========================================================= */}
            {/* MOBILE / TABLET CARDS */}
            {/* ========================================================= */}

            <div className="space-y-3 p-3 sm:p-4 lg:hidden">
                {purchases.length > 0 ? (
                    purchases.map((purchase) => (
                        <div
                            key={purchase._id}
                            className="relative overflow-visible rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-300"
                        >
                            {/* Header */}

                            <div className="flex items-start justify-between gap-3">
                                <div className="flex min-w-0 flex-1 items-center gap-3">
                                    {purchase.car?.images?.[0]?.url ? (
                                        <img
                                            src={
                                                purchase.car.images[0].url
                                            }
                                            alt={`${purchase.car.brand} ${purchase.car.model}`}
                                            className="h-14 w-20 shrink-0 rounded-lg border border-gray-200 object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400">
                                            No Image
                                        </div>
                                    )}

                                    <div className="min-w-0">
                                        <p className="wrap-break-word font-semibold text-gray-900">
                                            {purchase.car
                                                ? `${purchase.car.brand} ${purchase.car.model}`
                                                : "Vehicle unavailable"}
                                        </p>

                                        {purchase.car && (
                                            <p className="mt-1 text-sm text-gray-500">
                                                {purchase.car.year}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Actions */}

                                <div className="relative shrink-0">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleMenu(purchase._id)
                                        }
                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100"
                                        title="More Actions"
                                    >
                                        <MoreVertical size={19} />
                                    </button>

                                    {openMenu === purchase._id && (
                                        <div
                                            onClick={(e) =>
                                                e.stopPropagation()
                                            }
                                            className="absolute right-0 top-10 z-100 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
                                        >
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenMenu(null)
                                                }
                                                className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50"
                                            >
                                                <Eye size={16} />
                                                View Purchase
                                            </button>

                                            {purchase.status === "pending" && (
                                                <>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(null)
                                                        }
                                                        className="flex w-full items-center gap-3 px-4 py-3 text-sm text-green-600 hover:bg-green-50"
                                                    >
                                                        <CheckCircle size={16} />
                                                        Approve Purchase
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenMenu(null)
                                                        }
                                                        className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                                                    >
                                                        <XCircle size={16} />
                                                        Reject Purchase
                                                    </button>
                                                </>
                                            )}

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setOpenMenu(null)
                                                }
                                                className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                                            >
                                                <Trash2 size={16} />
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Customer */}

                            <div className="mt-4 border-t border-gray-100 pt-4">
                                <p className="text-xs font-medium text-gray-500">
                                    Customer
                                </p>

                                <p className="mt-1 text-sm font-medium text-gray-800">
                                    {purchase.user?.name ?? "Unknown User"}
                                </p>

                                <p className="mt-1 wrap-break-word text-sm text-gray-500">
                                    {purchase.user?.email ?? "No email"}
                                </p>
                            </div>

                            {/* Dealer */}

                            <div className="mt-4 border-t border-gray-100 pt-4">
                                <p className="text-xs font-medium text-gray-500">
                                    Dealer
                                </p>

                                <p className="mt-1 wrap-break-word text-sm font-medium text-gray-800">
                                    {getDealerName(purchase.dealer)}
                                </p>
                            </div>

                            {/* Price + Date */}

                            <div className="mt-4 grid grid-cols-1 gap-4 border-t border-gray-100 pt-4 sm:grid-cols-2">
                                <div>
                                    <p className="text-xs font-medium text-gray-500">
                                        Purchase Price
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-gray-900">
                                        {formatPrice(
                                            purchase.car?.pricing?.buy
                                        )}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium text-gray-500">
                                        Purchase Date
                                    </p>

                                    <p className="mt-1 text-sm text-gray-700">
                                        {formatDate(purchase.purchaseDate)}
                                    </p>
                                </div>
                            </div>

                            {/* Status + Payment */}

                            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                                <div>
                                    <p className="text-xs font-medium text-gray-500">
                                        Status
                                    </p>

                                    <span
                                        className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-medium capitalize ${
                                            statusColors[
                                                purchase.status
                                            ] ??
                                            "bg-gray-100 text-gray-700"
                                        }`}
                                    >
                                        {purchase.status}
                                    </span>
                                </div>

                                <div className="text-right">
                                    <p className="text-xs font-medium text-gray-500">
                                        Payment
                                    </p>

                                    <span
                                        className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-medium capitalize ${
                                            paymentColors[
                                                purchase.paymentStatus
                                            ] ??
                                            "bg-gray-100 text-gray-700"
                                        }`}
                                    >
                                        {purchase.paymentStatus}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-12 text-center text-gray-500">
                        No purchases found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default PurchasesTable;