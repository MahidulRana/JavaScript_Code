let number = [10,11,12,13,15,17];

const findNumber = (value,index,arr) =>{
    
    if (value%2===0)
    return value;

}

let findEvenNumber = number.find(findNumber);
let findEvenNumberIndex  = number.findIndex(findNumber);
console.log(findEvenNumber);
console.log(findEvenNumberIndex);

student = [
    {
        name : "rana",
        id :"172-15-1524",
        age : 18
    },
    {
        name : "sadik",
        id : "172-15-1506",
        age : 20
    },
    {
        name : "tusar",
        id : "172-15-1535",
        age : 23
    },
    {
        name : "siam",
        id : "172-15-1512",
        age : 19
    }
    
 ]

 console.log(student.find(x => x.age>20));
