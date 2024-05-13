import axios, { AxiosInstance } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import AppService from "./app.service";

export default class APIService extends AppService {
  apiClient: AxiosInstance;
  apiUrl: string;

  constructor() {
    super();
    this.apiUrl = "http://localhost:3000/api/";
    this.apiClient = axios.create({
      baseURL: this.apiUrl,
    });
    this.initializeInterceptors();
  }

  initializeInterceptors = () => {
    this.apiClient.interceptors.request.use(
      async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };
}

