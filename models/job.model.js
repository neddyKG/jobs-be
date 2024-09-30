const mongoose = require("mongoose");
const company = require("./company.model").schema;

const jobSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  type: { type: String },
  location: { type: String },
  description: { type: String },
  salary: { type: String },
  company: { type: company }
});

module.exports = mongoose.model("Job", jobSchema);
