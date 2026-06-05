 import express from "express";
const router = express.Router();
import getCoordinates from "../controller/map.controller";

router.get("map/:username",getCoordinates);

 export default router;
