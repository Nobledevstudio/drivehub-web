interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}


const StatCard = ({ title, value, icon: Icon }: StatCardProps) => {
  return (
    <div className="mt-2 bg-white rounded-xl shadow-sm border-2 border-gray-200 p-6 flex items-center justify-between hover:shadow-md transition-shadow">
      <div>
        <h1 className="text-md font-semibold text-gray-600">{title}</h1>
        <h2 className="text-3xl font-bold mt-2">{value}</h2>
      </div>

      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-amber-50">
        <Icon className="text-amber-500 text-2xl" />
      </div>
    </div>
  );
};

export default StatCard;