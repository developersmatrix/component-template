import { ptaxGeneral } from "./ptaxModels.js";

export const ptaxGenralData = async (startYear, endYear) => {
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
