import NewAddressModal from "./NewAddressModal";

const ManageAddress = () => {
  return (
    <div className="border rounded-md p-5">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <h2 className="text-xl font-semibold">Manage Addresses</h2>
        <NewAddressModal />
      </div>
      <div>

      </div>
    </div>
  );
};

export default ManageAddress;
