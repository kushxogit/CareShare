export interface ILocation {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface IDonationData {
  id: string;
  title: string;
  description: string;
  pickupTimes: string;
  location: ILocation;
  for: string;
}

export interface ICreateDonationData {
  title: string;
  description: string;
  pickupTimes: string;
  location: ILocation;
  for: string;
}

export interface IListItem {
  id: string;
  title: string;
  description: string;
}
