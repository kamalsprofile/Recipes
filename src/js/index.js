import Search from './modules/Search1';
import * as searchView from './views/searchView';
const state = {}


const controlSearch = async () => {
    // get the search query
    const query = searchView.getQuery();

    // create new search object and store it in the state
    if (query) {
        state.search = new Search(query);
        // prepare the ui for the search
        searchView.prepareUIBeforeRender();
        // get the data from the api
        await state.search.recipes();
        //display result in the ui
        searchView.displayRicepes(state.search.result)
    }

}
document.querySelector(".search").addEventListener('submit', e => {
    e.preventDefault();
    controlSearch()
})

const search = new Search('rice');
search.recipes();