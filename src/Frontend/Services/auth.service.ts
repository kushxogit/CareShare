import AsyncStorage from "@react-native-async-storage/async-storage";
import APIService from "./api.service";
import { useAuth } from "../Contexts/authContext";
import { User } from "../types/user-types";

export default class AuthService extends APIService {
  signup = async (
    name: string,
    phoneNumber: string,
    email: string,
    password: string,
    role: string
  ): Promise<APIResponse<any>> => {
    try {
      const response = await this.apiClient.post("/auth/signup", {
        name,
        phoneNumber,
        email,
        password,
        role,
      });
      await AsyncStorage.setItem("role", response.data.user.role);
      return { data: response.data, error: undefined };
    } catch (error) {
      return Promise.reject(error.message);
    }
  };

  login = async (
    email: string,
    password: string,
    onLoginSuccess: (user: User) => void
  ): Promise<APIResponse<any>> => {
    try {
      const response = await this.apiClient.post("/auth/login", {
        email,
        password,
      });

      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("role", response.data.user.role);

      onLoginSuccess(response.data.user);

      return { data: response.data, error: undefined };
    } catch (error) {
      return Promise.reject(error);
    }
  };
}
