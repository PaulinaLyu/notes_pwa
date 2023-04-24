import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/", { replace: true });
    navigate(0);
  };
  const handleReloadPage = () => {
    navigate(0);
  };

  return (
    <div className="app-container">
      <div>OOOps...something went wrong</div>
      <Button onClick={() => handleReloadPage()} variant="contained">
        Reload page
      </Button>
      <Button onClick={() => handleGoHome()} variant="outlined">
        Home
      </Button>
    </div>
  );
};
