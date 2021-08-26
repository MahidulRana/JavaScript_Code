
for (var i=0; i<3; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){

        var text = this.innerHTML;
        console.log(text);

        audio(text);
        playAnimation(text);

    })

}


document.addEventListener("keypress",function(event){

    var text1 =event.key;
    audio(text1);
    playAnimation(text1);

})




// Audio

function audio(text){
    switch(text){
        case "a":
            var audio = new Audio("sounds/a.m4a");
            audio.play();
            break;
    }
    switch(text){
        case "b":
            var audio = new Audio("sounds/b.m4a");
            audio.play();
            break;
    }
    switch(text){
        case "c":
            var audio = new Audio("sounds/c.m4a");
            audio.play();
            break;
    }

}


// Animation

function playAnimation(text){

    document.querySelector("." + text).classList.add("anim");

    setTimeout(function(){

        document.querySelector("." +text).classList.remove("anim");
    },5000);
    
}

// var count =0;
//document.querySelector("textarea").addEventListener("keypress", function(event){
  //  count++;

  //  var text2 = event.key;

  //  document.querySelector("p").innerHTML ="you have passes " + count ;
    
//})