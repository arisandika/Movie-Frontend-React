import { Bell } from "lucide-react";

const UserHeader = ({ user, onLogout }) => (
  <header className="flex items-center justify-between pt-8 pb-4">
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10">
        <img
          src={user.avatar}
          alt="Profile"
          className="rounded-full"
          sizes="40px"
        />
      </div>
      <div>
        <p className="text-sm text-secondary">Howdy,</p>
        <h2 className="font-semibold text-light">{user.name}</h2>
      </div>
    </div>
    <button className="p-2 rounded-full bg-primary" onClick={onLogout}>
      <Bell className="w-5 h-5" />
    </button>
  </header>
);

export default UserHeader;
