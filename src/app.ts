import express from "express"
import Badgerouter from "./routes/badge"
import morgan from "morgan"
import mapRouter from "./routes/map"
 const app = express();


app.use(express.json());
app.use(morgan("dev"))
app.use("/", Badgerouter);
app.use("/", mapRouter);
app.use("/", express.static("public"));



export default app;