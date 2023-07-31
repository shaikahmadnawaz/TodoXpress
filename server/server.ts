import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose, { Document, Schema, Model, model } from "mongoose";

const app: Application = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
