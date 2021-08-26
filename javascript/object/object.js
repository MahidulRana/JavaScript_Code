var student1 = {
    name: "Rana",
    age : 23,
    chpa: 3.52,
    lan: ["bang","eng","hindi"]
}
console.log(student1.name);

function student(name,age,cgpa,lan){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lan = lan;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lan);
    }
}

var student2 = new student("rana",23,3.52,["ban","eng"]);
var student3 = new student("sadik",22,3.3,["hindi","eng"]);
var student4 = new student("tusar",21,3.72,["turkey","eng"]);

student2.display();
