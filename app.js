document.addEventListener('DOMContentLoaded', function() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151') // Begrenzung auf die ersten 151 Pokémon
        .then(response => response.json())
        .then(data => {
            const selectElement = document.getElementById('pokemonInput2');
            data.results.forEach((pokemon, index) => {
                const option = document.createElement('option');
                option.value = index + 1;
                option.textContent = `${index + 1} - ${pokemon.name}`;
                selectElement.appendChild(option);
            });
        });
});

// Event Listener starting the request to fetch for pokemon the second the page is visited
document.addEventListener('DOMContentLoaded', () => {
    const pokemonInput = document.getElementById('pokemonInput');
    const fetchBtn = document.getElementById('fetchPokemon');

    fetchBtn.addEventListener('click', () => {
        fetchThePoke(pokemonInput.value)
    })
})

// function to fetch the pokemon
function fetchThePoke(valueOfInputField) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${valueOfInputField.toLowerCase()}`)
        .then(response => response.json())
        .then(data => displayPokemon(data))
        .catch(error => {
            console.error('Pokemon not found:', error)
            alert('Pokemon des not Exist!', error)
        })
}

// function to display the pokemon
function displayPokemon(pokemon) {
    const display = document.getElementById('pokemon-display')
    display.innerHTML = `
        <div class = "text-center">
            <img src = ${pokemon.sprites.front_default}>
            <h3>${pokemon.name.toUpperCase()}</h3>
        </div>
        `
}











//Parameters are simply containers for the value that will come in the future when we use the function
function test(PartyType, Participants, Amount, Fee) {
    // Combining the Parameters with text to make sense
    console.log("The party is a", PartyType);
    console.log("There are", Participants, "people invited to the party.");
    console.log("We will need", Amount, "Pizza's.")
    console.log("The entry donation is", Fee, "Euro.")
}

test("Pizza Party", 8, 20, 5);