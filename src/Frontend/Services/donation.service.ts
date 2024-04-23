import AsyncStorage from "@react-native-async-storage/async-storage";
import { ICreateDonationData, IDonationData } from "../types/donation-types";
import APIService from "./api.service";

export default class DonationService extends APIService {
  createDonation = async (
    donationData: ICreateDonationData
  ): Promise<APIResponse<any>> => {
    try {
      const response = await this.apiClient.post("/donation/", donationData);
      return { data: response.data, error: undefined };
    } catch (error) {
      return Promise.reject(error);
    }
  };

  getAllDonations = async (): Promise<APIResponse<IDonationData[]>> => {
    try {
      const response = await this.apiClient.get("/donation/");
      return { data: response.data, error: undefined };
    } catch (error) {
      return Promise.reject(error);
    }
  };

  getAllDonationsForUser = async (id:string): Promise<APIResponse<IDonationData[]>> => {
    try {
      
      const response = await this.apiClient.get(`/donation/user/${id}`);
      return { data: response.data, error: undefined };
    } catch (error) {
      return Promise.reject(error);
    }
  };

  getDonationById = async (id: string): Promise<APIResponse<any>> => {
    try {
      const response = await this.apiClient.get(`/donation/${id}`);
      return { data: response.data, error: undefined };
    } catch (error) {
      return Promise.reject(error);
    }
  };

  softDeleteDonation = async (id: string): Promise<APIResponse<any>> => {
    try {
      const response = await this.apiClient.patch(`/donation/delete/${id}`);
      return { data: response.data, error: undefined };
    } catch (error) {
      return Promise.reject(error);
    }
  };
}
