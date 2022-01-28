import mongoose from "mongoose";

const Connection = async () => {
  const URL =
    "mongodb+srv://umair:umair@blog.ne0ye.mongodb.net/BLOG?retryWrites=true&w=majority";
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("My Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
