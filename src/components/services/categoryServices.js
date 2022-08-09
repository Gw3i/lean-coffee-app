import { dbConnect } from "../../dbConnect";
import Category from "../models/leanCategoriesModel";

export async function getAllCategories() {
  await dbConnect();

  const categories = await Category.find();
  console.log(categories);

  return categories.map(({ id, name }) => {
    return { id, name };
  });
}

export async function getCategoryById(id_) {
  await dbConnect();

  const category = await Category.findById(id_);

  const { id, name } = category;

  return { id, name };
}
