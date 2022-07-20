const router = require('express').Router();

const {getFlight, saveFlight, saveTicket, getTicketById, getTickets} = require('../controller/control')

router.get('/flight', getFlight) //get flights data
router.post('/saveflight', saveFlight) //save flight data
router.post('/bookticket/:id',saveTicket) //book ticket
router.get('/ticket/:id', getTicketById) //get ticket by id
router.get('/tickets', getTickets) //get all ticketing data 


module.exports = router;