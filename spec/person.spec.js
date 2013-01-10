require('../spec/tistub');
var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;


describe('person', function() {
    it('should have a name', function() {
        var person = Alloy.createModel('Person', {name: 'peter'});
        expect(person.get('name')).toBe('peter');
    });

    it('should give the names length', function() {
        var name = 'peter';
        var person = Alloy.createModel('Person', {name: name});
        expect(person.getNameLength()).toBe(name.length);
    });
});

describe("person collection", function() {
    it("should work", function() {
        var people = Alloy.createCollection('Person');
        expect(people).not.toBeNull();
    });

    it("should accept people", function() {
        var name = 'peter';
        var people = Alloy.createCollection('Person');
        people.create({name: name});
        expect(people.length).toBe(1);
    });
});
