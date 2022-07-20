const {Schema, model} = require('mongoose')

const ticketSchema = new Schema({
    ticketNo: {
        type: String,
        required: true
    },
    passenger: {
        type: String,
        required: true
    },
    destination: {
        type: Array,
        required: true
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: "Flight"
    }


})

module.exports = model('Ticketing', ticketSchema)