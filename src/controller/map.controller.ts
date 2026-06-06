import { Request,Response } from "express";
import Visitor from "../models/visitor.model";

 const getCoordinates = async (req: Request,res: Response) => {
 const {username} = req.params;
  try{                                                     // storing the data of visitor
    const ip = req.ip;
    let  information:any = await  fetch(`http://ip-api.com/json/${ip}`);
    information =  await information.json();

    if (information.status !=="success") {
        throw new Error("Unable to fetch location");
        }
        await Visitor.create({
 
        visitedGitHubUsername:username as string,
        ip:ip,
      latitude:information.lat,
      longitude:information.lon

    })

}catch(err){
    console.log(`failed to get visitors info ${err}`)

}
  try {

    const visitors  = await Visitor.find({                //returning data of visitors
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

