import MyOrdersCard from "./MyOrdersCard";

const MyOrders = () => {
  return (
    <div className="border rounded-md p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">My Orders</h2>
      </div>
      <div className="my-5">
        <div className="grid grid-cols-1 gap-5 p-2">
        <MyOrdersCard />
        <MyOrdersCard />
        <MyOrdersCard />
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
