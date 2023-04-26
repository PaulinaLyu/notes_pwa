import { useNavigate } from "react-router-dom";
import { useAuth } from "@/provider/authProvider";
import { Button, Stack, Typography } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

export function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignout = () => {
    auth &&
      auth.signOut(() => {
        navigate("/");
      });
  };

  if (auth && auth.user === null) {
    return <div className="authStatus-logged">Не зарегистрирован</div>;
  }

  return (
    <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2, mt: 2 }}>
      <Typography variant="h6" component="h6">
        {auth && auth.user}
      </Typography>{" "}
      <Button variant="text" onClick={handleSignout}>
        <ExitToApp />
      </Button>
    </Stack>
  );
}
