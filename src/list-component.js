import capitalize from '../src/capitalize.js';

export function createLi(pokemon) {
    const template = document.createElement('template');

    const html = `
    <li style="background-color: ${pokemon.color_1}">
                <h2>${capitalize(pokemon.pokemon)}</h2>
                <img src="${pokemon.url_image}">
                <p>HP:${pokemon.hp} A:${pokemon.attack} D:${pokemon.defense}</p>
            </li>`;

    template.innerHTML = html;

    return template.content;
}
const pokelist = document.getElementById('pokelist');
export default function loadList(pokemonList) {
    pokemonList.forEach(pokemon => {
        const pokeDom = createLi(pokemon);
        pokelist.appendChild(pokeDom);
    });
}