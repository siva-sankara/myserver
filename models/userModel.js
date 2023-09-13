const mongoose = require("mongoose");

const usermodel = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType : {
    type :String,
    required : true,
    enum : ["user", "admin"]
  },
  token:{
    type:String
  },
  resetPasswordExpires: {
    type: Date,
  },
  additionalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AdditionalDetails",
  },
  prompts: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PromptModel",
      },
    ],
  },
});

const userModel = mongoose.model("userModel", usermodel);
module.exports = userModel;
