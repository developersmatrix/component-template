import { ptaxGeneralData } from "./ptaxDAL.js";

export const ptaxGeneralService = async (financialYear) => {
  const [startYear, endYear] = financialYear.split("-");
  try {
    const value = await ptaxGeneralData(startYear, endYear);
    return value;
  } catch (error) {
    return new Error(error);
  }
};

export const ptaxCollectionService = async (month) => {
  try {
    const monthlyCollection = await ptaxCollectionData(month);
    return monthlyCollection;
  } catch (error) {
    console.log(error);
    return error;
  }
};
