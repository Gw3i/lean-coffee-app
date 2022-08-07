import { dbConnect } from "../../dbConnect";
import LeanCard from "../models/leanCardModel";

export async function getAllLeanCards() {
  await dbConnect();

  const leanCards = await LeanCard.find();

  return leanCards.map(({ id, topic, author }) => {
    return { id, topic, author };
  });
}

export async function getLeanCardById(id_) {
  await dbConnect();

  const leanCard = await LeanCard.findById(id_);

  const { id, topic, author } = leanCard;

  console.log(leanCard.id);
  return {
    id,
    topic,
    author,
  };
}
