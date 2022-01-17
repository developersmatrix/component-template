
import { ptaxGeneral } from "./ptaxModels.js";


export const ptaxGenralData = async () => {

    let data;
    try {
        data = await ptaxGeneral.find();
    }
    catch (error) {
        data = error;
    };
    return data;
}