import { createContext, useContext, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
type TypeSignIn = (newUser: string, callBack: () => void) => void;
type TypeSignOut = (callBack: () => void) => void;

interface AuthContextProps {
  user: string | null;
  signIn: TypeSignIn;
  signOut: TypeSignOut;
}
interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, { setItem, removeItem }] = useLocalStorage<string | null>("userName", null);

  const signIn: TypeSignIn = (newUser, callBack) => {
    setItem(newUser);
    callBack();
  };

  const signOut: TypeSignOut = (callback) => {
    removeItem();
    callback();
  };

  const value = {
    user,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
