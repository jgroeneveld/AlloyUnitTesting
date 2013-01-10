exports.definition = {
    config: {
        columns: {
            name: "string",
            age: "int"
        },
        adapter: {
            type: "MyRuntimeSync",
            collection_name: "Person"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            getNameLength: function() {
                return this.get("name").length;
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Person", exports.definition, []);

collection = Alloy.C("Person", exports.definition, model);

exports.Model = model;

exports.Collection = collection;