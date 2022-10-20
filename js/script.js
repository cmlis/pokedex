

const pokemonCont = document.querySelector('.pokemon-container');

async function getPokemon(id){

    let responseFromUrl = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
    let pokemon = await responseFromUrl.json();

    createPokemon(pokemon);
}


function getManyPokemons(number){

    for (let i = 1; i <= number; i++){
        getPokemon(i);
    }
}

function createPokemon(pokemon){

    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteCont =  document.createElement('div');
    spriteCont.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteCont.appendChild(sprite);

    const number  = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(1,0)}`

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    card.appendChild(spriteCont);
    card.appendChild(number);
    card.appendChild(name);

    pokemonCont.appendChild(card);

}

getManyPokemons(9);