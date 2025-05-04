const {MongoClient} = require('mongodb');
 
async function main(){
    const uri = "mongodb://localhost:27017"
    const client = new MongoClient(uri);

    try{
      await client.connect();
      console.log("Connected to MongoDB!");
  
      const db = client.db("testDB");
      const collection = db.collection("drivers");


    const drivers = [
      {name: "john Doe", vehicleType:"sedan",isAvailable: true , rating: 4.8},
      {name: "Alice Smith", vehicleType:"SUV",isAvailable: false , rating: 4.5},
      {name: "Haris j",vehicleType:"honda",isAvailable: true , rating: 4.7}
    ];

    //show the data in the console
    console.log(drivers);

    //TODO: show the data in the console 
    console.log("Driver Name:");
    drivers.forEach(driver => console.log(driver.name));

    //TODO: add additional driver to the drivers array 
    drivers.push({
      name: "Bob Johnson",vehicleType: "truck", isAvailable: true,rating: 4.9
    });
    
    console.log("Driver Names:");
    drivers.forEach(driver => console.log(driver.name));
    
    console.log("Added new driver:", drivers[drivers.length - 1]);
    
    //insert driver 
    await collection.insertMany(drivers);
    console.log("Drivers inserted successfully!")

    // insert document 
    await collection.insertOne({name: "tasha",age:22});
    console.log("Document insert!");

    //Query the document 
    const result = await collection.findOne({ name:"natasha"});
    console.log("Query result:", result);

    
}catch(err){
  console.error("Error:", err);
} finally {
  await client.close();
}
}

main(); 