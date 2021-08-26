var photos = ["img/create.jpeg", "img/desk.jpeg", "img/explore.jpeg"];

var image = document.querySelector("img");
var count =0;

function next(){
    count++;

    if(count >= photos.length){
        count = 0;
        image.src = photos[count];
    }else{
        image.src = photos[count];
    }
   
}

function prev(){
    count--;

    if (count < 0)
    {
        count = 2;
        image.src= photos[count];
    }
    else{

        image.src= photos[count];
    }
    
}