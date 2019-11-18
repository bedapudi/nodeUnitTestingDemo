const urlFilter = require('./urlFilter')

describe('Filtering array using jest', ()=> {
    test("should find link in the array list", ()=>{
        let input = [{id:1, url:"www.demo1.com"}, {id:2, url:"www.demo2.com"}, {id:3, url:"www.link.com"}]
        let output = [{id:3, url:"www.link.com"}]
        expect(urlFilter(input, 'LINK')).toEqual(output);
        //expect(urlFilter([], 'test')).toEqual(output)
        
    })

    test("should fail for empty url", ()=> {
        let input = [{id:1, url:"www.demo1.com"}, {id:2, url:"www.demo2.com"}, {id:3, url:"www.link.com"}]
        let output = [{id:3, url:"www.link.com"}]
        expect(urlFilter(input, '')).toEqual(output)
    })

    test("should fail for empty list", ()=> {
        let input = [{id:1, url:"www.demo1.com"}, {id:2, url:"www.demo2.com"}, {id:3, url:"www.link.com"}]
        let output = [{id:3, url:"www.link.com"}]
        expect(urlFilter([], 'demo')).toEqual(output)
    })
})