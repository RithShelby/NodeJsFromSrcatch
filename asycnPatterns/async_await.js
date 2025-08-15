async function getUserData(userId) {
 try {
  const user = await User.findById(userId);
  const orders = await Order.find({ userId });
  return { user, orders };
 } catch (error) {
  console.error("Failed to fetch user data:", error);
  throw error; // Re-throw or handle appropriately
 }
}
