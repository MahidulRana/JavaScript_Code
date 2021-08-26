let studentInfo = {
    fullname : "rana",
    id : 1,
    age : 23,

    language :{
        native : "bangla",

        hindi : "hindi",


    }
}
const {fullname,id,age,language} = studentInfo;

console.log(fullname,language.hindi);


const rana = ({id,village}) =>{
    console.log(village);

}
const mahidul = {
    id : 23,
    village : "patharghata"
}
rana(mahidul);