const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, uniq: true },
  email: { type: String, required: true, uniq: true },
  password: { type: String, required: true },
  profilPic: { type: String, default: "" },
  isAdmin: {type:Boolean, default:false}
},
{timestamps:true}
);


module.exports = mongoose.model("User", UserSchema)