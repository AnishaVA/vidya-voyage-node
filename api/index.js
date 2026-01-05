const express = require("express");
const path = require("path");

const app = express();

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views")); // IMPORTANT

app.use(express.static('public'));

// Home route
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

// University route
app.get("/university", (req, res) => {
  res.render("university", { title: "Universities" });
});

// contact route
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});
/**
 * ✅ Run server ONLY when running locally
 * ❌ Vercel will ignore this and use the exported app
 */
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Local server running at http://localhost:${PORT}`);
  });
}

// ❌ DO NOT use app.listen()
// ✅ Export app for Vercel
module.exports = app;
