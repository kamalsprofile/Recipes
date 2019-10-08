import Search from './modules/Search1';
import * as searchView from './views/searchView';
import { DOMStrings, getLoader, removeLoader } from '../js/views/base';

const state = {}


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

