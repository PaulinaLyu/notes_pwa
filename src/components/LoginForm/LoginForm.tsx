import {
  useRef,
  MutableRefObject,
  FormEventHandler,
  ChangeEventHandler,
} from "react";
import { Button, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";
import "./loginForm.scss";

export const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const initialState = {
    login: "",
    password: "",
  };
  const formRef: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const signInInputs = useRef(initialState);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    // onSubmit(signInInputs.current, event, formRef);
  };

  const handleChange: ChangeEventHandler<HTMLFormElement> = (event) => {
    signInInputs.current = {
      ...signInInputs.current,
      [event.target.name]: event.target.value,
    };
  };

  const handleReset = () => {
    signInInputs.current = initialState;
  };

  return (
    <form
      className="login-form-container"
      ref={formRef}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <h3>Добро пожаловать</h3>
      <TextField
        className="login-form-item"
        required
        name="login"
        id="outlined-basic"
        placeholder="Логин"
        label="Логин"
        variant="outlined"
      />
      <TextField
        required
        className="login-form-item"
        id="outlined-basic"
        name="passsword"
        placeholder="Пароль"
        label="Пароль"
        variant="outlined"
      />
      <Button variant="contained">Войти</Button>
    </form>
  );
};
