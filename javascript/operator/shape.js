var base = parseFloat(prompt("enter base = :"));
height = parseFloat(prompt("enter height = :"));

var area = base*height;
document.write("area = " + area + "</br>");

var triangle = (base*height)/2;
document.write("triangle = :" + triangle +"</br>");

var faren = parseFloat(prompt("enter farenheight = :"));
cels = (faren-32) * (5/9);
document.write("celcius = "+ cels +"</br>")

var cels = parseFloat(prompt("enter celcius = :"));
faren= (cels*(9/5)) +32;
document.write("farenheight = "+ faren)
