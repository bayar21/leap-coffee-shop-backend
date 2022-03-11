import express, { Router } from "express";
import routes from "./routes";
import mongoose from "mongoose";
import path from "path";
import bodyParser from "body-parser";
import {
  DB_HOST_DEV,
  DB_PASS_DEV,
  DB_USER_DEV,
  DB_CONNECTION_TYPE,
} from "./config";
const mongoUrl = `${DB_CONNECTION_TYPE}://${DB_USER_DEV}:${DB_PASS_DEV}@${DB_HOST_DEV}`;
console.log(mongoUrl);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

routes(app);

app.listen(7000, () => {
  console.log("Express server listening on 7000");
});

mongoose
  .connect(mongoUrl)
  .then(() => {})
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

mongoose.connection.on("disconnect", (err) => {
  console.error(err), process.exit(1);
});
