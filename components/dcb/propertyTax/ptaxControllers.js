// Property tax general Information data

import { ptaxGeneralService } from "./ptaxServices.js";

const getPtaxGeneral = async (req, res, next) => {
  const startYear = res.params.startYear;
  const endYear = res.params.endYear;
  try {
    const responseData = await ptaxGeneralService();
    res.status(200).json(responseData);
  } catch (error) {
    next(error);
  }
};

const postPtaxGeneral = (req, res, next) => {};

export default { getPtaxGeneral, postPtaxGeneral };
