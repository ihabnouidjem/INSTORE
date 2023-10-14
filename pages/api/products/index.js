import clientPromise from "@/lib/mongodb";

const getAllProducts = async (db, res) => {
  const allProducts = await db.collection("Products").find({}).toArray();
  res.status(200).json(allProducts);
};

export default async function Handler(req, res) {
  const client = await clientPromise;
  const db = await client.db("instore");

  if (req.method == "GET") {
    await getAllProducts(db, res);
  }
}
