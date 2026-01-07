const express = require("express");
const path = require("path");

const app = express();

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

// ✅ FIX: correct public path for Vercel
app.use(express.static(path.join(process.cwd(), "public")));

// Routes
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/university", (req, res) => {
  res.render("university", { title: "Universities" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});

// Local only
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Local server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
