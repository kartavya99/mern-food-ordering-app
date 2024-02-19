import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  res.send({ message: "Hello World!" });
});

app.listen(8080, () => {
  console.log("Server running on localhost: 8080");
});
