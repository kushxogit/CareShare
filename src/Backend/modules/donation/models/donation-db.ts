import { Schema, model, Document } from 'mongoose';
import { ILocation, donationType } from '../types';

export interface IDonation extends Document {
  title: string;
  description: string;
  pickupTimes: string;
  location: ILocation;
  for: string;
  userId: string;
  type: donationType
}

const donationSchema = new Schema<IDonation>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  pickupTimes: { type: String, required: true },
  location: { type: Object, required: true },
  for: { type: String, required: true },
  userId: { type: String, ref: 'User', required: true },
  type:{type: String, required:true}
});

export default model<IDonation>('Donation', donationSchema);