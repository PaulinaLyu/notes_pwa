import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateOutlet from "./layout/PrivateLayout";
import { NotePage } from "./pages/NotePage";

const LoginPage = lazy(() =>
  import("./pages/LoginPage/ui/LoginPage").then((module) => ({
    default: module.LoginPage,
  }))
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/ui/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  }))
);

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<PrivateOutlet />}>
        <Route path="/" element={<NotePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
