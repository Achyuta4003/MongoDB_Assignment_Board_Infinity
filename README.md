# Mongo DB Js assignment Board infinity

### Problem:-

Tigris aviations is a aviation company who have flights travlling to multiple countries.
Now you need to create data base such that:-

1. we need one db in which we will have details regarding the flights details like

   {
   * flightNo:'unique number',
   * travel btw cities:[basicially cites between which that flight travel]
   * flight timmings:[different timming of the flight]
   * planeCategory:[cargo/passenger]
  
   }
2. Now we need another db in which we will book tickets and the destination and plane will be based on the 1st db

### Approach:-

  1. Create a connection with local or remote Mongo database
  2. Build a model in express.js for Flights details and one for ticket booking
The model should have parameters as described above
  3. Next build routes to post data to the data base
### Evaluation criteria:-

* First data will be posted to db using postman
* after the we will make get call to get the data and
* Lastly the Atlas Data will be checked if the data is stored in the required format or not.


### `node server`

Runs the server in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

