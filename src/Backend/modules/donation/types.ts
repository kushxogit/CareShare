export interface ILocation {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export enum donationType {
  FOOD = "food",
  NONFOOD = "non food",
}

export interface IDonation {
  title: string;
  description: string;
  pickupTimes: string;
  location: ILocation;
  for: string;
  type: donationType;
}
