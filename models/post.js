require("dotenv").config();
const { default: mongoose } = require("mongoose");
const url = process.env.PASS_KEY;

mongoose.set("strictQuery", false);

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });
const postSchema = new mongoose.Schema({
  name: String,
  post: String,
});

module.exports = mongoose.model("Post", postSchema);
