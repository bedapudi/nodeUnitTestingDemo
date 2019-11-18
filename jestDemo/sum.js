/* function sum(a, b) {
    return a + b;
  } */

/* function sum(a, b, callback){
  callback(a+b)
} */

function sum(a, b){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(a+b)
    }, 4000)
  })
}
module.exports = sum;
