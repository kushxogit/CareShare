import User from "./models/auth-db";

export const createUser = async (name, phoneNumber, email, role, password) => {
  const user = new User({
    name,
    phoneNumber,
    email: email.toLowerCase(),
    password,
    role: role,
  });
  const res = await user.save();
  return user;
};
export const findUserByEmail = async (email) => {
  return await User.findOne({ email: email.toLowerCase() });
};

export const getUserInfo = async (userId) => {
  return await User.findById(userId);
};

export const updateIgnoredDonations = async (
  userId: string,
  donations: string[]
) => {
  return await User.findByIdAndUpdate(
    userId,
    { $set: { ignoredDonations: donations } },
    { new: true }
  );
};
