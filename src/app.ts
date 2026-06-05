import express from "express"
import Badgerouter from "./routes/badge"
import morgan from "morgan"
 const app = express();


app.use(express.json());
app.use(Badgerouter);
app.use(morgan("dev"))


export default app;