import clientPromise from "@/lib/mongodb";

const getAds = async (db, res) => {
  const Ads = await db.collection("Ads").find({}).toArray();
  res.status(200).json(Ads);
};

export default async function Handler(req, res) {
  const client = await clientPromise;
  const db = await client.db("instore");

  if (req.method == "GET") {
    await getAds(db, res);
  }
}
