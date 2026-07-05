type Activity = {
  type: string;
  message: string;
  createdAt: string;
};

type RecentActivitiesProps = {
  activities: Activity[];
};
const RecentActivities = ({activities}: RecentActivitiesProps) => {
    return (
        <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
                Recent Activities
            </h2>

            <div className="space-y-4">
                {activities.map((activity, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center border-b pb-3"
                    >
                        <div>
                            <p className="font-medium">{activity.message}</p>
                            <span className="text-sm text-gray-500 capitalize">
                                {activity.type}
                            </span>
                        </div>

                        <span className="text-xs text-gray-400">
                            {new Date(activity.createdAt).toLocaleString()}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentActivities