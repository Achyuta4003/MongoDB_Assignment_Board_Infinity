const Flight = require('../model/Flight')
const Ticketing = require('../model/Ticketing')

//get Flight data 
exports.getFlight = async (req, res) => {
    try {
        const data = await Flight.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

//save data in Flight
exports.saveFlight = async (req, res) => {
    const flight = new Flight({
        flightNo: req.body.flightNo,
        travelCities: req.body.travelCities,
        flightTimmings: req.body.flightTimmings,
        planeCategory: req.body.planeCategory
    })

    try {
        const data = await flight.save()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}


//save data in Ticketing
exports.saveTicket = async (req, res) => {
    const ticket = new Ticketing({
        ticketNo: req.body.ticketNo,
        passenger: req.body.passenger,
        destination: req.body.destination,
        flight: req.params.id
    })

    try {
        const data = await ticket.save()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}



//get all Ticketing data 
exports.getTickets = async (req, res) => {
    try {
        const data = await Ticketing.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

//get Ticketing data by id 
exports.getTicketById = async (req, res) => {
    try {
        const data = await Ticketing.findById(req.params.id)
        .populate('flight')
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}