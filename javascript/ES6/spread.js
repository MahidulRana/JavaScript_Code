function addNumbers(x,y,z){
    return x+y+z;
}
let numbers = [1,2,3]
let numbers1 = [...numbers,5,6]
//console.log(addNumbers(...numbers));

//console.log(numbers1); 

let p1 = {
    name : "anisul islam",
    age : 30
}

let p2 = {
    occupation : "student",
    home : "tangail"
}

let p = {...p1,...p2};
console.log(p);