let rana = [10,20,30,40];

rana.forEach(function(x){
    //console.log(x);
})

var numbers = [20,30,40,50];

numbers.forEach(function(x,index,arr){
    arr[index] = x+5;
    
})
console.log(numbers);