import Image from "next/image";
import userBG from "../../../../public/userBG.png";
import { getUserInfo } from "@/utils/auth.services";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const UserSidebar = async () => {
  const userInfo = getUserInfo();
  const session = await getServerSession(authOptions);
 
  return (
    <>
      <div>
        <div>
          <Image
            src={userBG}
            width={100}
            height={100}
            alt="User Cover Photo"
            className="w-full h-28"
          />
        </div>
        <div className="flex justify-center items-center -mt-10">
          <Image
            src={session?.user?.image || userBG}
            width={100}
            height={100}
            alt="User Photo"
            className="size-20 rounded-full border-2 border-[#265450] p-[2px]"
          />
        </div>
        <div className="flex flex-col justify-center items-center my-3 mx-5 pb-3 border-b-2">
          <h2 className="text-base font-semibold">
            {session?.user?.name || userInfo?.name}
          </h2>
          <p className="text-sm font-medium">
            {session?.user?.email || userInfo?.email}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
