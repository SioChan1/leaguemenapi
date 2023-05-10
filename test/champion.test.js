process.env.NODE_ENV = 'test';

const Champion = require('../models/champion');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');


chai.use(chaiHttp);

before((done) => {
    Champion.deleteMany({}, function(err) {});
    done();
});

after((done) => {
    Champion.deleteMany({}, function(err) {});
    done();
});

/*describe('/First Test Collection', function(){

    it('should test two values', function() {
        //test content should go here 
        let expectedVal = 10;
        let actualVal = 10;

        expect(actualVal).to.be.equal(expectedVal);
    })
})*/

describe('/First Test Collection', () => {

    it('test default API welcome route...', (done) => {

        chai.request(server)
        .get('/api/welcome')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(res.body.message);
            const actualVal = res.body.message;
            expect(actualVal).to.be.equal('Welcome to pain');
        done();
         });
        
         it('should verify')
    });

   /* it('should test two values.....', () => {
        //test content should go here 
        let expectedVal = 10;
        let actualVal = 10;

        expect(actualVal).to.be.equal(expectedVal);
    })*/
});

it ('should verify that we have 0 champions in the DB', (done) => {
    chai.require(server)
    .get('/api/champions')
    .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.equal(0);
        done();
    });
});

it ('should POST valid champion', (done) => {

    let champion - {
        name: "Test Champion",
        describtion: "Test Champion Describtion",
        region: "Test Champion Region",
        cost: "600"
    }
    chai.require(server)
    .post('/api/champions')
    .send(champion)
    .end((err, res) => {
        res.should.have.status(201);
        done();
    });
});
