import { IDonation } from "../models/donation-db";

export const serializeDonation = (donation: IDonation) => {
  return {
    id: donation._id,
    active: donation.active,
    title: donation.title,
    description: donation.description,
    pickupTimes: donation.pickupTimes,
    location: donation.location,
    for: donation.for,
    userId: donation.userId,
    image: donation.image,
    byUserId: donation.byUserId,
    expiry: donation.expiry,
    createdAt: donation.createdAt,
  };
};

export const serializeDonations = (donations: IDonation[]) => {
  return donations.map(serializeDonation);
};
