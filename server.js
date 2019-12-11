const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.get("/", function(req, res) {
  res.send("Hi");
});

const PORT = process.env.PORT || 5000;

//npm run server to start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
