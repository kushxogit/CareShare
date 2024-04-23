import Donation, { IDonation } from "./models/donation-db";

export const createDonation = async (donationData: IDonation) => {
  const donation = new Donation(donationData);
  console.log("🚀 ~ createDonation ~ donation:", donation)
  return donation.save();
};

export const getAllDonations = async () => {
  return Donation.find({ active: true });
};

export const getAllDonationsForUser = async (userId) => {
  return Donation.find({ active: true, userId: userId });
};

export const getDonationById = async (id: string) => {
  return Donation.findOne({ _id: id, active: true });
};

export const softDeleteDonation = async (id: string) => {
  return Donation.updateOne({ _id: id }, { active: false });
};
