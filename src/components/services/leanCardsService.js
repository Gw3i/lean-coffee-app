import { dbConnect } from "../../dbConnect";
import LeanCard from "../models/leanCardModel";

export async function getAllLeanCards() {
  await dbConnect();

  const leanCards = await LeanCard.find().populate("category");

  return leanCards.map(({ id, topic, author, category }) => {

    return {
      id,
      topic,
      author,
      // category: {
      //   id: category.id,
      //   name: category.name,
      // },
    };
  });
}

export async function getLeanCardById(id_) {
  await dbConnect();

  const leanCard = await LeanCard.findById(id_);

  const { id, topic, author, category } = leanCard;

  return {
    id,
    topic,
    author,
    // category: {
    //   name: category.name,
    //   categoryId: category.id,
    // },
  };
}
