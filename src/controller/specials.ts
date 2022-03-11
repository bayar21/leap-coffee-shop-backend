import { Request, Response } from "express";
import {
  getAllSpecials,
  getAllSpecialProducts,
} from "../service/specials.service";

export async function getAllSpecialsHandler(req: Request, res: Response) {
  const specials = await getAllSpecials();
  res.send(specials);
}

export async function getAllSpecialProductsHandler(
  req: Request,
  res: Response
) {
  const specialProducts = await getAllSpecialProducts();
  res.send(specialProducts);
}
