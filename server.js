const path = require("path");
const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const port = process.env.PORT || 8080;
const publicPath = path.join(__dirname, "..", "public");
const bodyParser = require("body-parser");

var list = [
  {
    key: 1,
    name: "birthday",
    date: "wednesday, march 5",
    time: "5PM",
    imgURL: "https://via.placeholder.com/500x300",
    description:
      "This is the description for the event. blah blah blah. blah blah blah. blah blah blah. blah blah blah. blah blah blah."
  },
  {
    key: 2,
    name: "birthday",
    date: "wednesday, march 5",
    time: "5PM",
    imgURL: "https://via.placeholder.com/500x300",
    description:
      "This is the description for the event. blah blah blah. blah blah blah. blah blah blah. blah blah blah. blah blah blah."
  },
  {
    key: 3,
    name: "birthday",
    date: "wednesday, march 5",
    time: "5PM",
    imgURL: "https://via.placeholder.com/500x300",
    description:
      "This is the description for the event. blah blah blah. blah blah blah. blah blah blah. blah blah blah. blah blah blah."
  }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "client/build")));
app.use(fileUpload());
app.use(require("prerender-node"));

app.get("/api/getList", (req, res) => {
  res.json(list);
  console.log("Sent list of items", list);
});

app.post("/api/addListItem", req => {
  list.push(req.body);
  console.log(req.body);
});

app.post("/api/deleteListItem", (req, res) => {
  list.pop(req.body.index);
  console.log("deleted list item at index: " + req.body.index);
});
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.listen(port, () => console.log(`Server is up on port ${port}!`));
