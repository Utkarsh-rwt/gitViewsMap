
import { Request,Response } from "express";
import User from "../models/user";
import Visitor from "../models/visitor.model";


async function getBadge(req: Request,res: Response) {
    const {username} = req.params;
    const userViewed = await User.findOne({
    githubUsername: username
  });
    let views = 0;

    try {                                                       // updating or creating the count of user
  if(!userViewed){
   await User.create({
        githubUsername: String(username),
        count : 1



            });
  }
  else{
    userViewed.count +=1;
    views=userViewed.count;
            await userViewed.save();

    }
} catch(err){
    throw new Error (`unable to create or update userstats , error recieved - ${err}`);
};

       const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="185" height="20" role="img" aria-label="Profile Views: ${views}">
    <title>GitViewsMap</title>

    <filter id="blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
    </filter>

    <linearGradient id="s" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
        <stop offset="1" stop-opacity=".1" />
    </linearGradient>

    <clipPath id="r">
        <rect width="185" height="20" rx="3" fill="#fff" />
    </clipPath>

    <g clip-path="url(#r)">
        <!-- Profile Views -->
        <rect width="80" height="20" fill="#555" />

        <!-- Count -->
        <rect x="80" width="45" height="20" fill="#007ec6" />

        <!-- ViewMap -->
        <rect x="125" width="60" height="20" fill="#0366d6" />

        <rect width="185" height="20" fill="url(#s)" />
    </g>

    <g
        fill="#fff"
        text-anchor="middle"
        font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
        text-rendering="geometricPrecision"
        font-size="110"
    >

        <!-- Profile Views -->
        <text aria-hidden="true" x="400" y="150" fill="#010101" fill-opacity=".8" filter="url(#blur)" transform="scale(.1)">Profile Views</text>
        <text aria-hidden="true" x="400" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)">Profile Views</text>
        <text x="400" y="140" transform="scale(.1)" fill="#fff">Profile Views</text>

        <!-- Count -->
        <text aria-hidden="true" x="1025" y="150" fill="#010101" fill-opacity=".8" filter="url(#blur)" transform="scale(.1)">${views}</text>
        <text aria-hidden="true" x="1025" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)">${views}</text>
        <text x="1025" y="140" transform="scale(.1)" fill="#fff">${views}</text>

        <!-- ViewMap -->
        <text aria-hidden="true" x="1550" y="150" fill="#010101" fill-opacity=".8" filter="url(#blur)" transform="scale(.1)">ViewMap ↗</text>
        <text aria-hidden="true" x="1550" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)">ViewMap ↗</text>
        <text x="1550" y="140" transform="scale(.1)" fill="#fff">ViewMap ↗</text>

    </g>
</svg>`;


res.setHeader(
  "Cache-Control",
  "max-age=0, no-cache, no-store, must-revalidate"
);
res.setHeader("Pragma", "no-cache");
res.setHeader("Expires", "0");
res.setHeader("Content-Type", "image/svg+xml");
return res.send(svg);



}


export default getBadge;
