import clientPromise from "@/lib/mongodb";

const getFAQ = async (db, res) => {
  const FAQ = await db.collection("FAQ").find({}).toArray();
  res.status(200).json(FAQ);
};

export default async function Handler(req, res) {
  const client = await clientPromise;
  const db = await client.db("instore");

  if (req.method == "GET") {
    await getFAQ(db, res);
  }
}
