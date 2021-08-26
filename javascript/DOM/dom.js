

var heading3 = document.createElement("h1");
var text = document.createTextNode("This is heading 1");

heading3.appendChild(text);

var h3 =document.getElementById("my-div");
h3.appendChild(heading3);

var heading2 = document.getElementsByTagName("h1")[1];

h3.removeChild(heading2);

var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is heading 0");

heading0.appendChild(text0);
var heading1 = document.getElementsByTagName("h1")[0];
var h3 =document.getElementById("my-div");
h3.insertBefore(heading0,heading1);

