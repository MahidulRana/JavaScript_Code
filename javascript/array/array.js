var names = new Array(5);
names[0] = "anis";
names[1]= "rana";
names[2]="mahidul";
names[3]= "sadik";
names[4]="tusar";
//names.push("siam");
//console.log(names);
//names.pop();
console.log(names);

// shift opposite of pop

//names.shift();
//console.log(names);

// unshift opposite of push

//names.unshift("A");
//console.log(names);

//  adding elements using splice

//names.splice(2,2,"B","C");
//console.log(names);

// remove start to end size
//names.splice(1,2);
//console.log(names);

// slice array doesnt remove main array

var newArray = names.slice(2);
console.log(newArray);
console.log(names);

//

var sortedNames = names.sort();
names.reverse();
console.log(sortedNames);

//

var numbers = [20,1,5,4];

numbers.sort(function(a,b){
    return a-b;
})
console.log(numbers);
 







var country1 = ["ban", "ind", "pak"];
var country2 = ["aus", "russ"];

var country = country1.concat(country2);
console.log(country);