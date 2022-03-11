import { Request, Response } from "express";
import { getAllCategories, getCategoryById } from "../service/category.service";

export async function getAllCategoriesHandler(req: Request, res: Response) {
  const categories = await getAllCategories();
  res.send(categories);
}

export async function getCategoryByIdHandler(req: Request, res: Response) {
  const category = await getCategoryById(req.params.id);
  res.send(category);
}
