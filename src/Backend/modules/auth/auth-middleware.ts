import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    console.log("No token found");
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded: any) => {
    if (err) {
      console.log("Token verification failed:", err);
      return res.sendStatus(403);
    }
    console.log("Decoded user from token:", decoded);
    req.user = decoded;
    next();
  });
};

export default authenticateToken;
