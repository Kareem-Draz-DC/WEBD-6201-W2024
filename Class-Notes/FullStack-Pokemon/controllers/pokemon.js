// We want to import our Pokemon model so that we can communicate with the database
const Pokemon = require("../models/Pokemon");
const User = require("../models/User");
const bcrypt = require("bcrypt");

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
  // console.log(pokemonDetails);
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

async function getMyCollection(req, res) {
  try {
    const myCollection = await Pokemon.find({});
    res.render("mySavedCollection.ejs", { myCollection });
  } catch (err) {
    console.err("Error with getting saved collection");
    res.status(500).send("Error in getting saved collection");
  }
}

async function deletePokemonById(req, res) {
  try {
    const pokeId = req.params.idOfPokemon;
    await Pokemon.deleteOne({ _id: pokeId });
    res.redirect("/savedCollection");
  } catch (err) {
    console.err("Error with getting saved collection");
    res.status(500).send("Error in getting saved collection");
  }
}

function displaySignUpPage(req, res) {
  res.render("SignUpPage.ejs");
}

async function signUpUser(req, res) {
  const formData = req.body;
  try {
    bcrypt.hash(formData.password, 10, function (err, hash) {
      let newUser = new User({
        firstName: formData.firstName,
        lastName: formData.lastName,
        userName: formData.userName,
        email: formData.email,
        password: hash,
      });
      console.log("User creation in progress...");
      newUser.save().then(() => console.log("User saved!"));
      res.render("LoginPage.ejs");
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

async function loginUser(req, res) {
  const formData = req.body;
  try {
    let user = await User.findOne({ userName: formData.userName });

    bcrypt.compare(formData.password, user.password, function (err, result) {
      if (result == true) {
        // They are successfully logged in
        res.locals.user = user;
        req.session.user = user;
        res.redirect("/");
      } else {
        // They are not logged in
        res.send(err);
      }
    });
  } catch (err) {}
}

function displayLoginPage(req, res) {
  res.render("LoginPage.ejs");
}

module.exports = {
  displayLoginPage,
  loginUser,
  signUpUser,
  displaySignUpPage,
  deletePokemonById,
  getMyCollection,
  greetPokemon,
  displayHomePage,
  searchPokemon,
  savePokemonToCollection,
};

// DUE Monday April 8th @ 11:59 PM
// ICE 8: Implement the Read all pokemons from saved collection story:
// 1. Router - GET /pokemonList
// 2. Controller - getAllPokemons(req, res)
// 3. EJS - displayMyCollection.ejs
// As for the button to view your collection, you can add it in the homePage.ejs (for extra points put it in a navbar using EJS partials)
