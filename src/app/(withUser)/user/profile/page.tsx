import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ProfileModal from "./ProfileModal";

const Page = () => {
  return (
    <div className="p-5">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Account Information</h2>
          <ProfileModal />
        </div>
        <div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div>
              <Label>Name</Label>
              <Input value="Abdul Alim Emon" readOnly className="mt-3" />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                value="abdulalimemon02@gmail.com"
                readOnly
                className="mt-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
