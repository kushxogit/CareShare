import { AxiosInstance } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import AppService from "./app.service";

export default class APIService extends AppService {
  apiClient: AxiosInstance;
  apiUrl: string;

  constructor() {
    super();
    this.apiUrl = "http://localhost:3000/api/";
    this.apiClient = APIService.getAxiosInstance({
      baseURL: this.apiUrl,
    });
    this.setAuthToken();
  }

  async setAuthToken() {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      this.apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    } else {
      console.log("HERE");
      delete this.apiClient.defaults.headers.common["Authorization"];
    }
  }
}
