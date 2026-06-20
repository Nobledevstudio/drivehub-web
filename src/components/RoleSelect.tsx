

type RoleSelectProps = {
  role: "customer" | "dealer" | "";
  setRole: (role: "customer" | "dealer") => void;
};

const RoleSelect = ({role, setRole}: RoleSelectProps ) => {
  

  return (
    <div className="space-y-3 mt-3">
      <p className="text-sm font-medium">Choose your account type</p>
    <div className="flex items-center justify-between gap-4">       
      {/* Customer Card */}
      <label className={`border rounded-md w-1/2 p-4 flex items-center justify-between cursor-pointer transition
        ${role === "customer" ? "border-amber-500 bg-amber-50" : "border-gray-200"}`}>
        <div>
          <p className="font-medium">Customer</p>
          <p className="text-xs text-gray-500">I want to explore cars</p>
        </div>
        <input
          type="radio"
          name="role"
          value="customer"
          checked={role === "customer"}
          onChange={() => setRole("customer")}
          className="accent-amber-500"
        />
      </label>

      {/* Dealer Card */}
      <label
        className={`border rounded-md p-4 w-1/2 flex items-center justify-between cursor-pointer transition
        ${role === "dealer" ? "border-amber-500 bg-amber-50" : "border-gray-200"}`}
      >
        <div>
          <p className="font-medium">Dealer</p>
          <p className="text-xs text-gray-500">I want to list my cars</p>
        </div>

        <input
          type="radio"
          name="role"
          value="dealer"
          checked={role === "dealer"}
          onChange={() => setRole("dealer")}
          className="accent-amber-500"
         
         />
      </label>
        </div>
    </div>
  );
};

export default RoleSelect;
