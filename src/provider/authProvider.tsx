import { createContext, useContext, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

interface AuthProviderProps {
  children: ReactNode;
}

type TypeSignIn = (newUser: string, callBack: () => void) => void;
type TypeSignOut = (callBack: () => void) => void;

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, { setItem, removeItem }] = useLocalStorage<string | null>(
    "userName",
    null
  );

  const signIn: TypeSignIn = (newUser, callBack) => {
    setItem(newUser);
    callBack();
  };

  const signOut: TypeSignOut = (callback) => {
    removeItem();
    callback();
  };

  const value: any = {
    user,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
