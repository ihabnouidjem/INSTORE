import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

const fetchProduct = async (db, pid, res) => {
  const product = await db
    .collection("Products")
    .findOne({ _id: new ObjectId(pid) });
  res.status(200).json(product);
};

export default async function Handler(req, res) {
  const client = await clientPromise;
  const db = await client.db("instore");

  const { productId } = req.query;

  if (req.method === "GET") {
    fetchProduct(db, productId, res);
  }
}
