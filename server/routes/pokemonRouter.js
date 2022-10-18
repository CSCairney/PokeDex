const router = require("express").Router();
const pokemonController = require("../controllers/pokemonController.js");

// Read request for all pokemon in the PokeDex,
router.get("/getAll", pokemonController.getAllPokemon);

// Read request for pokemon by ID,
router.get("/getById/:id", pokemonController.getById);

// Read request for pokemon by Name,
router.get("/getById/:name", pokemonController.getByName);

// Read request for pokemon by Type,
router.get("/getByType/:type", pokemonController.getByType);

// Create request for pokemon,
router.post("/create", pokemonController.createPokemon);

// Update request for pokemon,
router.put("/update/:id", pokemonController.updatePokemon);

// Update request for pokemon using last ID,
router.put("/updateLast", pokemonController.updateLastPokemon);

// Delete request for pokemon,
router.delete("/delete/:id", pokemonController.deletePokemon);

module.exports = router; 