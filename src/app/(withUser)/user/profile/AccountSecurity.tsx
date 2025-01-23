import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AccountSecurityModal from "./AccountSecurityModal";

const AccountSecurity = () => {
  return (
    <div className="border rounded-md p-5 mt-5">
      <div className="flex justify-between items-center border-b pb-3">
        <h2 className="text-xl font-semibold">Account Security</h2>
        <AccountSecurityModal />
      </div>
      <div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div>
            <Label>Email</Label>
            <Input value="Enter your email" readOnly className="mt-3" />
          </div>
          <div>
            <Label>Password</Label>
            <Input value="********" readOnly className="mt-3" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSecurity;
