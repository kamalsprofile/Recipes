import axios from 'axios';


export default class Recipe {
    constructor(ID) {
        this.ID = ID;
    }
    async  getRicepeById() {

        const key = '356363ef7a3373e662c3f118ed65ddff'


        const res = await axios(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/get?key=${key}&rId=${this.ID}`);
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

    parseIngredients() {
        const longUnit = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const shortUnit = ['tbs', 'tbs', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
        const newIngredients = this.ingredients.map(ingredient => {
            //uniform the units
            ingredient.slice(' ');
            console.log(ingredient);
            //remove parantethes

            //parse ingredients into count, unit and ingredient
        })
        this.ingredients = newIngredients;
    }
}