import { IDonation } from "../models/donation-db";

export const serializeDonation = (donation: IDonation) => {
  return {
    id: donation._id,
    title: donation.title,
    description: donation.description,
    pickupTimes: donation.pickupTimes,
    location: donation.location,
    for: donation.for,
    userId: donation.userId,
  };
};

export const serializeDonations = (donations: IDonation[]) => {
  return donations.map(serializeDonation);
};
