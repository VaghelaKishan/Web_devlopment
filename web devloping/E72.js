 show dbs;

 use kishankart;

 show collections

 db.items.find()
 db.items.find({price: 15000})

 // Deleting items for mongo db

 db.items.deleteOne({price:15000})
 // deleteOne will delete first entry in case of multi document match
 db.items.deleteMany({price:25000})

