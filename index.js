// initialize dotenv package
require("dotenv").config();

// variables globales
import { UserRouter } from "./routes/UserRouter";
let {PORT,USER,PASSWORD,DB_NAME} = process.env
const port = PORT || 3030;

// required import
import express from "express";
const app = express();
let morgan = require("morgan");
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// initialize DB
const URI = `mongodb+srv://${USER}:${PASSWORD}@${USER}.mmpal.mongodb.net/${DB_NAME}`;
const db = mongoose.connection;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to the DB");
});

// middlewares
app.use(morgan("tiny"));
app.use(
  cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/user", UserRouter);

// Listening server
app.listen(port, () => {
  console.log("listening on port:" + port);
});
