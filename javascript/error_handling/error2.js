document.querySelector("#button").addEventListener("click", function(){

    var num =document.querySelector("#input").value;
    
    try{

        if (num <5){
            throw "input is too low"
        }else if(num >10){
            throw "number is too high"

        }
        else{
            console.log(num);
        }
    }catch(err){
        console.log(err);

    }
}) 