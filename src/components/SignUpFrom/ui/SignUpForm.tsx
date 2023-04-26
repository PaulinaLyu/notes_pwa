import { useRef, MutableRefObject, FormEventHandler, ChangeEventHandler, useState } from "react";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/provider/authProvider";
import { users } from "@/data/users";
import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";

interface SignUpFormProps {
  setIsLogin: (val: boolean) => void;
}

export const SignUpForm = ({ setIsLogin }: SignUpFormProps) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [alert, setAlert] = useState("");
  const [passError, setPassError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const from = location.state?.from || "/";

  const initialState = {
    login: "",
    password: "",
    repeatPass: "",
    name: "",
    surname: "",
  };
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;
  const signUpInputs = useRef(initialState);

  const handleClickShowPasswordRepeat = () => setShowPasswordRepeat((show) => !show);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const currentUser = users.filter((user) => user.login === signUpInputs.current.login);
    if (
      signUpInputs.current.password &&
      signUpInputs.current.repeatPass &&
      signUpInputs.current.password !== signUpInputs.current.repeatPass
    ) {
      setPassError("Пароли должны совпадать");
    } else {
      if (currentUser.length > 0) {
        setAlert("Такой пользователь уже существует");
      } else {
        const data = {
          login: signUpInputs.current.login,
          password: signUpInputs.current.password,
          id: Date.now(),
          name: signUpInputs.current.name,
          surname: signUpInputs.current.surname,
        };
        users.push(data);
        auth &&
          auth.signIn(signUpInputs.current.login, () => {
            navigate(from, { replace: true });
          });
        formRef?.current.reset();
      }
    }
  };

  const handleChange: ChangeEventHandler<HTMLFormElement> = (event) => {
    signUpInputs.current = {
      ...signUpInputs.current,
      [event.target.name]: event.target.value,
    };
    if (event.target.name === "password" || event.target.name === "passwordRepeat") {
      validatePass();
    }
  };

  const handleReset = () => {
    signUpInputs.current = initialState;
  };

  const validatePass = () => {
    if (
      signUpInputs.current.password &&
      signUpInputs.current.repeatPass &&
      signUpInputs.current.password !== signUpInputs.current.repeatPass
    ) {
      setPassError("Пароли должны совпадать");
    }
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
          label="Логин"
          variant="outlined"
          placeholder="Логин"
        />
        <TextField
          margin="normal"
          error={passError.length > 0}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
          id="outlined-basic"
          name="password"
          label="Пароль"
          placeholder="Пароль"
          variant="outlined"
        />
        <TextField
          margin="normal"
          error={passError.length > 0}
          type={showPasswordRepeat ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPasswordRepeat}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPasswordRepeat ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
          id="outlined-basic"
          name="repeatPass"
          label="Повторить пароль"
          placeholder="Повторить пароль"
          variant="outlined"
        />
        <TextField
          margin="dense"
          name="name"
          id="outlined-basic"
          label="Имя"
          placeholder="Имя"
          variant="outlined"
        />
        <TextField
          margin="dense"
          name="surname"
          id="outlined-basic"
          label="Фамилия"
          placeholder="Фамилия"
          variant="outlined"
        />
        {alert.length > 0 && <Alert severity="error">{alert}</Alert>}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="flex-end"
        >
          <Button variant="text" onClick={() => setIsLogin(true)}>
            Уже есть профиль
          </Button>
          <Button type="reset" variant="outlined" onChange={handleReset}>
            Очистить форму
          </Button>
          <Button type="submit" variant="contained">
            Создать
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
