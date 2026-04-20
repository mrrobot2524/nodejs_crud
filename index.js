import express from "express";
import mongoose, { connect } from "mongoose";
import router from "./router.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swager.js";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

const app = express();
app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  console.log(req.query);
  res.status(200).json("Server is working - 112");
});

async function connectDB() {
  return mongoose.connect(DB_URL);
}

async function startServer() {
  app.listen(PORT, () => console.log("SERVER IS STARTED ON PORT " + PORT));
}

async function startApp() {
  try {
    await connectDB();
    await startServer();
  } catch (e) {
    console.error("Startup error: ", e);
    console.exit(1);
  }
}
startApp();
