import { Link, Outlet, useLocation } from "react-router-dom";
import { Popcorn, Settings, Ticket, Wallet } from "lucide-react";
import { useState } from "react";

const NavigationLayout = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Discover");

  const items = [
    { icon: Popcorn, label: "Discover", path: "/" },
    { icon: Ticket, label: "Ticket", path: "/ticket" },
    { icon: Wallet, label: "History", path: "/history" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const showNav = ["/", "/ticket", "/history", "/settings"].includes(
    location.pathname
  );

  return (
    <div className="min-h-screen text-secondary bg-gradient-to-r from-[#020000] to-[#0B0B20]">
      <div className="content">
        <Outlet />
      </div>
      {showNav && (
        <nav className="fixed bottom-0 left-0 right-0 p-4 md:max-w-md md:mx-auto">
          <div className="flex items-center justify-between px-3 py-3 rounded-full bg-light/10 backdrop-blur">
            {items.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setActiveItem(item.label)}
                className={`flex items-center gap-2 p-3 rounded-full backdrop-blur-md ${
                  activeItem === item.label
                    ? "bg-light text-primary"
                    : "bg-primary/20 text-secondary hover:text-light"
                }`}
              >
                <item.icon className="w-6 h-6" />
                {activeItem === item.label && (
                  <span className="text-xs font-semibold">{item.label}</span>
                )}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavigationLayout;
