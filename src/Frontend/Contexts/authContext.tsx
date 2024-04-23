import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
  PropsWithChildren,
} from "react";
import { User } from "../types/user-types";

interface AuthContextType {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (isLoggedIn: boolean) => void;
  user: User | null;
  setUser: (user: User) => void;
}

const AuthAppContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthAppContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  console.log("🚀 ~ user:", user);

  const value = {
    isUserLoggedIn,
    setIsUserLoggedIn,
    user,
    setUser,
  };

  return (
    <AuthAppContext.Provider value={value}>{children}</AuthAppContext.Provider>
  );
};
