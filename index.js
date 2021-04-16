const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();

app.use(cors());

app.get("/:token/:lon,:lat/realtime.json", (req, res) => {
  const apiKey = req.params.token;
  const lon = req.params.lon;
  const lat = req.params.lat;

  const url = `https://api.caiyunapp.com/v2.5/${apiKey}/${lon},${lat}/realtime.json`;

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  })
    .then((response) => response.json())
    .then((jsonResponse) => res.send(jsonResponse));
});

app.listen(2020, () => {
  console.log("server is listening on port 2020");
});
