import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const token = queryParams.get("token");

      if (token) {
        localStorage.setItem("authToken", token);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        console.error("Authentication failed, no token found.");
        navigate("/sign-in");
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen  bg-gradient-to-r from-[#020000] to-[#0B0B20]">
      <img
        src="/assets/gif/loader/loading.gif"
        alt="Loading"
        className="invert"
      />
    </div>
  );
};

export default GoogleCallback;
