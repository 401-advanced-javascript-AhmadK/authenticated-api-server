'use strict';

const mongoose = require('mongoose');

require('./products-schema.js');

const categoriesSchema = mongoose.Schema({
  name: {type:String, required: true},
  description: {type:String},
},{toObject:{virtuals: true}, toJSON: {virtuals: true}});

categoriesSchema.virtual('actualProducts',{
  ref: 'products',
  localField: 'name',
  foreignField: 'categoryName',
  justOne: false,
});

categoriesSchema.pre('findOne', function (){
  try{
    this.populate('actualProducts');
  }catch(e){
    console.error(e);
  }
});

module.exports = mongoose.model('categories',categoriesSchema);