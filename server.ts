import app from "./src/app.ts"
import ConnectToDB from "./src/config/db.ts";


async function start() {
  await ConnectToDB();

  app.listen(5000, () => {
    console.log("server is live");
  });
}

start();