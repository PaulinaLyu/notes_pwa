import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Sidebar } from "../components/Sidebar";

const MainLayout = () => (
  <>
    <Sidebar />
    <div className="app-container">
      <Suspense fallback={"...Loading"}>
        <Outlet />
      </Suspense>
    </div>
  </>
);

export default MainLayout;
