
import { ptaxGenralData } from "./ptaxDAL.js"

export const ptaxGeneralService = async () => {

    const value = await ptaxGenralData();
    return value;
}