import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type VehicleStatus = {
  available: number;
  reserved: number;
  rented: number;
  sold: number;
};

type VehicleStatusChartProps = {
  vehicleStatus: VehicleStatus;
};

const VechicleStatusChart = ({
  vehicleStatus,
}: VehicleStatusChartProps) => {
  const chartData = [
    {
      name: "Available",
      value: vehicleStatus.available,
    },
    {
      name: "Reserved",
      value: vehicleStatus.reserved,
    },
    {
      name: "Rented",
      value: vehicleStatus.rented,
    },
    {
      name: "Sold",
      value: vehicleStatus.sold,
    },
  ];

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow">
      <h1 className="text-2xl font-semibold">Car Status</h1>

      <div className="mt-4 h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="45%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
            >
              {/* Available */}
              <Cell fill="#22C55E" />

              {/* Reserved */}
              <Cell fill="#F59E0B" />

              {/* Rented */}
              <Cell fill="#3B82F6" />

              {/* Sold */}
              <Cell fill="#EF4444" />
            </Pie>

            <Tooltip />

            <Legend
              verticalAlign="bottom"
              align="center"
              layout="horizontal"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VechicleStatusChart;