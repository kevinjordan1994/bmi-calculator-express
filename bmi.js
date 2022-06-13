`use strict`;
const express = require(`express`);
const bodyParser = require(`body-parser`);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get(`/`, function (req, res) {
  res.sendFile(__dirname + `/index.html`);
});

app.post(`/`, function (req, res) {
  const { num1, num2 } = req.body;
  const result = (num1 * 703) / num2 ** 2;
  res.send(`Your BMI is ${result}`);
});

app.listen(3000);
