import { Request, Response } from "express";
import * as DonationService from "./donation-service";
import {
  serializeDonation,
  serializeDonations,
} from "./utils/donation-serializer";

export const createDonation = async (req: Request, res: Response) => {
  try {
    const donationData = {
      ...req.body,
      userId: req.user.userId,
    };
    const donation = await DonationService.createDonation(donationData);
    res.status(201).send({ donation: serializeDonation(donation) });
  } catch (error) {
    res.status(500).send({ message: "Failed to create donation" });
  }
};

export const getAllDonations = async (req: Request, res: Response) => {
  try {
    const donations = await DonationService.getAllDonations(req.params.id);
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
    await DonationService.softDeleteDonation(req.params.id);
    res.status(200).send({ message: "Donation successfully deleted" });
  } catch (error) {
    res.status(500).send({ message: "Failed to delete donation" });
  }
};
