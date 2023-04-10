import { NextFunction, Request, Response } from "express";
import { createToken } from "./jwt";

// Create TOKEN for the user
export default function getToken(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const token = createToken(
    req.query.name as string,
    req.query.lasname as string
  );
  res.json({ token: token });
}
