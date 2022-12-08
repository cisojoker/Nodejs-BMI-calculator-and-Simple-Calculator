//jshint eversion:8
const bmicalculator = require("express");
const bodyParser = require("body-parser");

const app = bmicalculator();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3050;
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/cal.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  console.log(num1 + num2);
  res.send("TY");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmi.html");
});

app.post("/", function (req, res) {
  var height = parseFloat(req.body.num1);
  var weight = parseFloat(req.body.num2);
  var reslu = weight / (height * height);
  res.send("your BMI Is" + reslu);
});

app.listen(port, () => {
  console.log("server is hosted on `port`");
});
