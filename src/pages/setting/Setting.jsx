import { fetchUserProfile, logout } from "@/api/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        const data = await fetchUserProfile(token);
        setUser(data);
      } else {
        console.error("No token found");
        navigate("/sign-in");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/sign-in");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <img
        src={user.avatar}
        alt={user.name}
        className="w-24 h-24 mt-4 rounded-full"
      />
      <button
        onClick={handleLogout}
        className="px-4 py-2 mt-4 text-white bg-red-600 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
