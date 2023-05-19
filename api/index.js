const express = require("express");
const Post = require("../models/post");
const { default: mongoose } = require("mongoose");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use(express.json());
const testPost = new Post({
  name: "Max",
  post: "bex <3",
});

app.post("/api/post", (request, response) => {
  const publicar = new Post({
    name: request.body.name,
    post: request.body.post,
  });
  publicar.save().then((result) => {
    console.log("200");
    mongoose.connection.close();
    response.status(200).end();
  });
});
app.get("/api/posts", (request, response) => {
  Post.find({}).then((posts) => {
    response.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    response.json(posts);
  });
});
