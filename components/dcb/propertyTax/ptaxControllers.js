// Property tax general Information data

import { ptaxGeneralService, ptaxCollectionService } from "./ptaxServices.js";

const getPtaxGeneral = async (req, res, next) => {
  const financialYear = req.query.financialYear;

  try {
    const responseData = await ptaxGeneralService(financialYear);
    res.status(200).json(responseData);
  } catch (error) {
    next(error);
  }
};

const getPtaxCollection = async (req, res, next) => {
  const month = req.query.month;

  try {
    const responseData = await ptaxCollectionService(month);
    res.status(200).json(responseData);
  } catch (error) {
    next(error);
  }
};

export default { getPtaxGeneral, getPtaxCollection };
