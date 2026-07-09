import {
  MoreVertical,
  Eye,
  CheckCircle,
  XCircle,
  Trash2,
} from "lucide-react";
import React, { useEffect} from "react";


interface Dealer {
  _id: string;
  name: string;
  email: string;
}

interface Cars {

  _id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  images: string[]; // change to string[] later
  listingType: "buy" | "rent" | "both";
  status: "available" | "reserved" | "rented" | "sold";
  dealer: Dealer;
  createdAt: string;
}

interface RecentCarsProps {
  cars: Cars[];
}


const statusColors = {
  available: "bg-green-100 text-green-700",
  reserved: "bg-yellow-100 text-yellow-700",
  rented: "bg-blue-100 text-blue-700",
  sold: "bg-red-100 text-red-700",
};

const LatestVehiclesTable = ({ cars }: RecentCarsProps) => {


  const [openMenu, setOpenMenu] = React.useState<string | null>(null);

  /*const handleView = (car) => {
     Navigate to details page or open a modal
  };

  const handleApprove = async (id) => {
     PATCH /admin/cars/:id/approve
  };

  const handleReject = async (id) => {
     PATCH /admin/cars/:id/reject
  };

  const handleDelete = async (id) => {
     DELETE /admin/cars/:id
  };
  */
useEffect(() => {
  const handleClickOutside = () => setOpenMenu(null);

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-4">
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-lg font-semibold">Latest Vehicles</h2>

        <button className="text-sm font-medium border border-amber-300 text-amber-400 px-5 py-2 rounded-lg">
          View All Vehicles
        </button>
      </div>
      <div className="overflow-x-auto border border-gray-200 bg-white">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm font-semibold text-gray-600">
              <th className="border border-gray-200 px-6 py-4">Car</th>
              <th className="border border-gray-200 px-6 py-4">Dealer</th>
              <th className="border border-gray-200 px-6 py-4">Listing Type</th>
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
                <tr key={car._id} className="transition-colors duration-200 hover:bg-gray-50">
                  {/* Car */}
                  <td className="border border-gray-200 px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img src={
                        car.images?.[0] ||
                        "https://placehold.co/80x60?text=Car"}
                        alt={car.title}
                        className="h-14 w-20 rounded-lg border border-gray-200 object-cover"
                      />

                      <div>
                        <p className="font-semibold text-gray-900">
                          {car.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {car.brand} • {car.year}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Dealer */}
                  <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-gray-700">
                    {car.dealer?.name || "-"}
                  </td>

                  {/* Listing Type */}
                  <td className="border border-gray-200 px-6 py-4 whitespace-nowrap">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-700">
                      {car.listingType}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="border border-gray-200 px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    {car.price.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </td>

                  {/* Status */}
                  <td className="border border-gray-200 px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusColors[car.status]}`}
                    >
                      {car.status}
                    </span>
                  </td>

                  {/* Listed On */}
                  <td className="border border-gray-200 px-6 py-4 whitespace-nowrap text-gray-600">
                    {new Date(car.createdAt).toLocaleDateString()}
                  </td>

                  <td className="border border-gray-200 px-6 py-4 relative">

                    <div className="flex items-center justify-center gap-2">
                      <button

                        className="rounded-lg p-2 hover:bg-gray-100"
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenMenu(openMenu === car._id ? null : car._id);
                        }}
                        className="rounded-lg p-2 hover:bg-gray-100 transition"
                      >
                        <MoreVertical size={18} />
                      </button>

                      {openMenu === car._id && (
                        <div className="absolute right-6 top-12 z-50 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
                          <button
                            onClick={() => {
                              // handleView(car);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50"
                          >
                            <Eye size={16} />
                            View Details
                          </button>

                          <button
                            onClick={() => {
                              // handleApprove(car._id);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-green-600 hover:bg-green-50"
                          >
                            <CheckCircle size={16} />
                            Approve
                          </button>

                          <button
                            onClick={() => {
                              // handleReject(car._id);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-amber-600 hover:bg-amber-50"
                          >
                            <XCircle size={16} />
                            Reject
                          </button>

                          <button
                            onClick={() => {
                              // handleDelete(car._id);
                              setOpenMenu(null);
                            }}
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
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="border border-gray-200 py-12 text-center text-gray-500"
                >
                  No recent vehicles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestVehiclesTable;