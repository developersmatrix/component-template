import { ptaxCollection, ptaxGeneral } from "./ptaxModels.js";

export const ptaxGeneralData = async (startYear, endYear) => {
  try {
    const data = await ptaxGeneral.find({
      startYear: startYear,
      endYear: endYear,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const ptaxCollectionData = async (month) => {
  try {
    const data = await ptaxCollection.find();
    return data;
  } catch (error) {
    throw error;
  }
};
