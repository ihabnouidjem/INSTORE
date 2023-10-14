import clientPromise from "@/lib/mongodb";

const postOrder = async (db, order, res) => {
  try {
    const newOrder = await db.collection("Orders").insertOne(order);

    const createdOrder = await db
      .collection("Orders")
      .findOne({ _id: newOrder.insertedId });
    res.status(200).json(createdOrder);
  } catch (e) {
    res.send({ error: "unable to post order" });
  }
};

export default async function Handler(req, res) {
  const client = await clientPromise;
  const db = await client.db("instore");

  const order = await req.body;

  if ((res.method = "POST")) {
    postOrder(db, order, res);
  }
}
