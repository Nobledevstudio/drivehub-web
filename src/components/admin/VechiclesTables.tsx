import { useState } from "react";
import {
  MoreVertical,
  Eye,
  CheckCircle,
  XCircle,
  Trash2,
} from "lucide-react";
import type { CarItem } from "../../data/carData";

interface VehiclesTableProps {
  cars: CarItem[];
}

const statusColors: Record<string, string> = {
  available: "bg-green-100 text-green-700",
  reserved: "bg-yellow-100 text-yellow-700",
  rented: "bg-blue-100 text-blue-700",
  sold: "bg-red-100 text-red-700",
  pending: "bg-yellow-100 text-yellow-700",
  rejected: "bg-red-100 text-red-700",
};

const VechiclesTables = ({ cars }: VehiclesTableProps) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (id: string) => {
    setOpenMenu((current) => (current === id ? null : id));
  };

  const getPrice = (car: CarItem) => {
    if (car.listingType === "buy") {
      return car.pricing?.buy;
    }

    if (car.listingType === "rent") {
      return car.pricing?.rent;
    }

    return car.pricing?.buy ?? car.pricing?.rent;
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

  const getStatusClass = (status?: string) => {
    return (
      statusColors[status ?? "available"] ??
      "bg-gray-100 text-gray-700"
    );
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
                {/* Vehicle */}
                <th className="w-[30%] border border-gray-200 px-4 py-4">
                  Vehicle
                </th>

                {/* Dealer */}
                <th className="w-[20%] border border-gray-200 px-4 py-4">
                  Dealer
                </th>

                {/* Pricing */}
                <th className="w-[18%] border border-gray-200 px-4 py-4">
                  Pricing
                </th>

                {/* Status */}
                <th className="w-[14%] border border-gray-200 px-4 py-4">
                  Status
                </th>

                {/* Listed On - Hidden on LG, visible on XL */}
                <th className="hidden w-[13%] border border-gray-200 px-4 py-4 xl:table-cell">
                  Listed On
                </th>

                {/* Actions - Always visible */}
                <th className="w-17.5 border border-gray-200 px-3 py-4 text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {cars.length > 0 ? (
                cars.map((car) => {
                  const price = getPrice(car);

                  return (
                    <tr
                      key={car._id}
                      className="transition-colors hover:bg-gray-50"
                    >
                      {/* ================= VEHICLE ================= */}
                      <td className="border border-gray-200 px-4 py-4">
                        <div className="flex min-w-0 items-center gap-3">
                          <img
                            src={
                              car.images?.[0]?.url ||
                              "https://placehold.co/80x60?text=Car"
                            }
                            alt={`${car.brand} ${car.model}`}
                            className="h-14 w-20 shrink-0 rounded-lg border border-gray-200 object-cover"
                          />

                          <div className="min-w-0">
                            <p className="truncate font-semibold text-gray-900">
                              {car.brand} {car.model}
                            </p>

                            <p className="mt-1 truncate text-sm text-gray-500">
                              {car.year} • {car.color}
                            </p>

                            <p className="mt-1 text-xs capitalize text-gray-400">
                              {car.listingType ?? "buy"}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* ================= DEALER ================= */}
                      <td className="border border-gray-200 px-4 py-4">
                        <div className="min-w-0">
                          <p className="truncate font-medium text-gray-800">
                            {car.dealer?.name || "-"}
                          </p>

                          {car.dealer?.email && (
                            <p className="mt-1 truncate text-sm text-gray-500">
                              {car.dealer.email}
                            </p>
                          )}
                        </div>
                      </td>

                      {/* ================= PRICING ================= */}
                      <td className="border border-gray-200 px-4 py-4">
                        <p className="truncate font-semibold text-gray-900">
                          {formatPrice(price)}
                        </p>

                        <p className="mt-1 text-xs capitalize text-gray-500">
                          {car.listingType === "rent"
                            ? "Rental"
                            : "Purchase"}
                        </p>
                      </td>

                      {/* ================= STATUS ================= */}
                      <td className="border border-gray-200 px-4 py-4">
                        <span
                          className={`inline-flex whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium capitalize ${getStatusClass(
                            car.status
                          )}`}
                        >
                          {car.status ?? "available"}
                        </span>
                      </td>

                      {/* ================= LISTED ON ================= */}
                      {/* Hidden on 1024px - 1279px */}
                      <td className="hidden whitespace-nowrap border border-gray-200 px-4 py-4 text-sm text-gray-600 xl:table-cell">
                        {car.createdAt
                          ? new Date(car.createdAt).toLocaleDateString()
                          : "-"}
                      </td>

                      {/* ================= ACTIONS ================= */}
                      <td className="relative w-17.5 border border-gray-200 px-2 py-4">
                        <div className="flex items-center justify-center">
                          <button
                            type="button"
                            onClick={() => toggleMenu(car._id)}
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                            title="More Actions"
                          >
                            <MoreVertical size={19} />
                          </button>

                          {openMenu === car._id && (
                            <div
                              onClick={(e) => e.stopPropagation()}
                              className="absolute right-2 top-12 z-100 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
                            >
                              <button
                                type="button"
                                onClick={() => setOpenMenu(null)}
                                className="flex w-full items-center gap-3 px-4 py-3 text-sm transition hover:bg-gray-50"
                              >
                                <Eye size={16} />
                                View Details
                              </button>

                              <button
                                type="button"
                                onClick={() => setOpenMenu(null)}
                                className="flex w-full items-center gap-3 px-4 py-3 text-sm text-green-600 transition hover:bg-green-50"
                              >
                                <CheckCircle size={16} />
                                Approve
                              </button>

                              <button
                                type="button"
                                onClick={() => setOpenMenu(null)}
                                className="flex w-full items-center gap-3 px-4 py-3 text-sm text-amber-600 transition hover:bg-amber-50"
                              >
                                <XCircle size={16} />
                                Reject
                              </button>

                              <button
                                type="button"
                                onClick={() => setOpenMenu(null)}
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
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="py-12 text-center text-gray-500"
                  >
                    No vehicles found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE / TABLET CARDS - BELOW LG */}
      {/* ========================================================= */}

      <div className="space-y-3 p-3 sm:p-4 lg:hidden">
        {cars.length > 0 ? (
          cars.map((car) => {
            const price = getPrice(car);

            return (
              <div
                key={car._id}
                className="relative overflow-visible rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-300"
              >
                {/* ================= VEHICLE HEADER ================= */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <img
                      src={
                        car.images?.[0]?.url ||
                        "https://placehold.co/80x60?text=Car"
                      }
                      alt={`${car.brand} ${car.model}`}
                      className="h-14 w-20 shrink-0 rounded-lg border border-gray-200 object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="wrap-break-word font-semibold text-gray-900">
                        {car.brand} {car.model}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {car.year} • {car.color}
                      </p>

                      <p className="mt-1 text-xs capitalize text-gray-400">
                        {car.listingType ?? "buy"}
                      </p>
                    </div>
                  </div>

                  {/* ================= MOBILE ACTIONS ================= */}
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      onClick={() => toggleMenu(car._id)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100"
                      title="More Actions"
                    >
                      <MoreVertical size={19} />
                    </button>

                    {openMenu === car._id && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute right-0 top-10 z-100 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenMenu(null)}
                          className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50"
                        >
                          <Eye size={16} />
                          View Details
                        </button>

                        <button
                          type="button"
                          onClick={() => setOpenMenu(null)}
                          className="flex w-full items-center gap-3 px-4 py-3 text-sm text-green-600 hover:bg-green-50"
                        >
                          <CheckCircle size={16} />
                          Approve
                        </button>

                        <button
                          type="button"
                          onClick={() => setOpenMenu(null)}
                          className="flex w-full items-center gap-3 px-4 py-3 text-sm text-amber-600 hover:bg-amber-50"
                        >
                          <XCircle size={16} />
                          Reject
                        </button>

                        <button
                          type="button"
                          onClick={() => setOpenMenu(null)}
                          className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* ================= DEALER ================= */}
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <p className="text-xs font-medium text-gray-500">
                    Dealer
                  </p>

                  <p className="mt-1 wrap-break-word text-sm font-medium text-gray-800">
                    {car.dealer?.name || "-"}
                  </p>

                  {car.dealer?.email && (
                    <p className="mt-1 wrap-break-word text-sm text-gray-500">
                      {car.dealer.email}
                    </p>
                  )}
                </div>

                {/* ================= PRICE + STATUS ================= */}
                <div className="mt-4 grid grid-cols-1 gap-4 border-t border-gray-100 pt-4 sm:grid-cols-2">
                  {/* Price */}
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-gray-500">
                      Price
                    </p>

                    <p className="mt-1 wrap-break-word text-sm font-semibold text-gray-900">
                      {formatPrice(price)}
                    </p>

                    <p className="mt-1 text-xs capitalize text-gray-400">
                      {car.listingType === "rent"
                        ? "Rental"
                        : "Purchase"}
                    </p>
                  </div>

                  {/* Status */}
                  <div>
                    <p className="text-xs font-medium text-gray-500">
                      Status
                    </p>

                    <span
                      className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-medium capitalize ${getStatusClass(
                        car.status
                      )}`}
                    >
                      {car.status ?? "available"}
                    </span>
                  </div>
                </div>

                {/* ================= LISTED ON ================= */}
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <p className="text-xs font-medium text-gray-500">
                    Listed On
                  </p>

                  <p className="mt-1 wrap-break-word text-sm text-gray-700">
                    {car.createdAt
                      ? new Date(car.createdAt).toLocaleDateString()
                      : "-"}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="py-12 text-center text-gray-500">
            No vehicles found.
          </div>
        )}
      </div>
    </div>
  );
};

export default VechiclesTables;