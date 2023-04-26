import { Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/provider/authProvider";

const PrivateOutlet = () => {
  const auth = useAuth();
  const location = useLocation();
  return auth && auth.user ? (
    <Suspense fallback={"...Loading"}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};

export default PrivateOutlet;
