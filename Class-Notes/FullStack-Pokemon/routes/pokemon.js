// We are initializing a router object from Express Router
const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemon");

// app.get("/hello", (req, res) => res.send("hello there"));
// router.get("/hello-pokemon", (req, res) => res.send("Hello Pokemon!"));
router.get("/hello-pokemon", pokemonController.greetPokemon);

// Share the router with others
// CommonJS Syntax
module.exports = router;

// ES6 Syntax
// export router
