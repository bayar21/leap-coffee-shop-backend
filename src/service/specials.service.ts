import SpecialsModel from "../model/specialsModel";

export function getAllSpecials() {
  return SpecialsModel.find({});
}

export async function getAllSpecialProducts() {
  const specialProducts = await getAllSpecials().populate("productIds");
  return specialProducts;
}
