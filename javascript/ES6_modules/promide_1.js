const promise1 = new Promise((resolve,reject) =>{
    let completedpromise = true;
    if(completedpromise){
        resolve("completed promise 1");
    }else{
        reject(new Error , "not completes promise 1");
    }
        
    
})   

const promise2 = new Promise((resolve,reject) =>{
    resolve("completed promise 2");
})

// promise1.then((res)=>{
    //console.log(res);
//}).catch((err)=>{
    //console.log(err);
//})

Promise.all([promise1,promise2])
.then(([res1,rest2])=> console.log(res1));

console.log("end");


// promise res

const promise3 = new Promise((resolve,reject) =>{
    
    setTimeout(()=>{
        resolve("completed promise 3");
    },2000)
}) 
const promise4 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("completed promise 4");
    },1000)
})

Promise.race([promise3,promise4])
.then((res)=> console.log(res));