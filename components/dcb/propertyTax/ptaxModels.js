import mongoose from "mongoose";

const ptaxGeneralSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  startYear: String,
  endYear: String,
  totalNoOfProperties: String,
  openingBalance: String,
  currentYearDemand: String,
});

export const ptaxGeneral = mongoose.model("PtaxGeneral", ptaxGeneralSchema);

const ptaxCollectionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  year: String,
  month: String,
  OBCollection: String,
  CYDCollection: String,
});

export const ptaxCollection = mongoose.model(
  "PtaxCollection",
  ptaxCollectionSchema
);
