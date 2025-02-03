import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Welcome from "./Welcome";

const UserPage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user?.name;

  return (
    <>
      <Welcome userName={user} />
    </>
  );
};

export default UserPage;
