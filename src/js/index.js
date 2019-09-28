import Search from './modules/Search1';
const state = {}


const controlSearch = async () => {
    // get the search query
    const query = "pasta";
    // create new search object and store it in the state
    if (query) {
        state.search = new Search(query);
        // prepare the ui for the search

        // get the data from the api
        await state.search.recipes();

        //display result in the ui
        console.log(state.search.result)
    }

}
document.querySelector(".search").addEventListener('submit', e => {
    e.preventDefault();
    controlSearch()
})

const search = new Search('rice');
search.recipes();