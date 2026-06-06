import express from "express"
import Badgerouter from "./routes/badge"
import morgan from "morgan"
import mapRouter from "./routes/map"
import path from "path"
import expressListRoutes from "express-list-routes"

const app = express();

app.set("trust proxy", true);

app.use(express.json());
app.use(morgan("dev"))
app.use( Badgerouter);
app.use( mapRouter);

app.use(express.static(path.join(process.cwd(), "src", "public")));

app.get("/:username", (req, res, next) => {
  const username = req.params.username;
  if (username.includes('.') || username === 'map' || username === 'badge') {
    return next();
  }
  res.sendFile(path.join(process.cwd(), "src", "public", "index.html"));
});

expressListRoutes(app);

export default app;