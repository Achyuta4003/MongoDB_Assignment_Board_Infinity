const express = require('express');
const app = express();
const PORT =  8080;
const bodyParser = require('body-parser')
const connectDb = require('./config')
const flightRoutes = require('./routes/flightRoute')

//database connection
connectDb();

//body parser
app.use(bodyParser.json())

//route setup
app.use('/api',flightRoutes)

//handle bad request
app.use((req, res) => {
    res.status(404).json({
        error: "page not found"
    })
})

//server create and listning
app.listen(PORT, () => console.log(`server listining on Port ${PORT}`));