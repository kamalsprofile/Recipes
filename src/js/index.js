import Search from './modules/Search1';
import * as searchView from './views/searchView';
import { DOMStrings, getLoader, removeLoader } from '../js/views/base';
import Recipe from './modules/Recipe';


const state = {}


// Search controller
const controlSearch = async () => {
    // get the search query
    const query = searchView.getQuery();

    // create new search object and store it in the state
    if (query) {
        state.search = new Search(query);
        // prepare the ui for the search
        searchView.prepareUIBeforeRender();
        getLoader(DOMStrings.results)
        // get the data from the api
        await state.search.recipes();
        //display result in the ui
        removeLoader();
        searchView.displayRicepes(state.search.result)
    }

}
DOMStrings.search.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch()
})

DOMStrings.pagination.addEventListener('click', e => {
    const btn = e.target.closest(".btn-inline");
    const goTo = parseInt(btn.dataset.goto, 10)
    console.log(goTo)
    searchView.prepareUIBeforeRender();
    searchView.displayRicepes(state.search.result, goTo);


})


//Recipe controller
const recipeController = async () => {
    const id = window.location.hash.replace('#', '');
    console.log(id);
    if (id) {

        state.recipe = new Recipe(id)
        await state.recipe.getRicepeById();

        state.recipe.calculateTime();
        state.recipe.servings();
        console.log(state.recipe);
    }
}


['hashchange', 'load'].forEach(event => { window.addEventListener(event, recipeController) });
