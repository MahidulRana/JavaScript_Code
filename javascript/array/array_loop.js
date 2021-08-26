
var num = new Array(5);

for (var i=0; i<=4; i++){
    num[i]= parseInt(prompt("enter number :"));
}
sum= 0;
for (var i=0; i<=4 ; i++){
    console.log(num[i]);
    sum = sum + num[i];
}
console.log(sum);

