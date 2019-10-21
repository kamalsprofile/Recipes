import axios from 'axios';


export default class Search {
    constructor(searchQuery) {
        this.searchQuery = searchQuery;
    }
    async  recipes() {
        const key = '356363ef7a3373e662c3f118ed65ddff'

        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.searchQuery}`);
        this.result = res.data.recipes;
        //console.log(this.result);
    }
}

