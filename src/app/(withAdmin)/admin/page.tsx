import DashboardSidebar from "@/app/(withDashboard)/DashboardSidebar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex py-10 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              Hey! {session?.user?.name}, welcome to your Dashboard.
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
