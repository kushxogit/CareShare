import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  ignoredDonations: [String],
});

const User = mongoose.model("Users", userSchema);

export default User;
