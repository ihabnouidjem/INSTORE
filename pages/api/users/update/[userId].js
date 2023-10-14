import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb";

const postItems = async (db, uid, items, res) => {
  const postedItems = await db
    .collection("Users")
    .updateOne(
      { uid: uid },
      { $set: items, $currentDate: { lastUpdated: true } }
    );
  await res.status(200).json(postedItems);
};

export default async function Handler(req, res) {
  const client = await clientPromise;
  const db = client.db("instore");

  const { userId } = req.query;

  const data = await Promise.all([db, userId]);

  if (req.method === "POST") {
    const items = await req.body;
    postItems(data[0], data[1], items, res);
  }
}
