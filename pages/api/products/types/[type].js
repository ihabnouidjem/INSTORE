import clientPromise from "@/lib/mongodb";

const getProductsByType = async (db, type, res) => {
  let fetchType;
  if (type === "men") {
    fetchType = { type: { gender: "male", age: "adult" } };
  } else if (type === "women") {
    fetchType = { type: { gender: "female", age: "adult" } };
  }
  if (type === "kids") {
    fetchType = {
      $or: [
        { type: { gender: "male", age: "kid" } },
        { type: { gender: "female", age: "kid" } },
      ],
    };
  }
  const products = await db.collection("Products").find(fetchType).toArray();
  res.status(200).json(products);
};

export default async function Handler(req, res) {
  const client = await clientPromise;
  const db = await client.db("instore");

  const { type } = await req.query;

  if (req.method == "GET") {
    await getProductsByType(db, type, res);
  }
}
