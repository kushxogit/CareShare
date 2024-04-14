import AsyncStorage from "@react-native-async-storage/async-storage";
import APIService from "./api.service";

export default class AuthService extends APIService {
  signup = async (
    name: string,
    phoneNumber: string,
    email: string,
    password: string
  ): Promise<APIResponse<any>> => {
    try {
      const response = await this.apiClient.post("/auth/signup", {
        name,
        phoneNumber,
        email,
        password,
      });
      return { data: response.data, error: undefined };
    } catch (error) {
      return Promise.reject(error.message);
    }
  };

  login = async (
    email: string,
    password: string
  ): Promise<APIResponse<any>> => {
    try {
      const response = await this.apiClient.post("/auth/login", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      return { data: response.data, error: undefined };
    } catch (error) {
      return Promise.reject(error);
    }
  };
}
