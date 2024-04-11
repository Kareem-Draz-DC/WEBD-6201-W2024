# FullStack Pokemon

## User Stories

A user story is an informal, general explanation of a software feature written from the prespective of the end user. (atlassian.com)

1. As a User, I want to be able to Search for a Pokemon
   1. EJS View - homePage (search form)
   1. Router - GET /
   1. Router - POST /search
   1. Controller - searchPokemon(req, res)
   1. EJS View - displayPokemon
2. As a User, I want to be able to Save a pokemon to my Saved Collection (Database).
   1. Create a Configuration file to establish a connection to our database (and run it in index.js)
   2. Define a Pokemon Model/Schema to structure the pokemon data that will be saved to our DB
   3. Create form (behaves like a button) in displayPokemon.ejs that says "Add Pokemon To My Collection"
   4. Router - POST /savePokemon
   5. Controller - savePokemonToCollection(req, res)
3. As a User, I want to be able to Read the Pokemons from my Saved Collection.
   1. Button to navigate to MySavedCollection.ejs
   2. Router - GET /savedCollection
   3. Controller - getMyCollection(req,res)
   4. EJS View - MySavedCollection.ejs
4. As a User, I want to be able to Delete a Pokemon from my Saved Collection.
   1. Button to delete pokemon from savedCollection
   2. Router - POST (Delete) /deletePokemon/:id
   3. Controller - deletePokemonById(req,res)
   4. Redirect back to /savedCollection
5. As a User, I want to be able to Update/Edit a Pokemon in my Saved Collection.
6. As a User, I want to be able to Create my own Pokemons in my Saved Collection
7. As a User, I want to be able to Sign up for a new account
   1. EJS View - SignUpPage.ejs (update navbar)
   2. Router - POST /signup
   3. Controller - signUpUser(req, res) (redirect to Login Page)
8. As a User, I want to be able to Log in to an existing account
   1. EJS View - LoginPage.ejs
   2. Router - POST /login
   3. Controller - loginUser(req, res) (redirect to home page)
   4. Add Necessary Middleware

## Requirements

1. Use Node.js & Express.js as your back end framework
2. Integrate MongoDB as your database
3. Add User Authentication
4. Use a view engine with EJS Templates as your front end application

## Wireframes

<img src="./images/wireframes.png">

## Routes & Controllers

TODO
