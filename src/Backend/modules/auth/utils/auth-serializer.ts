export const serializeUserAsJSON = (user): unknown => ({
  userId: user._id,
  email: user.email,
  name: user.name,
  role: user.role,
  phone: user.phoneNumber,
  ignoredDonations: user.ignoredDonations, // Include ignoredDonations in the serialized output
});
