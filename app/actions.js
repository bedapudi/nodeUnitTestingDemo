var lib = require('./lib')
var utils = require('./utils')

const actions = {
   /*  add: (a, b) => {return a+b},
    multiply: (a, b) => {return a*b},
    getMonth: () => {
        let month = new Date().getMonth() 
        console.log(" in get month. month is :", month)
        return month
    }, 
    noReturnValueFunc: () => {console.log("i am a noReturnValueFunc")},
    */

    //This is the function we are writing the test case.
    welcomeMessage: ()=>{
        console.log("i am actions method", lib.sayHi())
        return lib.sayHi()
    },

    toBeTestedForObjectMocking : () => {
        let utilObj = new utils()
        let result = "data is "+ utilObj.getData()
        console.log("toBeTestedForObjectMocking result is ", result)
        return result;
    }
    
}
module.exports = actions