import { ptaxGenralData } from "./ptaxDAL.js";

export const ptaxGeneralService = async (startYear, endYear) => {
  try {
    const value = await ptaxGenralData(startYear, endYear);
    return value;
  } catch (error) {
    return new Error(error);
  }
};
