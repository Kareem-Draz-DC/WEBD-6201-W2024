const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  // mongoDB adds its own Unique ID to each record
  pokemonId: Number,
  name: String,
  height: Number,
  photo: String,
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
