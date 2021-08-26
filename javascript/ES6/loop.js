const names = ["rana","sadik","tusar"];

for (let name of names){
    console.log(name);
}

let student = {
    ID: "172-15-1524",
    Name: "Rana",
    Age : 23
}

for (let x in student){
    console.log(`${x} : ${student[x]}`);
}