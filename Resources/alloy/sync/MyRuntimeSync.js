var store = {}, idCounter = 1;

module.exports.sync = function(model, method, options) {
    var resp, table = model.config.adapter.collection_name;
    switch (method) {
      case "read":
        if (model.id) store[table] ? resp = store[table][model.id + ""] : resp = null; else {
            resp = _.toArray(store[table]);
            resp || (resp = []);
            model.length = resp.length;
        }
        break;
      case "create":
        Ti.API.info("create");
        if (!model.id) {
            model.id = idCounter + "";
            model.set(model.idAttribute, model.id);
            idCounter++;
        }
        store[table] || (store[table] = {});
        store[table][model.id + ""] = model.toJSON();
        resp = model;
        break;
      case "update":
        store[table][model.id + ""] = model.toJSON();
        resp = model;
        break;
      case "delete":
        delete store[table][model.id + ""];
        resp = model;
    }
    resp ? options.success(resp) : options.error("Record not found");
    method === "read" && model.trigger("fetch");
};

module.exports.beforeModelCreate = function(config) {
    config = config || {};
    return config;
};

module.exports.afterModelCreate = function(Model) {
    Model = Model || {};
};

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;