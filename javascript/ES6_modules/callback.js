const taskTOne = (callback)=> {
    console.log("task1");
    callback();
}
 
 const taskTwo = (callback)=> {
    setTimeout( () =>{
        console.log("i am task two");
       callback();
    }, 2000);
}
const taskThree = (callback)=> {
    console.log("task3");
    callback();
}
const taskFour = (callback)=> {
    console.log("task4");
    callback();
}


taskTOne(() =>{
    taskTwo(() =>{
        taskThree(() => {
            taskFour();
        });
    })
})
document.querySelector("button").addEventListener('click', ()=>{
    console.log(`button is clicked`);
})
