import { Eye } from "lucide-react";

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
  images: string; // change to string[] later
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
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">Latest Vehicles</h2>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm text-gray-600">
              <th className="px-6 py-3">Car</th>
              <th className="px-6 py-3">Dealer</th>
              <th className="px-6 py-3">Listing Type</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Listed On</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {cars.length > 0 ? (
              cars.map((car) => (
                <tr
                  key={car._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  {/* Car */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          car.images?.[0] ||
                          "https://placehold.co/80x60?text=Car"
                        }
                        alt={car.title}
                        className="w-16 h-12 rounded-md object-cover"
                      />

                      <div>
                        <p className="font-medium text-gray-900">
                          {car.title}
                        </p>

                        <p className="text-sm text-gray-500">
                          {car.brand} • {car.year}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Dealer */}
                  <td className="px-6 py-4 text-gray-700">
                    {car.dealer?.name}
                  </td>

                  {/* Listing Type */}
                  <td className="px-6 py-4 capitalize">
                    {car.listingType}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        statusColors[car.status]
                      }`}
                    >
                      {car.status}
                    </span>
                  </td>

                  {/* Listed On */}
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(car.createdAt).toLocaleDateString()}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <button
                        className="p-2 rounded-lg hover:bg-gray-100"
                        title="View Vehicle"
                      >
                        <Eye size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="py-10 text-center text-gray-500"
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