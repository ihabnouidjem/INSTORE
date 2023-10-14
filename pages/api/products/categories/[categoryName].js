import clientPromise from "@/lib/mongodb";

const getProductsByCategory = async (db, category, res) => {
  const products = await db
    .collection("Products")
    .find({ category: category })
    .toArray();
  res.status(200).json(products);
};

export default async function Handler(req, res) {
  const client = await clientPromise;
  const db = await client.db("instore");

  const { categoryName } = await req.query;

  if (req.method == "GET") {
    await getProductsByCategory(db, categoryName, res);
  }
}
