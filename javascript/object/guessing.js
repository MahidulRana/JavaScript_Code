
won =0;
lost=0;
for ( var i=0; i<=5 ; i++){
    
    var guessing = parseInt(prompt("enter a number :"));

    var random = Math.floor(Math.random() * 5) +1 ;

    if (guessing == random){
        console.log("you have won");
        won++;
    }
    else{
        console.log("you have lost random number is " + random);
         lost++;
    }
}

console.log("total won " + won);
console.log("total lost " + lost);



