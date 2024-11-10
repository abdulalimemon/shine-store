import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const UserPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          Hey! {session?.user?.name}, welcome to your Dashboard.
        </h3>
      </div>
    </>
  );
};

export default UserPage;
