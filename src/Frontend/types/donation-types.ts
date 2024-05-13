import { User } from "./user-types";

export interface ILocation {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface IDonationData {
  id: string;
  active: boolean;
  title: string;
  description: string;
  pickupTimes: string;
  location: ILocation;
  for: string;
  userId: string;
  byUserId: string;
  expiry?: number; // Optional expiry field
  createdAt: Date; // Required createdAt field
}

export interface IDonationDataWithUser {
  id: string;
  active: boolean;
  title: string;
  description: string;
  pickupTimes: string;
  location: ILocation;
  for: string;
  image?: File;
  user: User;
  byUserId: string;
  expiry?: number; // Optional expiry field
  createdAt: Date; // Required createdAt field
}

export interface ICreateDonationData {
  title: string;
  description: string;
  pickupTimes: string;
  location: ILocation;
  for: string;
  expiry?: number;
}

export interface IListItem {
  id: string;
  title: string;
  description: string;
}
