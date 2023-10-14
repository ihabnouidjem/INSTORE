import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

const fetchRelatedProducts = async (db, pid, res) => {
  const product = await db
    .collection("Products")
    .findOne({ _id: new ObjectId(pid) });
  const related = await db
    .collection("Products")
    .find({
      $and: [
        { _id: { $nin: [new ObjectId(pid)] } },
        { type: product.type },
        { category: product.category },
      ],
    })
    .toArray();
  res.status(200).json(related.slice(0, 4));
};

export default async function Handler(req, res) {
  const client = await clientPromise;
  const db = await client.db("instore");

  const { productId } = req.query;

  if (req.method === "GET") {
    fetchRelatedProducts(db, productId, res);
  }
}
