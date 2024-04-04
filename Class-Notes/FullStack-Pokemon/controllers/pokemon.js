// We want to import our Pokemon model so that we can communicate with the database
const Pokemon = require("../models/Pokemon");

function greetPokemon(req, res) {
  // Sample Data logic
  // Fetch pokemon from database
  const pokemon = {
    name: "Pikachu",
    skills: "cute cheeks",
    type: "electricity",
  };
  res.render("greetPokemon.ejs", { pokemonDetails: pokemon });
}

function displayHomePage(req, res) {
  // Display the Home Page
  res.render("homePage.ejs");
}

async function searchPokemon(req, res) {
  // We need the data from the HTML form. The data is stored inside the request body when we send a POST request
  const formData = req.body;
  // console.log("From Controller searchPokemon: Form Data:");
  // console.log(formData);
  const { pokemonName } = formData;
  // The line above is equivalent to const pokemonName = formData.pokemonName

  const pokemonAPIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
  );

  const pokemonDetails = await pokemonAPIResponse.json();
  console.log(pokemonDetails);
  res.render("displayPokemon.ejs", { pokemon: pokemonDetails });
}

async function savePokemonToCollection(req, res) {
  // Grab the form data
  const formData = req.body;
  // Create a new pokemon in our database
  try {
    await Pokemon.create({
      pokemonId: formData.pokemonId,
      name: formData.pokemonName,
      height: formData.pokemonHeight,
      photo: formData.pokemonPhoto,
    });
  } catch (err) {
    console.log(`Error in creating pokemon ${formData.pokemonName}`);
  }
  res.redirect("/"); // redirect user back to slash route upon completion
}

// DUE Monday April 8th @ 11:59 PM
// ICE 8: Implement the Read all pokemons from saved collection story:
// 1. Router - GET /pokemonList
// 2. Controller - getAllPokemons(req, res)
// 3. EJS - displayMyCollection.ejs
// As for the button to view your collection, you can add it in the homePage.ejs (for extra points put it in a navbar using EJS partials)

module.exports = {
  greetPokemon,
  displayHomePage,
  searchPokemon,
  savePokemonToCollection,
};
