exports.definition = {

	config: {
		"columns": {
			"name":"string",
			"age":"int"
		},
		"adapter": {
			"type": "MyRuntimeSync",
			"collection_name": "Person"
		}
	},

	extendModel: function(Model) {
		_.extend(Model.prototype, {

			getNameLength: function() {
				return this.get('name').length;
			}

		});

		return Model;
	},


	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {

			// extended functions go here

		}); // end extend

		return Collection;
	}

}

