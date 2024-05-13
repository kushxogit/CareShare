import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
  PropsWithChildren,
} from "react";
import { User } from "../types/user-types";
import AuthService from "../Services/auth.service";

interface AuthContextType {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (isLoggedIn: boolean) => void;
  user: User | null;
  setUser: (user: User) => void;
  fetchUser: (userId: string) => Promise<User | null>;
}
const authService = new AuthService();
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

  const fetchUser = async (userId: string) => {
    try {
      const response = await authService.getUser(userId);
      if (response.data) {
        return response.data;
      } else {
        throw new Error("User data not found");
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
      throw error;
    }
  };

  const value = {
    isUserLoggedIn,
    setIsUserLoggedIn,
    user,
    setUser,
    fetchUser,
  };

  return (
    <AuthAppContext.Provider value={value}>{children}</AuthAppContext.Provider>
  );
};
