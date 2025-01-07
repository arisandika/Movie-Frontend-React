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

  return <div className="p-4 text-center">Processing...</div>;
};

export default GoogleCallback;
