const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const publicPath = path.join(__dirname, "..", "public");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "client/build")));
app.use(require("prerender-node"));

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.listen(port, () => console.log(`Server is up on port ${port}!`));
