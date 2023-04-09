import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const privateKey: string = process.env.PRIVATE_KEY_TOKEN as string;

// interface jsonObject {
//   name: string;
//   lastname: string;
// }
function createToken(name: string, lastname: string): string {
  const token = jwt.sign({ name: name, lastname: lastname }, privateKey, {
    expiresIn: "1hour",
  });
  return token;
}

interface token {
  name: string;
  lastname: string;
  iat: number;
  exp: number;
}
function verifyToken(token: string): boolean {
  const tokenVerified: token = jwt.verify(token, privateKey) as token;
  if (tokenVerified.name === "Vincent") {
    return true;
  } else {
    return false;
  }
}

export { createToken, verifyToken };
