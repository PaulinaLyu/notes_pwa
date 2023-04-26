import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import "./loginPage.scss";
import { SignUpForm } from "@/components/SignUpFrom";

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="login-page-container">
      <div className="login-page-form">
        {isLogin ? <LoginForm setIsLogin={setIsLogin} /> : <SignUpForm setIsLogin={setIsLogin} />}
      </div>
    </div>
  );
};
