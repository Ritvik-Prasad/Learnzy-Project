const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const userRoutes = require("./routes/userRoutes");
const tutorRoutes = require("./routes/tutorRoutes");
const adminRoutes = require("./routes/adminRoutes");
const prospectRoutes = require("./routes/prospectRoutes");
const cors = require("cors");

//middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/students", studentRoutes);
app.use("/api/tutor", tutorRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/prospect", prospectRoutes);

//connection to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db an listening on port", process.env.PORT);
    });
  })
  .catch((e) => console.log(e));
