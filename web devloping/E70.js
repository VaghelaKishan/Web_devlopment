// create databasw
use kishankart
db.kishankart.insert({})
show dbs;
show colletions;

// Inserting data in mongo db
use kishankart
db.items.insertOne({ name: "poco f1", price: 15000, rating: 4.5, qty: 233, sold: 98 })
db.items.insertMany([{ name: "poco f1", price: 15000, rating: 4.5, qty: 233, sold: 98 }, { name: " mi 11 x", price: 26000, rating: 5.5, qty: 253, sold: 668 }, { name: "oneplus 5", price: 22000, rating: 3.5, qty: 2553, sold: 85 ,isBig:true}])
