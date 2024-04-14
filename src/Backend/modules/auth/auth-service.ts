import User from "./models/auth-db";

export const createUser = async (name, phoneNumber, email, password) => {
  const user = new User({ name, phoneNumber, email: email.toLowerCase(), password });
  await user.save();
  return user;
};
export const findUserByEmail = async (email) => {
  return User.findOne({ email: email.toLowerCase() });
};

