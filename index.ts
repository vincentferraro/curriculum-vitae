import express, { NextFunction, Request, Response } from "express";
// import { myLogger} from "./middlewares/logging";
import morgan from "morgan";
import { createToken } from "./jwt";
const app = express();

const port = 3000;

app.use(morgan("tiny"));

app.get("/", (req: Request, res: Response): void => {
  res.send("hello World");
});

app.post("/token", (req: Request, res: Response): void => {
  const token = createToken(
    req.query.name as string,
    req.query.lasname as string
  );
  res.json({ token: token });
});
app.get("/cv", (req: Request, res: Response): void => {
  res.send("Curriculum vitae");
});

// app.get("/token", (req: Request, res: Response): string => {});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
