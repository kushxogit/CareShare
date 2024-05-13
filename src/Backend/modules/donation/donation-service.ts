import Donation, { IDonation } from "./models/donation-db";

export const createDonation = async (donationData: IDonation) => {
  console.log("🚀 ~ createDonation ~ donationData:", donationData);
  const donation = new Donation(donationData);
  console.log("🚀 ~ createDonation ~ donation:", donation);
  return donation.save();
};

export const getAllDonations = async () => {
  console.log("asdfasdsa");
  return Donation.find();
};

export const getAllDonationsForUser = async (userId) => {
  return Donation.find({ active: true, userId: userId });
};

export const getDonationById = async (id: string) => {
  return Donation.findOne({ _id: id, active: true });
};

export const softDeleteDonation = async (id: string, byUserId: string) => {
  return Donation.updateOne(
    { _id: id },
    { active: false, byUserId: byUserId, status: "accepted" }
  );
};
