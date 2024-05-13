import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ICreateDonationData,
  IDonationData,
  IDonationDataWithUser,
} from "../types/donation-types";
import APIService from "./api.service";

export default class DonationService extends APIService {
  createDonation = async (
    donationData: ICreateDonationData
  ): Promise<APIResponse<any>> => {
    console.log("🚀 ~ DonationService ~ donationData:", donationData);
    try {
      const response = await this.apiClient.post("/donation/", donationData);
      return { data: response.data, error: undefined };
    } catch (error) {
      console.log(error, "error");
      return Promise.reject(error);
    }
  };

  getAllDonations = async (): Promise<APIResponse<IDonationDataWithUser[]>> => {
    try {
      console.log("object");
      const response = await this.apiClient.get("/donation/");
      console.log(
        "🚀 ~ DonationService ~ getAllDonations= ~ response:",
        response.data
      );
      return { data: response.data, error: undefined };
    } catch (error) {
      console.log("🚀 ~ DonationService ~ getAllDonations= ~ error:", error);
      return Promise.reject(error);
    }
  };

  getAllDonationsForUser = async (
    id: string
  ): Promise<APIResponse<IDonationData[]>> => {
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
    console.log("🚀 ~ DonationService ~ softDeleteDonation ~ id:", id);
    try {
      const response = await this.apiClient.patch(`/donation/delete/${id}`);
      return { data: response.data, error: undefined };
    } catch (error) {
      console.log("🚀 ~ DonationService ~ softDeleteDonation ~ error:", error);
      return Promise.reject(error);
    }
  };
}
