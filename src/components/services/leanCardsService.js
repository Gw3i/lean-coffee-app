import { dbConnect } from "../../dbConnect";
import LeanCard from "../models/leanCardModel";

export async function getAllLeanCards() {
  await dbConnect();

  const leanCards = await LeanCard.find();

  return leanCards.map(({ id, topic, author }) => {
    return {
      id,
      topic,
      author,
    };
  });
}


