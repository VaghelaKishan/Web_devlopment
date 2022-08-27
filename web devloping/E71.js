// serching for  data in mongo db
use kishankar


//> show dbs;

//> use kishankart;

//> show collections

//> db.items.find()

// this query will return all the objects with rating equal to
db.items.find({rating: 3.5})
db.items.find({rating: {$gt: 3.5}})
db.items.find({rating: {$gte: 3.5}})  // greter then equal to >=


// and operator
db.items.find({rating: {$gt:3.5}, price:{$gt:4000}})
db.items.find({rating: {$lt:4.5}, price:{$gt:15000}})

// or operator
db.items.find({ $or: [{rating: {$lt:4.5}}, {price:{$gt:15000}}]})

// only  rating show
db.items.find({rating: {$gt: 3.5}}, {rating:4.5})
db.items.find({rating: {$gt: 3.5}}, {rating:4.5, qty:1})


