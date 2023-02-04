function getPokemonData() {
  const pokemonName = document.getElementById("pokemon-name-input").value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("pokemon-name").innerHTML = data.name;
      document.getElementById("pokemon-image").innerHTML =
        `<img src="${data.sprites.front_default}" alt="${data.name}">`;
      document.getElementById("pokemon-info").style.display = "block";
    })
    .catch(error => {
      alert("Pokemon not found. Please try again.");
    });
}
const pokemonNameElement = document.createElement("h2");
pokemonNameElement.innerText = pokemonName;
pokemonNameElement.style.fontSize = "24px";
pokemonNameElement.style.fontWeight = "bold";
pokemonNameElement.style.color = "#ff0000";

const pokemonImageElement = document.createElement("img");
pokemonImageElement.src = pokemonImage;
pokemonImageElement.style.width = "200px";
pokemonImageElement.style.height = "200px";
pokemonImageElement.style.border = "1px solid #000";
pokemonImageElement.style.borderRadius = "10px";


