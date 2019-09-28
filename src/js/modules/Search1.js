import axios from 'axios';


export default class Search {
    constructor(searchQuery) {
        this.searchQuery = searchQuery;
    }
    async  recipes() {
        const key = '07fe92a4e51f2f32c89aff7ea7d8eecd'

        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.searchQuery}`);
        this.result = res.data.recipes;
        //console.log(this.result);
    }
}

