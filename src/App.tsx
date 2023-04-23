import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

const LoginPage = lazy(() =>
  import("./pages/LoginPage").then((module) => ({
    default: module.LoginPage,
  }))
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  }))
);
const NotePage = lazy(() =>
  import("./pages/NotePage").then((module) => ({
    default: module.NotePage,
  }))
);

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<MainLayout />}>
        <Route path="/" element={<NotePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
