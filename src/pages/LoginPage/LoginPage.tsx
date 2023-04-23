import { LoginForm } from "../../components/LoginForm";
import "./loginPage.scss";

export const LoginPage = () => {
  return (
    <div className="login-page-container">
      <div className="login-page-form">
        <LoginForm />
      </div>
    </div>
  );
};
