import { useState } from "react";

const PriceToggle = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div onClick={() => setEnabled(!enabled)}
            className="flex items-center justify-between rounded-md p-3 cursor-pointer"
        >

            {/* Price */}
            <p className="text-sm font-medium">
                ₦2000 <span className="text-gray-500">/day</span>
            </p>

            {/* Toggle Switch */}
            <div
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300
                ${enabled ? "bg-amber-500" : "bg-gray-300"}`}
            >
                <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300
                    ${enabled ? "translate-x-5" : "translate-x-0"}`}
                />
            </div>

        </div>
    );
};

export default PriceToggle;