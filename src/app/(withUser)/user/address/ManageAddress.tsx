import EditAddressModal from "./EditAddressModal";
import NewAddressModal from "./NewAddressModal";

const ManageAddress = () => {
  return (
    <div className="border rounded-md p-5">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <h2 className="text-xl font-semibold">Manage Addresses</h2>
        <NewAddressModal />
      </div>
      <div className="my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div className="p-5 bg-green-100 space-y-2 text-black">
            <h2 className="text-lg font-bold">Default Shipping & Billing Address</h2>
            <p className="text-sm font-medium capitalize">Abdul Alim Emon</p>
            <p className="text-sm font-medium capitalize">0172222222</p>
            <p className="text-sm font-medium capitalize">mithapukur, Rangpur</p>
            <p className="text-sm font-medium capitalize">mithapukur, Rangpur</p>
            <div className="py-5 flex justify-center items-center">
              <EditAddressModal />
            </div>
          </div>

          <div className="p-5 bg-green-100 space-y-2 text-black">
            <h2 className="text-lg font-bold">Default Shipping & Billing Address</h2>
            <p className="text-sm font-medium capitalize">Abdul Alim Emon</p>
            <p className="text-sm font-medium capitalize">0172222222</p>
            <p className="text-sm font-medium capitalize">mithapukur, Rangpur</p>
            <p className="text-sm font-medium capitalize">mithapukur, Rangpur</p>
            <div className="py-5 flex justify-center items-center">
              <EditAddressModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAddress;
