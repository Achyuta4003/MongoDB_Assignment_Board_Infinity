const {Schema, model} = require('mongoose')

const flightSchema = new Schema({
    flightNo : {
        type:Number,
        required : true
    },
    travelCities :{
        type:Array,
        required : true
    },
    flightTimmings: {
        type:Array,
        required : true
    },
    planeCategory:{
        type:String,
        required : true
    }


}) 

module.exports = model('Flight',flightSchema)