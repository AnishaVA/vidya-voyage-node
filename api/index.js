const express = require("express");
const path = require("path");
const app = express();

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views")); // IMPORTANT

// Home route
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

// University route
app.get("/university", (req, res) => {
  res.render("university", { title: "Universities" });
});

// ❌ DO NOT use app.listen()
// ✅ Export app for Vercel
module.exports = app;
