import mongoose from "mongoose";

// Connect to MongoDB (replace 'yourDB' with your actual DB name)
mongoose.connect("mongodb://localhost/yourDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for a user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create a model based on the schema
const User = mongoose.model("User", userSchema);

// Create a new user
const createUser = async () => {
  const user = new User({
    name: "John Doe",
    email: "john@example.com",
  });

  await user.save();
  console.log("User saved:", user);
};

// Fetch all users
const fetchUsers = async () => {
  const users = await User.find();
  console.log("Users in database:", users);
};

// Run the functions
createUser();
fetchUsers();
