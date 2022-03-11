import ProductModel, { ProductInterface } from "../model/productModel";

export function getAllProducts() {
  return ProductModel.find({});
}

export function getProductsByCategoryId(id: string) {
  return ProductModel.find({ categoryId: id });
}

export function getProductById(id: string) {
  return ProductModel.findById(id);
}

export async function createProduct(product: ProductInterface) {
  const newProduct = new ProductModel(product);
  await newProduct.save();
}
