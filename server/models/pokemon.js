const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PokemonSchema = new Schema({
    Name: {
        type: String,
        required: true
    },

    Type: {
        type: [String],
        enum: ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dark", "Dragon", "Steel", "Fairy"],
        required: true
    },

    Picture: {
        type: String,
        required: true
    },

    EvolutionAbility: {
        type: Boolean,
        required: true
    },

    PokedexIndex: {
        type: Number,
        unique: true       

    },

    HP: {
        type: Number,
        required: true,
    },
    
    Attack: {
        type: Number,
        required: true,
    },
    
    Defense: {
        type: Number,
        required: true,
    },
    
    SpAttack: {
        type: Number,
        required: true,
    },
    
    SpDefense: {
        type: Number,
        required: true,
    },
    
    Speed: {
        type: Number,
        required: true,
    }
});

const Pokemon = model("Pokemon", PokemonSchema);
module.exports = { "Pokemon": Pokemon };
