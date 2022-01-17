import express from "express";

import ptax from "./ptaxControllers.js";

const router = express.Router();

router.get("/general", ptax.getPtaxGeneral);
router.post("/", ptax.postPtaxGeneral);

export default router;