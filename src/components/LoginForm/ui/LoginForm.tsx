import { useRef, MutableRefObject, FormEventHandler, ChangeEventHandler, useState } from "react";
import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../provider/authProvider";
import "./loginForm.scss";
import { users } from "../../../data/users";

export const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [alert, setAlert] = useState("");

  const from = location.state?.from || "/";

  const initialState = {
    login: "",
    password: "",
  };
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;
  const signInInputs = useRef(initialState);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const currentUser = users.filter((user) => user.login === signInInputs.current.login)[0];
    if (currentUser && currentUser.password === signInInputs.current.password) {
      auth &&
        auth.signIn(signInInputs.current.login, () => {
          navigate(from, { replace: true });
        });
      formRef?.current.reset();
    } else {
      setAlert("Неверный пароль или логин");
    }
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
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Typography variant="h5" component="h5">
          Добро пожаловать
        </Typography>{" "}
        <TextField
          margin="dense"
          required
          name="login"
          id="outlined-basic"
          placeholder="Логин"
          label="Логин"
          variant="outlined"
        />
        <TextField
          margin="normal"
          required
          id="outlined-basic"
          name="password"
          placeholder="Пароль"
          label="Пароль"
          variant="outlined"
        />
        {alert.length > 0 && <Alert severity="error">{alert}</Alert>}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="flex-end"
        >
          <Button type="reset" variant="outlined" onChange={handleReset}>
            Очистить форму
          </Button>
          <Button type="submit" variant="contained">
            Войти
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
