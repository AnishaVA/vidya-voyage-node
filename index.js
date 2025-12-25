const express = require("express");
const path = require("path");

const app = express();

// View engine
app.set("view engine", "ejs");

// IMPORTANT: use process.cwd(), not __dirname
app.set("views", path.join(process.cwd(), "views"));

// Home route
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

// University route
app.get("/university", (req, res) => {
  res.render("university", { title: "Universities" });
});

// ❌ NO app.listen() on Vercel
module.exports = app;
