const myPromise = new Promise((resolve, reject) => {
   const rnd = Math.floor(Math.random()*4)
   if(rnd>=0){
    resolve("hello")
   }
   else{
    reject(alert("reject"))
   }
})

Promise.then((date)=>{
    console.log(date);
})
.catch((err)=>{
    console.log(err);
})

