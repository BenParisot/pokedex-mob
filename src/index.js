import pokedex from '../data/pokedex.js';
import loadList from './list-component.js';
import loadPaging from './paging-component.js';
import pageArraySplit from './page-array.js';

loadPaging(pokedex.length, pagingOptions => {
    const newArray = pageArraySplit(pokedex, pagingOptions);
    loadList(newArray);
});
