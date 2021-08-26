
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

/*function countNumbers(){
     return student.filter(function(x){
        return x.age > 20;
    }).map(function(y){
        return y.name;
    })
}*/

const countNumbers = () => {
   return student.filter((x) => x.age >20).map((y) => y.name);
}
console.log(countNumbers())
