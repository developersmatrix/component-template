import { ptaxCollection, ptaxGeneral } from "./ptaxModels.js";

export const ptaxGeneralData = async (startYear, endYear) => {
  try {
    const data = await ptaxGeneral.find({
      startYear: startYear,
      endYear: endYear,
    });
    return data;
  } catch (error) {
    return new Error(error);
  }
};

export const ptaxCollectionData = async (month) => {
  try {
    const data = await ptaxCollection.find();
    console.log(data);
    return data;
  } catch (error) {
    return new Error(error);
  }
};
