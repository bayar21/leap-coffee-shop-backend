import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

export function checkAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(token, "Aliishuu");

  if (decoded) {
    req.userId = decoded._id;
    next();
  } else {
    res.status(401).send({ error: "Please Log in" });
  }
}
