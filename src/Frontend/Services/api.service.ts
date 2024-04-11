import { AxiosInstance } from 'axios';
import AppService from './app.service';

export default class APIService extends AppService {
  apiClient: AxiosInstance;
  apiUrl: string;

  constructor() {
    super();
    this.apiUrl = 'http://localhost:3000/api/';
    this.apiClient = APIService.getAxiosInstance({
      baseURL: this.apiUrl,
    });
  }
}