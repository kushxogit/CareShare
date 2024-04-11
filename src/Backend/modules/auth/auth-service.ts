import User from "./models/auth-db";

export const createUser = async (name, phoneNumber, email, password) => {
  console.log("Creating user with name: ", name, " phone number: ", phoneNumber, " email: ", email, " password: ", password);
  const user = new User({ name, phoneNumber, email, password });
  await user.save();
  return user;
};
export const findUserByEmail = async (email) => {
  return User.findOne({ email });
};
