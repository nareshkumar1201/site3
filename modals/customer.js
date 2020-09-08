const mongoose = require("mongoose");
const custSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contactNo: {
      type: Number,
      required: true,
    },
    devType: {
      type: String,
      required: true,
    },
    projDetails: {
      type: String,
      required: true,
    },
    isChecked: {
      type: Boolean,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CustInfo", custSchema);
