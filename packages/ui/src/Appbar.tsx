import { Button } from "./button";

interface AppbarProps {
  user?: {
    name?: String | null;
  };
  onSignin: any;
  onSignout: any;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <div>
      <div className="flex justify-between border-slate-300 border-b-2 px-4">
        <div className="text-lg flex flex-col justify-center">PayTM</div>
        <div className="flex flex-col justify-center pt-2">
          <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
      </div>
    </div>
  );
};
