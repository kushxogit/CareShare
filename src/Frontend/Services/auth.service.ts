import APIService from "./api.service";

export default class AuthService extends APIService {
  private apiClient: any; 

  constructor(apiClient: any) {
    super();
    this.apiClient = apiClient;
  }

  signup = async (
    name: string,
    phoneNumber: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await this.apiClient.post("/api/auth/signup", {
        name,
        phoneNumber,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Error in signup:", error);
      throw error;
    }
  };

  login = async (email: string, password: string) => {
    try {
      const response = await this.apiClient.post("/api/auth/login", {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  };
}