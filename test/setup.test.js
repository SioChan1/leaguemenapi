process.env.NODE_ENV = 'test';

const Champion = require('../models/champion');
const User = require('../models/user');


//clean up the database before and after each test


beforeEach((done) => { 
    Champion.deleteMany().then((err) => {});
    User.deleteMany().then((err) => {});
    done();
});

afterEach((done) => {
    User.deleteMany().then((err) => {});
    Champion.deleteMany().then((err) => {});
    done();
});