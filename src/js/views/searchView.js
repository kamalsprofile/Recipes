import { DOMStrings } from './base';

export const prepareUIBeforeRender = () => {
    DOMStrings.searchQuery.value = '';
    DOMStrings.ricepesList.innerHTML = ''

}

export const getQuery = () => {
    return DOMStrings.searchQuery.value
};

const titleLimitation = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
                return acc + cur.length
            }
        }, 0)
        return `${newTitle.join(' ')} . . . `
    }
    return title;
}



export const displayRicepes = ricepeList => {
    ricepeList.forEach(element => {
        const html = `<li>
        <a class="results__link" href="#${element.recipe_id}">
            <figure class="results__fig">
                <img src="${element.image_url}" alt="${element.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${titleLimitation(element.title)}</h4>
                <p class="results__author">${element.publisher}</p>
            </div>
        </a>
    </li>`


        DOMStrings.ricepesList.insertAdjacentHTML('beforeend', html);


    });
}


