console.log("thid is module");
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum+=element
        
    });
    return sum/arr.length;
}

module.exports = {
    avg: average,
    name: "kishan",
    repo : "github"
}

module.exports.name="kd";