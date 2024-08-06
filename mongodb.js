const { MongoClient, ObjectId } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://mshivang091:YtQtQmTJcIzu0zp7@cluster0.dsjpij1.mongodb.net/17/";

const client = new MongoClient(uri);

const datab = "task-manager";

async function run() {
  try {
    await client.connect();
    console.log("Connected to database");

    const db = client.db(datab);
    const collection = db.collection("users");

    // insterOne method
    // const insert = await collection
    //   .insertOne({
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    //update method

    // const update = await collection
    //   .updateOne(
    //     {
    //       _id: new ObjectId("66a23980d009d478bd7eecc4"),
    //     },
    //     {
    //       $inc: {
    //         age: -1,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // // if (update.matchedCount) {
    //   console.log("updated");
    // } else {
    //   console.log("not updated");
    // }

    // delete method single item

    // const del = await collection
    //   .deleteOne({
    //     _id: new ObjectId("66a23980d009d478bd7eecc4"),
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // deleteMany method multiple items
    // const del = await collection
    //   .deleteMany({
    //     age: 26,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await client.close();
  }
}

run();
