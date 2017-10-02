const loki = require('lokijs');
var db = new loki('auto_generated_recipes.json')

module.exports = db;