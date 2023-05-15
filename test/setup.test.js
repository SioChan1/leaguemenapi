process.env.NODE_ENV = 'test';

const Champion = require('../models/champion');
const User = require('../models/user');


//clean up the database before and after each test


beforeEach((done) => { 
    Champion.deleteMany({}, function(err) {});
    User.deleteMany({}, function(err) {});
    done();
});

afterEach((done) => {
    User.deleteMany({}, function(err) {});
    Champion.deleteMany({}, function(err) {});
    done();
});