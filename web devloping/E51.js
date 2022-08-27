console.log("this is E51");

function greet(name, greetText="Greetings from javascript"){
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a,b,c){
    let d = a+b+c;
    return d;
    //this line will never execute(unreachabal)
    //console.log("function is returned");
}

let name = "kishan";
let name1 = "raj";
let name2 = "kirtan";
let name3 = "bhavin";
let greetText ="good morning";
//console.log(name + " is a good boy");
//console.log(name1 + " is a good boy");
//console.log(name2 + " is a good boy");
//console.log(name3 + " is a good boy");
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);
let returnval= sum(1,2,3);
console.log(returnval)