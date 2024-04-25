import express, { json } from "express";
import authRoute from "./routers/authRoute.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("app is running at port 8800");
});
