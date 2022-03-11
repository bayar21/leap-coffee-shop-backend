import CategoryModel from "../model/categoryModel";

export function getAllCategories() {
  return CategoryModel.find({});
}

export function getCategoryById(id: string) {
  return CategoryModel.findById(id);
}
