const express = require("express");
app = express();

PORT = 8080;
HOST = "0.0.0.0";

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
