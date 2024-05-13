import { Request, Response } from "express";
import * as DonationService from "./donation-service";
import {
  serializeDonation,
  serializeDonations,
} from "./utils/donation-serializer";

export const createDonation = async (req: Request, res: Response) => {
  try {
    console.log("🚀 ~ createDonation ~ req.body:", req.user?.userId);
    const donationData = {
      ...req.body,
      userId: req.user?.userId,
    };
    const donation = await DonationService.createDonation(donationData);
    res.status(201).send({ donation: serializeDonation(donation) });
  } catch (error) {
    console.log("🚀 ~ createDonation ~ error:", error);
    res.status(500).send({ message: "Failed to create donation" });
  }
};

export const getAllDonations = async (req: Request, res: Response) => {
  try {
    console.log("user", req.user);
    const donations = await DonationService.getAllDonations();
    const seerializedDonations = serializeDonations(donations);
    console.log(
      "🚀 ~ getAllDonations ~ seerializedDonations:",
      seerializedDonations
    );
    res.status(200).send({ donations: seerializedDonations });
  } catch (error) {
    res.status(500).send({ message: "Failed to get donations" });
  }
};

export const getAllDonationsForUser = async (req: Request, res: Response) => {
  try {
    console.log(req.user.userId);
    const donations = await DonationService.getAllDonationsForUser(
      req.params.id
    );
    res.status(200).send({ donations: serializeDonations(donations) });
  } catch (error) {
    res.status(500).send({ message: "Failed to get donations" });
  }
};

export const getDonationById = async (req: Request, res: Response) => {
  try {
    const donation = await DonationService.getDonationById(req.params.id);
    if (!donation) {
      return res.status(404).send({ message: "Donation not found" });
    }
    res.status(200).send({ donation: serializeDonation(donation) });
  } catch (error) {
    res.status(500).send({ message: "Failed to get donation" });
  }
};

export const softDeleteDonation = async (req: Request, res: Response) => {
  try {
    console.log(req.user.userId);
    await DonationService.softDeleteDonation(req.params.id, req.user.userId);
    res.status(200).send({ message: "Donation successfully accepted" });
  } catch (error) {
    res.status(500).send({ message: "Failed to accept donation" });
  }
};
