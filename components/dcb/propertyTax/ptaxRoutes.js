import express from "express";

import ptax from "./ptaxControllers.js";

const router = express.Router();

router.get("/general/:startYear/:endYear", ptax.getPtaxGeneral);
router.post("/general", ptax.postPtaxGeneral);

export default router;
