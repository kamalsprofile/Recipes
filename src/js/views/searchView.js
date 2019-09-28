import { DOMStrings } from './base';

export const prepareUIBeforeRender = () => {
    DOMStrings.searchQuery.value = '';
    DOMStrings.ricepesList.innerHTML = ''

}

export const getQuery = () => {
    return DOMStrings.searchQuery.value
};

export const displayRicepes = ricepeList => {
    ricepeList.forEach(element => {
        const html = `<li>
        <a class="results__link" href="#${element.recipe_id}">
            <figure class="results__fig">
                <img src="${element.image_url}" alt="${element.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${element.title}</h4>
                <p class="results__author">${element.publisher}</p>
            </div>
        </a>
    </li>`


        DOMStrings.ricepesList.insertAdjacentHTML('beforeend', html);


    });
}


