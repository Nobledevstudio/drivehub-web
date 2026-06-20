const PendingApproval = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold">Account Pending Approval</h1>
      <p className="text-gray-500 mt-2">
        Your account is under review. You will be notified once approved.
      </p>
    </div>
  );
};

export default PendingApproval;