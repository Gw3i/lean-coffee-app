import { dbConnect } from "../../dbConnect";
import Category from "../Category";

export async function getAllCategories() {
  await dbConnect();

  const categories = await Category.find();

  return categories.map(({ id, name }) => {
    return { id, name };
  });
}

export async function getCategoriesById(id_) {
  await dbConnect();

  const category = await Category.findById(id_);

  const { id, name } = category;

  return { id, name };
}
