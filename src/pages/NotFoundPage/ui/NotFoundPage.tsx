import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTimeout } from "@/hooks/useTimeout";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const { reset, clear } = useTimeout(() => {
    navigate("/", { replace: true });
  }, 2000);

  useEffect(() => {
    setTimeout(() => {}, 2000);
    return clear();
  }, []);
  return <h3>Not Found</h3>;
};
