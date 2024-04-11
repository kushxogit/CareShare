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
      return { data: undefined, error };
    }
  };

  login = async (email: string, password: string): Promise<APIResponse<any>> => {
    try {
      const response = await this.apiClient.post("/api/auth/login", {
        email,
        password,
      });
      return { data: response.data, error: undefined };
    } catch (error) {
      return { data: undefined, error };
    }
  };
}