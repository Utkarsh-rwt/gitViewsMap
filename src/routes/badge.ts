import express from "express";
const router = express.Router();
import getBadge from "../controller/badge.controller";

router.get("/:username.svg",getBadge);

 export default router;
