// required import
import express from "express";
const axios = require("axios");

let UserRouter = express.Router();

/* suppress comment and adjust your routes
UserRouter.route("/")
  .get(() => {})
  .post(() => {})
  .put(() => {})
  .delete(() => {});
*/

export { UserRouter };
