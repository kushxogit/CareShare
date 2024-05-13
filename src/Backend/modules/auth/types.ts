export interface User {
  _id: string;
  email: string;
  name?: string;
  role?: string;
  phone?: string;
  ignoredDonations?: string[]; // Array of donation IDs to ignore
}
