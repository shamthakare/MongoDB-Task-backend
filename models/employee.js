const mongoose= require ('mongoose');

const employee = mongoose.Model('Employee', {
    name:{type:String},
    position:{type:String},
    dept:{type:String}
});
module.exports = employee;