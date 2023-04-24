import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
  }, []);
  return <h3>Not Found</h3>;
};
