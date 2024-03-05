console.log("Script is running!");

document.getElementById("loadPokemon").addEventListener("click", function () {
  // We want to create a new XMLHTTPRequest Object to grab the Pokemon API Data

  console.log("callback function");
  var xhr = new XMLHttpRequest();

  // The line below will create a GET HTTP Request to the pokemon API via the URL
  // The call below is ASYNCHRONOUS
  xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");

  xhr.onload = function () {
    console.log("API has responded!");
    //   console.log(this);
    var response = JSON.parse(this.responseText);
    console.log(response);
    var pokemonString = "";
    response.results.forEach((pokemon) => {
      pokemonString += `<li><a href=${pokemon.url}>${pokemon.name}</a></li>`;
    });
    document.getElementById("pokemonList").innerHTML = pokemonString;
  };
  xhr.send();
});
