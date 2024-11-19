const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

connectDB();

const PORT = process.env.PORT || 3500;

const app = express();
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

// this is to make the public static file accessible globally, ex. public/css/style.css can be called with css/styles.css
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/root"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/userRoutes"));
app.use("/api", require("./routes/cropRoutes"));
app.use("/api", require("./routes/cropEncylopediaRoutes"));
app.use("/api", require("./routes/conditionRoutes"));

// app.all("*", (req, res) => {
//   res.status(404);
//   if (req.accepts("html")) {
//     res.sendFile(path.join(__dirname, "views", "404.html"));
//   } else if (req.accepts("json")) {
//     res.json({ message: "404 Not Found" });
//   } else {
//     res.type("txt").send("404 Not Found");
//   }
// });

//this is executed once when the connection is successful
mongoose.connection.once("open", () => {
  console.log("Connected to Database");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

//this is executed once when an error occurs
mongoose.connection.on("error", (error) => {
  console.error(error);
});
