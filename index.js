const express = require("express");
const Post = require("./models/post");
const { default: mongoose } = require("mongoose");
const app = express();

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const testPost = new Post({
  name: "Max",
  post: "bex <3",
});

app.get("/posts", (request, response) => {
  Post.find({}).then((posts) => {
    response.json(posts);
  });
});
