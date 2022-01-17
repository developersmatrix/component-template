// Property tax general Information data

import { ptaxGeneralService } from './ptaxServices.js';

const getPtaxGeneral = async (req, res, next) => {
    const responseData = await ptaxGeneralService();
    console.log(responseData);

    res.status(200).json(responseData);
}

const postPtaxGeneral = (req, res, next) => {


}


export default { getPtaxGeneral, postPtaxGeneral }