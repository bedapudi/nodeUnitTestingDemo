var assert = require('assert');
var sinon = require('sinon');
var actions = require('../app/actions')
var lib = require('../app/lib')
var utils = require('../app/utils')
var chai      = require('chai');
//var sinonChai = require('sinonChai');
var expect    = chai.expect;

//chai.use('sinonChai');

/* var now = new Date(2017, 3, 12);

beforeEach(() => {
    sandbox = sinon.sandbox.create();
    clock = sinon.useFakeTimers(now.getTime());
});

afterEach(() => {
    sandbox.restore();
    clock.restore();
}); */

describe('array', function(){
    describe('index of', function(){
        it('should return -1 when given value is not present in array', function(){
            assert.equal([1,2,3].indexOf(4), -1)
        })
    })
})

//describe("actions", ()=>{
    /* it('actions->add', ()=>{
        assert.equal(actions.add(2,2), 4)
    })

    it('actions->add(0,0)', ()=>{
        assert.equal(actions.add(0,0), 0)
    })
    it("actions -> multiply", ()=> {
        assert.equal(actions.multiply(1,5), 5)
    })
    it('actions this month', () => {
        assert.equal(actions.getMonth(), 9)
    }) */
    /* it('welcomeMessage shd say hello', ()=> {
        sinon.stub(lib, 'sayHi').callsFake(function() {
            return "hello"
        });
        assert.equal(actions.welcomeMessage(), 'hello')
        lib.sayHi.restore(); // restore original functionality
        
    }) */


  //var method;

  /* beforeEach(function (done) {
    method = sinon.spy(utils.prototype, 'getData');
    done();
  });
  afterEach(function (done) {
    method.restore();
    done();
  });

    it('object method mocking', ()=> {
        //sinon.stub(utils.prototype, 'getData').callsFake(() => {return 'abc'});
        //assert.equal(actions.toBeTestedForObjectMocking(), 'data is abc')
        actions.toBeTestedForObjectMocking()
        console.log("here",method.called)
        //expect(method).to.have.been.called;
        
    }) */
//})