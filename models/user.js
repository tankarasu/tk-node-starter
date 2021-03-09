import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  mail: String,
});

let users = mongoose.model("user", UserSchema);

export { users };
