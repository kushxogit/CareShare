import { Schema, model, Document } from "mongoose";
import { ILocation, DonationType } from "../types";

export interface IDonation extends Document {
  title: string;
  active:boolean;
  description: string;
  pickupTimes: string;
  location: ILocation;
  for: string;
  userId: string;
  type: DonationType;
}

const donationSchema = new Schema<IDonation>({
  active:{type:Boolean, default:true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  pickupTimes: { type: String, required: true },
  location: { type: Object, required: true },
  for: { type: String, required: true },
  userId: { type: String, ref: "User", required: true },
  type: { type: String, required: false },
});

export default model<IDonation>("Donation", donationSchema);
