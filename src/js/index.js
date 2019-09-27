import axios from 'axios';
//https://www.food2fork.com/api/search
//07fe92a4e51f2f32c89aff7ea7d8eecd

async function recipes(searchQuery) {
    const key = 'b3ef3343426d3e9830968f03e3e3280d'

    const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${searchQuery}`);
    const recipes = res.data.recipes;
    console.log(recipes);
}

recipes('pasta');