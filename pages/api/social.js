import clientPromise from "@/lib/mongodb";

const getSocial = async (db, res) => {
  const Social = await db.collection("Social").find({}).toArray();
  res.status(200).json(Social);
};

export default async function Handler(req, res) {
  const client = await clientPromise;
  const db = await client.db("instore");

  if (req.method == "GET") {
    await getSocial(db, res);
  }
}
