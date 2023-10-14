import clientPromise from "@/lib/mongodb";

const getBrands = async (db, res) => {
  const Brands = await db.collection("Brands").find({}).toArray();
  res.status(200).json(Brands);
};

export default async function Handler(req, res) {
  const client = await clientPromise;
  const db = await client.db("instore");

  if (req.method == "GET") {
    await getBrands(db, res);
  }
}
