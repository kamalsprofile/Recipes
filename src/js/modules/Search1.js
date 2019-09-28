import axios from 'axios';


export default class Search {
    constructor(searchQuery) {
        this.searchQuery = searchQuery;
    }
    async  recipes() {
        const key = '1377e4187dfaf5bb0e2ad701e8e3e927'

        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.searchQuery}`);
        this.result = res.data.recipes;
        //console.log(this.result);
    }
}

