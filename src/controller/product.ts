import { Request, Response } from "express";
import {
  getAllProducts,
  getProductById,
  getProductsByCategoryId,
  createProduct,
} from "../service";

export async function getProductsHandler(req: Request, res: Response) {
  const { categoryId } = req.query;
  if (categoryId) {
    const products = await getProductsByCategoryId(categoryId as string);
    res.send(products);
  } else {
    const products = await getAllProducts();
    res.send(products);
  }
}

export async function getProductByIdHandler(req: Request, res: Response) {
  const product = await getProductById(req.params.id);
  res.send(product);
}

export async function createProductHandler(req: Request, res: Response) {
  try {
    await createProduct(req.body.data);
    res.send({ success: true });
  } catch (err) {
    res.send({ error: err });
  }
}
