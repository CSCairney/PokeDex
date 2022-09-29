const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//Routers imports
const pokemonRouter = require('./routes/pokemonRouter.js');

//Default paths for routers
app.use('/pokemon', pokemonRouter);

// Connection to the database
mongoose.connect('mongodb://127.0.0.1:27017/pokemon', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to The PokeDex"))
    .catch(console.error);

// Listening to the port
const PORT = process.env.PORT || 3002; 
const server = app.listen(PORT, () =>
    console.log(`The server has been activated on ${PORT}`));

module.exports = app;
    