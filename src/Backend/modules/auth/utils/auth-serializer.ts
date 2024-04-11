export const serializeUserAsJSON = (user): unknown => ({
  userId: user._id,
  email: user.email,
  name: user.name,
});
