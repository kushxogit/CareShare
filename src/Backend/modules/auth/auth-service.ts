import User from "./models/auth-db";

export const createUser = async (name, phoneNumber, email, role, password) => {

    const user = new User({
      name,
      phoneNumber,
      email: email.toLowerCase(),
      password,
      role: role,
    });
    console.log(user);
    const res = await user.save();
    console.log(res, "aassres");
    return user;

};
export const findUserByEmail = async (email) => {

    return await User.findOne({ email: email.toLowerCase() });
  
};
