import clientPromise from "@/lib/mongodb";

const getProducts = async (db, productName, res) => {
  const products = await db
    .collection("Products")
    .find({ $or: [{ brand: productName }, { name: productName }] })
    .toArray();
  res.status(200).json(products);
};

export default async function Handler(req, res) {
  const client = await clientPromise;
  const db = await client.db("instore");

  const { productName } = await req.query;

  if (req.method == "GET") {
    await getProducts(db, productName, res);
  }
}
