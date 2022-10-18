const mongoose = require("mongoose");
const { Pokemon } = require("../models/pokemon.js");

module.exports = {

    //Get all pokemon from the database
    getAllPokemon: async (req, res) => {
        try {
            const getPokemon = await Pokemon.find();
            res.status(200).json(getPokemon);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Get one pokemon by its ID (pokeDex Number)
    getById: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No pokemon with id: ${req.params.id}` });
            const pokemon = await Pokemon.findById(req.params.id);
            res.status(200).json(pokemon);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Get one pokemon by its Name (name per each evolution)
    getByName: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.name))
                return res.status(404).json({ message: `No pokemon called: ${req.params.name}` });
            const pokemon = await Pokemon.findByName(req.params.name);
            res.status(200).json(pokemon);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Get all pokemon by its type (category)
    getByType: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.type))
                return res.status(404).json({ message: `${req.params.type} may be a type in a far away land, maybe Jokemon` });
            const pokemon = await Pokemon.findByType(req.params.type);
            res.status(200).json(pokemon);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Create new pokemon in the database
    createPokemon: async (req, res) => {
        const createPokemon = new Pokemon(req.body);
        try {
            await createPokemon.save();
            res.status(201).json(createPokemon);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Update an existing pokemon by its ID
    updatePokemon: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No pokemon with id: ${req.params.id}` });
            const updatePokemon = await Pokemon.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
            res.status(201).json(updatePokemon);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Update pokemon in the database with last ID.
    updateLastPokemon: async (req, res) => {
        try {
            let id;
            const getPokemon = await Pokemon.findOne().sort({ _id: -1 })
                .then((res) => { id = res._id; })
            const updatePokemon = await Pokemon.findByIdAndUpdate({ _id: id }, req.body, { new: true });
            res.status(201).json(updatePokemon);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Delete pokemon by ID
    deletePokemon: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No pokemon with id: ${req.params.id}` });
            await Pokemon.findByIdAndDelete({ _id: req.params.id });
            res.status(201).json({ message: "Pokemon released Sucessfully!" });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}
