import { ptaxGeneralData, ptaxCollectionData } from "./ptaxDAL.js";

export const ptaxGeneralService = async (financialYear) => {
  const [startYear, endYear] = financialYear.split("-");
  try {
    const value = await ptaxGeneralData(startYear, endYear);
    return value;
  } catch (error) {
    throw error;
  }
};

export const ptaxCollectionService = async (month) => {
  try {
    const monthlyCollection = await ptaxCollectionData(month);
    if (monthlyCollection === null) {
      const error = new Error("Not Found");
      error.status = 404;
      throw error;
    }
    return monthlyCollection;
  } catch (error) {
    throw error;
  }
};
