const calculator = require("express");
const bodyParser = require("body-parser");

const app = calculator();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3050;
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/cal.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var add = num1 + num2;
  console.log(add);
  res.send("Addition is: " + add);
});
app.listen(port, () => {
  console.log("server is hosted on `port`");
});
