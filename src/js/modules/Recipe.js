import axios from 'axios';


export default class Recipe {
    constructor(ID) {
        this.ID = ID;
    }
    async  getRicepeById() {

        const key = '356363ef7a3373e662c3f118ed65ddff'


        const res = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.ID}`);
        this.title = res.data.recipe.title;
        this.image = res.data.recipe.image_url;
        this.author = res.data.recipe.publisher;
        this.ingredients = res.data.recipe.ingredients;



    }


    calculateTime() {
        const totalIngredients = this.ingredients.length;
        const periods = Math.ceil(totalIngredients / 3);
        const totalTime = periods * 15;
        this.totaltime = totalTime;
    }

    servings() {
        this.serving = 4;
    }
}