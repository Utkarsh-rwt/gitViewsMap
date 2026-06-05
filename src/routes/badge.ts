import express from "express";
const router = express.Router();
import getBadge from "../controller/badge.controller";

router.get("/badge/:username.svg",getBadge);

 export default router;
