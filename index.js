const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 80;
const staticpath = path.join(__dirname, "/");

var antares = require("antares-http");

app.use(express.static(staticpath));

app.get("/", function (req, res) {
  res.sendFile(staticpath + "/index.html");
});

app.get("/api", function (req, res) {
  antares.setAccessKey("308dc6562006e641:668a6df9bf313141");
  antares.get("Firebending", "GassSensor").then(function (response) {
    const data = response.content;
    res.json(data);
  });
});

app.listen(port);
