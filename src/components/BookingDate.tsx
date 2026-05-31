import { useState } from "react";

const BookingDate = () => {

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Start Date */}
            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600">Start Date</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-500"
                />
            </div>

            {/* End Date */}
            <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-600">End Date</label>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 outline-none focus:border-amber-500"
                />
            </div>

        </div>
    )
}

export default BookingDate