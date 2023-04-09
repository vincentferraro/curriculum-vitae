import { NextFunction } from "express";
import morgan from "morgan";

const myLogger = function (
  req: Request,
  res: Response,
  next: NextFunction
): void {
  morgan("tiny");
  next();
};

export { myLogger };
