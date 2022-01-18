import express from "express";

import ptax from "./ptaxControllers.js";

const router = express.Router();

router.get("/general/", ptax.getPtaxGeneral);
// router.post("/general", ptax.postPtaxGeneral);

router.get("/collection", ptax.getPtaxCollection);

export default router;
