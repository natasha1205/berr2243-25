const {MongoClient} = require('mongodb');
 
async function main(){
//replace <connection-string> with your MongoDB URI
    const uri = "mongodb://localhost:27017"
    const client = new MongoClient(uri);

try{
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("testDB");
    const collection = db.collection("users");

 // insert document 
await collection.insertOne({name: "tasha",age:22});
console.log("Document insert!");

// query the document 
const result = await collection.findOne({name:"Alice"});
console.log("Query result:", result);
} catch (err) {
 console.log("Error:",err);
} finally {
  await client.close();
}
}

main();