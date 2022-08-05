import { dbConnect } from "../../../src/dbConnect";
import LeanCard from "../../../src/components/models/leanCardModel";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    const data = JSON.parse(request.body);

    await LeanCard.create(data);

    response.status(200).json({
      message: "New lean card created",
    });
  }
}
