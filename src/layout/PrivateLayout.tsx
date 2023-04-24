import { Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { Sidebar } from "../components/Sidebar";

const PrivateOutlet = () => {
  const auth = useAuth();
  const location = useLocation();
  return auth && auth.user ? (
    <>
      <Sidebar />
      <div className="app-container">
        <Suspense fallback={"...Loading"}>
          <Outlet />
        </Suspense>
      </div>
    </>
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};

export default PrivateOutlet;
