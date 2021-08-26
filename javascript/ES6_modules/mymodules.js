/*export let text = "i am rana";

export function rana(txt){
    text = txt;
}*/

class rana {
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    /*set studentName(name){
        this.name = name;
    }*/
    get studenInfo(){
        return this.id + " " + this.name;
    }
}

let s1 = new rana(101,"rana");
//console.log(s1.name);
//s1.studentName = ("alalala");
//console.log(s1.name);
console.log(s1.studenInfo);