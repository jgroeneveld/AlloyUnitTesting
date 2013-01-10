var store = {};
var idCounter = 1;


module.exports.sync = function(model, method, options) {
    var resp; // sync results

    var table = model.config.adapter.collection_name;

    switch (method) {
        case "read":
            if (model.id) {
                // Find and return a specific model as a JSON object
                // resp = {"foo":"1","id":"1",...};
                if (!store[table]) {
                    resp = null;
                } else {
                    resp = store[table][model.id+""];
                }
            } else {
                // Ti.API.info('getting collection ' + JSON.stringify(model));
                // Return the entire collection as an array of JSON objects
                // resp = [{"foo":"1","id":"1",...}...];
                resp = _.toArray(store[table]);
                if (!resp) {
                    resp = [];
                }
                model.length = resp.length;
            }
            break;
        case "create":
            Ti.API.info('create');
            // Add the model to persistent storage and return the model upon success
            // Assign a unique value (integer or UUID) to model.id and model.attribute.id if needed
            // resp = model;

            if (!model.id) {
                model.id = idCounter+"";
                model.set(model.idAttribute, model.id);
                idCounter++;
            }

            if (!store[table]) {
                store[table] = {};
            }

            store[table][model.id+""] = model.toJSON();

            resp = model;
            break;
        case "update":
            // Update the model in persistent storage and return the updated model upon success
            store[table][model.id+""] = model.toJSON();
            resp = model;
            break;
        case "delete":
            // Remove a model from persistent storage and return the removed model upon success
            delete store[table][model.id+""];
            resp = model;
            break;
    }

    if (resp) {
        // Return sync results
        options.success(resp);
    } else {
        options.error("Record not found");
    }
    method === "read" && model.trigger("fetch");
};


module.exports.beforeModelCreate = function(config) {
    config = config || {};
    // Perform some pre-checks (as an example)
    return config;
};


module.exports.afterModelCreate = function(Model) {
    Model = Model || {};
    // Set up the persistent storage device, apply migrations or preload data (as examples)
};

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;