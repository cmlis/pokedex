

const pokemonContainer = document.querySelector('.pokemon-container');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');

let offset = 1;
let limit = 8;

async function getPokemon(id){
    let responseFromUrl = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
    let pokemon = await responseFromUrl.json();

    console.log(pokemon);

    createPokemon(pokemon);
}


function getManyPokemons(offset,limit){

    console.log(offset,limit);
    for (let i = offset; i <= offset + limit; i++){
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
    number.textContent = `#${pokemon.id.toString().padStart(2,0)}`

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    card.appendChild(spriteCont);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);

}


previous.addEventListener('click', () => {

    if (offset != 1) {
        offset -= 9;
        reset();
        getManyPokemons(offset,limit);
    }
   
});

next.addEventListener('click', () => {
    offset += 9;
    reset();
    getManyPokemons(offset,limit);


});


function reset() {
    return pokemonContainer.innerHTML = '';  

};


getManyPokemons(offset,limit);