import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

const fetchUser = async (db, usr, uid, res) => {
  const user = await db.collection("Users").findOne({ uid: uid });
  if (!user) {
    const newUser = await db.collection("Users").insertOne({
      uid: usr?.id,
      uname: usr?.name,
      uimage: usr?.image,
      uemail: usr?.email,
      cart: [],
      orders: [],
      saved: [],
      liked: [],
      newProducts: 0,
      newSaved: 0,
      newOrders: 0,
    });
    const createdUser = await db.collection("Users").findOne({ uid: uid });
    await res.status(200).json(createdUser);
  } else {
    await res.status(200).json(user);
  }
};

export default async function Handler(req, res) {
  const client = await clientPromise;

  const db = client.db("instore");
  const user = req.body;
  const { userId } = req.query;

  const data = await Promise.all([db, user, userId]);

  if (req.method === "POST") {
    fetchUser(data[0], data[1], data[2], res);
  }
}
