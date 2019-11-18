const sum = require('./sum')
//Testing using async and await
test("test using async/await", async ()=>{
    let res = await sum(1,2)
    expect(res).toBe(3)
})


//testing promises
/* test("testing promises 32", ()=> {
    console.log("here")
    return sum(1,2).then((res)=>{
        console.log("res is", res)
        expect(res).toBe(3)
    })
}) */

//testing a code with callback
/* test('callback test', (done)=>{
    callbackFn = (result) => {
        expect(result).toBe(4)
        done()
    }
    sum(1,2, callbackFn)
}) */


/* test('test add function', ()=> {
    expect(sum(1,2)).not.toBe(4)
});
test('two plus two is four', () => {
    expect(2 + 2).not.toBe(5);
});
 */
/* 
test('null', () => {
    const n = null;
    expect(n).toBeNull();
  }); */


//test objects and array equalness
/* test('test objects', () => {
    let data = {a:1, b:2}
    expect(data).toEqual({b:2, a:1});
})

test("check array", () => {
    let data = ['a', 'b']
    expect(data).toEqual(['a', 'b']);
})
 */
