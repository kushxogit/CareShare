import Donation, { IDonation } from "./models/donation-db";

export const createDonation = async (donationData: IDonation) => {
  console.log(donationData, "sadjkasdkjasd");
  const donation = new Donation(donationData);
  console.log("🚀 ~ createDonation ~ donation:", donation);
  return donation.save();
};

export const getAllDonations = async (userId: string) => {
  return Donation.find().populate(userId);
};

export const getDonationById = async (id: string) => {
  return Donation.findOne({ _id: id, deleted: false });
};

export const softDeleteDonation = async (id: string) => {
  return Donation.updateOne({ _id: id }, { deleted: true });
};
