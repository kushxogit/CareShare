import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Platform } from "react-native";

export default class AppService {
  appHost: string;

  constructor() {
    this.appHost = `${
      Platform.OS === "android" ? "http" : "https"
    }://your-host.com`;
  }

  static getAxiosInstance(config?: AxiosRequestConfig): AxiosInstance {
    return axios.create(config);
  }
}
