process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

describe('/First Test Collection', function(){

    it('should test two values', function() {
        //test content should go here 
        let expectedVal = 10;
        let actualVal = 10;

        expect(actualVal).to.be.equal(expectedVal);
    })
})