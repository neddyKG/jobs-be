const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  contactEmail: { type: String },
  contactPhone: { type: String },
});

module.exports = mongoose.model("Company", companySchema);
