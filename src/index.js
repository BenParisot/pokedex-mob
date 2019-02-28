import pokedex from '../data/pokedex.js';
import loadList from './list-component.js';
import loadPaging from './paging-component.js';

loadPaging(pokedex.length);
loadList(pokedex);
