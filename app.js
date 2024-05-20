import express, { json } from "express";
import authRoute from "./routers/authRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("app is running at port 8800");
});
