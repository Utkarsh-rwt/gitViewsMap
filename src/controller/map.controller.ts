import { Request,Response } from "express";
import Visitor from "../models/visitor.model";

 const getCoordinates = async (req: Request,res: Response) => {
  try {
    const { username } = req.params;

    const visitors  = await Visitor.find({
      visitedGitHubUsername: username,
    }).select("latitude longitude -_id");

    return res.status(200).json(visitors);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default getCoordinates

