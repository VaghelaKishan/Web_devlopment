// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kishankart', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log("we are connected bro..")
// });

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function speak() {
  const greeting = "My name is " + this.name
  console.log(greeting);
};

const Kitten = mongoose.model('kishankitty', kittySchema);

const kishankitty = new Kitten({ name: 'kishankitty ' });
//console.log(kishankitty.name);
//kishankitty.speak();

kishankitty.save(function (err,kishankitty){
  if(err) return console.error(err);
  kishankitty.speak();
});

Kitten.find({ name: kishankitty },function (err,kittens){
  if(err) return console.error(err);
  console.log(kittens);
})
