const path = require("path");
const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const port = process.env.PORT || 8080;
const publicPath = path.join(__dirname, "..", "public");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.use(fileUpload());
app.use(require("prerender-node"));
app.get("/api/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});
app.post("/upload", (req, res) => {
  if (req.files == null) {
    return res.status(400).json({ msg: "no file was uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(error);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.listen(port, () => console.log(`Server is up on port ${port}!`));
