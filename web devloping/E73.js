db.item2.insertOne({a:89})

//update operation
db.items.updateOne({name: "poco f1"}, {$set: {price:8000}})
db.items.updateMany({name: "poco f1"}, {$set: {price:7000, rating: 2.2}})