import { dbConnect } from "../../../src/dbConnect";
import LeanCard from "../../../src/components/models/leanCardModel";

export default async function handler(request, response) {
  const { id } = request.query;

  await dbConnect();

  if (request.method === "PUT") {
    const data = JSON.parse(request.body);
    await LeanCard.findByIdAndUpdate(id, data);
    response.status(200).json({ message: "Lean Card updated" });
  } else if (request.method === "DELETE") {
    await LeanCard.findByIdAndDelete(id);
    response.status(200).json({ message: "Lean Card deleted" });
  }
}
