import express, { NextFunction, Request, Response } from "express";

// import { myLogger} from "./middlewares/logging";
import morgan from "morgan";
import getToken from "./token/token";
// Create server
const app = express();
const port = 3000;

// Middlewares
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes

app.post("/token", getToken);
app.get("/", (req: Request, res: Response): void => {
  res.send("hello World");
});

app.get("/cv", (req: Request, res: Response): void => {
  res.send("Curriculum vitae");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export { app };
