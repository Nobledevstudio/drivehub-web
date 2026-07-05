import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
type VehicleStatus = {
  available: number;
  reserved: number;
  rented: number;
  sold: number;
};

type VehicleStatusChartProps = {
  vehicleStatus: VehicleStatus;
};


const VechicleStatusChart = ({ vehicleStatus }: VehicleStatusChartProps) => {


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
           <div className="bg-white border border-gray-200 rounded-xl shadow p-6">
              <h1 className="font-semibold text-2xl">Car Status</h1>
            <PieChart width={350} height={300}>
                <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={4}
                >
                    <Cell fill="#22C55E" />   // Available
                    <Cell fill="#F59E0B" />   // Reserved
                    <Cell fill="#3B82F6" />   // Rented
                    <Cell fill="#EF4444" />   // Sold
                </Pie>

                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    )
}

export default VechicleStatusChart