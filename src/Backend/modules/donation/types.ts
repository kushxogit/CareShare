export interface ILocation {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export enum DonationType {
  FOOD = "food",
  NONFOOD = "non food",
}

export interface IDonation {
  title: string;
  description: string;
  pickupTimes: string;
  location: ILocation;
  for: string;
  type: DonationType;
}
