const mongooes = require("mongoose");
const DataSchema = mongooes.Schema(
  {
    brandName: { type: String, unique: true, required: true },
    brandImage: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const BrandModel = mongooes.model("brands", DataSchema);
module.exports = BrandModel;
