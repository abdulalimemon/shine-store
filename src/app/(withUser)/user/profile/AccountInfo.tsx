import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ProfileModal from "./ProfileModal";

const AccountInfo = () => {
  return (
    <div className="border rounded-md p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Account Information</h2>
        <ProfileModal />
      </div>
      <div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div>
            <Label>Name</Label>
            <Input value="Enter your name" readOnly className="mt-3" />
          </div>
          <div>
            <Label>Email</Label>
            <Input value="Enter your email" readOnly className="mt-3" />
          </div>
          <div>
            <Label>Contact Number</Label>
            <Input value="Enter your number" readOnly className="mt-3" />
          </div>
          <div>
            <Label>Date of Birth</Label>
            <Input value="Enter your birthday" readOnly className="mt-3" />
          </div>
          <div>
            <Label>Gender</Label>
            <Input value="Enter your gender" readOnly className="mt-3" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountInfo;
