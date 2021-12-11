import http from "http";
import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/items";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const apiPort = process.env.PORT ?? 5001;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", routes);

app.use((_req, res) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

const httpServer = http.createServer(app);
httpServer.listen(apiPort, () => {
  console.log(`${process.env.SERVER_APP_AUTHOR_NAME}`);
  console.log(`Server running on port ${apiPort}`);
});
