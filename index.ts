import express, { NextFunction, Request, Response } from "express";
// import { myLogger} from "./middlewares/logging";
import morgan from "morgan";
const app = express();

const port = 3000;

app.use(morgan("tiny"));

app.get("/", (req: Request, res: Response): void => {
  res.send("hello World");
});

app.get("/cv", (req: Request, res: Response): void => {
  res.send("Curriculum vitae");
});

// app.get("/token", (req: Request, res: Response): string => {});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
