import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NavigationLayout from "@/components/layouts/NavigationLayout";
import GoogleCallback from "../pages/GoogleCallback";
import Home from "@/pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Setting from "@/pages/setting/Setting";
import Ticket from "@/pages/ticket/Ticket";
import History from "@/pages/history/History";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Rute public */}
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/auth/google/callback" element={<GoogleCallback />} />

        {/* Rute protected */}
        <Route
          element={
            <ProtectedRoute>
              <NavigationLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
