let rana = [1,2,3,4,5,6];

let squareNumber = rana.map(function (x) {
    return x*x;
    
})

console.log(squareNumber);


let filter = rana.filter(function(x) {
        return x<4;
    
})
console.log(filter);