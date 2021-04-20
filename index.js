const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const session = require("express-session");
const app = express();

app.use(cors(), session({ secret: "KGjkSVmsiQ2zwpjJ5M9d" }));

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
    .then((jsonResponse) => res.send(jsonResponse))
    .catch((error) => res.send(error));
});

app.listen(2020, () => {
  console.log("server is listening on port 2020");
});

/////////////////////////////////
const VKONTAKTE_APP_ID = "7829476";
const VKONTAKTE_APP_SECRET = "KGjkSVmsiQ2zwpjJ5M9d";

app.get("/auth/vk", (req, res) => {
  const url = `https://oauth.vk.com/access_token?client_id=${VKONTAKTE_APP_ID}&client_secret=${VKONTAKTE_APP_SECRET}&redirect_uri=${req.query.redirect_uri}&code=${req.query.code}`;

  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((jsonResponse) => res.send(jsonResponse))
    .catch((error) => res.send(error));
});

app.get("/vk/api/users/get", (req, res) => {
  const accessToken = req.query.access_token;
  const userId = req.query.user_id;
  const url = `https://api.vk.com/method/users.get?access_token=${accessToken}&user_id=${user_id}`;
  fetch(url)
    .then((response) => response.json())
    .then((jsonResponse) => res.send(jsonResponse))
    .catch((error) => res.send(error));
});
