'use strict';

const scheama = require('./products-schema.js');
const Model = require('./model.js');

class Products extends Model{}

module.exports = new Products(scheama);