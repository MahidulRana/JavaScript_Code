const taskTOne = (rana)=> {
    console.log(rana);
}
 const two = () =>{
     console.log("i am task two");
 }
 const taskTwo = ()=> {
    setTimeout(two, 2000);
}
const taskThree = ()=> {
    console.log("task3");
}
const taskFour = ()=> {
    console.log("task4");
}

taskTOne("task1");
taskTwo();
taskThree();
taskFour();
