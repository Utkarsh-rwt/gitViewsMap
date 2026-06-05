import app from "./src/app"
import ConnectToDB from "./src/config/db";


async function start() {
  await ConnectToDB();

  app.listen(5000, () => {
    console.log("server is live");
  });
}

start();