/*
cd AlloyUnitTesting
export NODE_PATH=$(pwd)/Resources

alloy compile; jasmine-node spec
*/


require('../spec/tistub');
var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;


describe('jasmine', function() {
    it('should be working', function() {
        var sum = 1+2;
        expect(sum).toEqual(3);
    });
});

describe('alloy', function() {
    it('should create a model', function() {
        var person = Alloy.createModel('Person');
        expect(person).not.toBe(null);
    });

    it('should create a model with a name', function() {
        var person = Alloy.createModel('Person', {name: 'peter'});
        expect(person.get('name')).toBe('peter');
    });
});