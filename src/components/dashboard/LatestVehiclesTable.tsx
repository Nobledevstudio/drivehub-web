import {
  MoreVertical,
  Eye,
  CheckCircle,
  XCircle,
  Trash2,
} from "lucide-react";
import React, { useEffect } from "react";
import type { CarItem } from "../../data/carData";

interface RecentCarsProps {
  cars: CarItem[];
}

const statusColors = {
  available: "bg-green-100 text-green-700",
  reserved: "bg-yellow-100 text-yellow-700",
  rented: "bg-blue-100 text-blue-700",
  sold: "bg-red-100 text-red-700",
};

const LatestVehiclesTable = ({ cars }: RecentCarsProps) => {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);

  const [menuDirection, setMenuDirection] = React.useState<"up" | "down">("down");

  useEffect(() => {
    const handleClickOutside = () => setOpenMenu(null);

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const getDisplayPrice = (car: CarItem) => {
    return car.listingType === "buy"
      ? car.pricing?.buy
      : car.listingType === "rent"
        ? car.pricing?.rent
        : car.pricing?.buy ?? car.pricing?.rent;
  };

  const formatPrice = (price?: number) => {
    if (price === undefined) return "-";

    return price.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });
  };

  return (
    <div className="mt-4 rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Latest Vehicles
        </h2>

        <button
          type="button"
          className="rounded-lg border border-amber-300 px-3 py-2 text-sm font-medium text-amber-500 transition hover:bg-amber-50 sm:px-5"
        >
          View All Vehicles
        </button>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP TABLE - LG AND ABOVE */}
      {/* ========================================================= */}

      <div className="hidden w-full lg:block">
        <table className="w-full table-fixed border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm font-semibold text-gray-600">
              <th className="w-[30%] border border-gray-200 px-4 py-4">
                Car
              </th>

              <th className="w-[25%] border border-gray-200 px-4 py-4">
                Dealer
              </th>

              <th className="w-[15%] border border-gray-200 px-4 py-4">
                Price
              </th>

              <th className="w-[12%] border border-gray-200 px-4 py-4">
                Status
              </th>

              <th className="w-[12%] border border-gray-200 px-4 py-4 xl:table-cell">
                Listed On
              </th>

              <th className="w-24 border border-gray-200 px-4 py-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {cars.length > 0 ? (
              cars.map((car) => {
                const displayPrice = getDisplayPrice(car);

                return (
                  <tr
                    key={car._id}
                    className="transition-colors duration-200 hover:bg-gray-50"
                  >
                    {/* Car */}
                    <td className="border border-gray-200 px-4 py-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <img
                          src={
                            car.images?.[0]?.url ||
                            "https://placehold.co/80x60?text=Car"
                          }
                          alt={`${car.brand} ${car.model}`}
                          className="h-12 w-16 shrink-0 rounded-lg border border-gray-200 object-cover"
                        />

                        <div className="min-w-0">
                          <p className="truncate font-semibold text-gray-900">
                            {car.brand} {car.model}
                          </p>

                          <p className="truncate text-sm text-gray-500">
                            {car.year} • {car.color}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Dealer */}
                    <td className="border border-gray-200 px-4 py-4">
                      <div className="min-w-0">
                        <p className="truncate font-medium text-gray-900">
                          {car.dealer?.name || "-"}
                        </p>

                        <p
                          className="truncate text-xs text-gray-500"
                          title={car.dealer?.email}
                        >
                          {car.dealer?.email || "-"}
                        </p>

                        <p className="truncate text-xs text-gray-500">
                          {car.dealer?.phone || "-"}
                        </p>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="border border-gray-200 px-4 py-4 truncate wrap-break-word">
                      <p className="whitespace-nowrap text-sm font-medium text-gray-900">
                        {formatPrice(displayPrice)}
                      </p>
                    </td>

                    {/* Status */}
                    <td className="border border-gray-200 px-4 py-4 truncate">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[car.status ?? "available"]
                          }`}
                      >
                        {car.status ?? "available"}
                      </span>
                    </td>

                    {/* Listed On */}
                    <td className="border border-gray-200 px-4 py-4 xl:table-cell truncate wrap-break-word">
                      <p className="whitespace-nowrap text-sm text-gray-600">
                        {car.createdAt
                          ? new Date(car.createdAt).toLocaleDateString()
                          : "-"}
                      </p>
                    </td>





                    {/* Actions */}
                    <td className="relative w-24 border border-gray-200 px-2 py-4">
                      <div className="flex items-center justify-center">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const rect = e.currentTarget.getBoundingClientRect();
                            const menuHeight = 190;
                            const spaceBelow = window.innerHeight - rect.bottom;
                            setMenuDirection(spaceBelow < menuHeight ? "up" : "down");

                            setOpenMenu(openMenu === car._id ? null : car._id);
                          }}
                          className="rounded-lg p-2 transition hover:bg-gray-100"
                          title="More Actions"
                        >
                          <MoreVertical size={18} />
                        </button>

                        {openMenu === car._id && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className={`absolute right-2 z-50 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg ${menuDirection === "up"
                              ? "bottom-12"
                              : "top-12"
                              }`}
                          >
                            <button
                              type="button"
                              className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50"
                            >
                              <Eye size={16} />
                              View Details
                            </button>

                            <button
                              type="button"
                              className="flex w-full items-center gap-3 px-4 py-3 text-sm text-green-600 hover:bg-green-50"
                            >
                              <CheckCircle size={16} />
                              Approve
                            </button>

                            <button
                              type="button"
                              className="flex w-full items-center gap-3 px-4 py-3 text-sm text-amber-600 hover:bg-amber-50"
                            >
                              <XCircle size={16} />
                              Reject
                            </button>

                            <button
                              type="button"
                              className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50"
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
                  className="border border-gray-200 py-12 text-center text-gray-500"
                >
                  No recent vehicles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ========================================================= */}
      {/* MOBILE + TABLET CARDS - BELOW LG */}
      {/* ========================================================= */}

      <div className="space-y-4 p-4 lg:hidden">
        {cars.length > 0 ? (
          cars.map((car) => {
            const displayPrice = getDisplayPrice(car);

            return (
              <div
                key={car._id}
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                {/* Vehicle Header */}
                <div className="flex items-start gap-3">
                  <img
                    src={
                      car.images?.[0]?.url ||
                      "https://placehold.co/100x75?text=Car"
                    }
                    alt={`${car.brand} ${car.model}`}
                    className="h-20 w-24 shrink-0 rounded-lg border border-gray-200 object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900">
                      {car.brand} {car.model}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {car.year} • {car.color}
                    </p>

                    <span
                      className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusColors[car.status ?? "available"]
                        }`}
                    >
                      {car.status ?? "available"}
                    </span>
                  </div>

                  {/* Mobile Actions */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();

                        setOpenMenu(
                          openMenu === car._id ? null : car._id
                        );
                      }}
                      className="rounded-lg p-2 transition hover:bg-gray-100"
                      title="More Actions"
                    >
                      <MoreVertical size={20} />
                    </button>

                    {openMenu === car._id && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute right-0 top-10 z-50 w-48 rounded-lg border border-gray-200 bg-white shadow-lg"
                      >
                        <button
                          type="button"
                          className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50"
                        >
                          <Eye size={16} />
                          View Details
                        </button>

                        <button
                          type="button"
                          className="flex w-full items-center gap-3 px-4 py-3 text-sm text-green-600 hover:bg-green-50"
                        >
                          <CheckCircle size={16} />
                          Approve
                        </button>

                        <button
                          type="button"
                          className="flex w-full items-center gap-3 px-4 py-3 text-sm text-amber-600 hover:bg-amber-50"
                        >
                          <XCircle size={16} />
                          Reject
                        </button>

                        <button
                          type="button"
                          className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                  {/* Dealer */}
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase text-gray-400">
                      Dealer
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-gray-900">
                      {car.dealer?.name || "-"}
                    </p>

                    <p className="truncate text-xs text-gray-500">
                      {car.dealer?.email || "-"}
                    </p>

                    <p className="text-xs text-gray-500">
                      {car.dealer?.phone || "-"}
                    </p>
                  </div>

                  {/* Price */}
                  <div>
                    <p className="text-xs font-medium uppercase text-gray-400">
                      Price
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {formatPrice(displayPrice)}
                    </p>
                  </div>

                  {/* Listed On */}
                  <div>
                    <p className="text-xs font-medium uppercase text-gray-400">
                      Listed On
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      {car.createdAt
                        ? new Date(car.createdAt).toLocaleDateString()
                        : "-"}
                    </p>
                  </div>

                  {/* Listing Type */}
                  <div>
                    <p className="text-xs font-medium uppercase text-gray-400">
                      Listing Type
                    </p>

                    <p className="mt-1 text-sm capitalize text-gray-600">
                      {car.listingType || "-"}
                    </p>
                  </div>
                </div>

                {/* View Details */}
                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  <Eye size={16} />
                  View Details
                </button>
              </div>
            );
          })
        ) : (
          <div className="py-12 text-center text-gray-500">
            No recent vehicles found.
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestVehiclesTable;
