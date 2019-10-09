import { DOMStrings } from './base';

export const prepareUIBeforeRender = () => {
    DOMStrings.searchQuery.value = '';
    DOMStrings.ricepesList.innerHTML = '';
    DOMStrings.pagination.innerHTML = ''

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



export const displayRicepe = element => {

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



}


const displaybtn = (page, type) => {


    console.log(type);
    return `
<button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
<span>Page  ${type === 'prev' ? page - 1 : page + 1} </span>
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${type === 'next' ? 'right' : 'left'}"></use>
    </svg>

</button>
`

}


const renderButtons = (page, totalItems, itemsPerPage) => {

    const buttons = Math.ceil(totalItems / itemsPerPage);
    let btn;
    if (page === 1 && buttons > 1) {
        // only the next btn
        btn = displaybtn(page, 'next')

    } else if (page === buttons && buttons > 1) {
        // only prev btn
        btn = displaybtn(page, 'prev')
    } else if (page < buttons) {
        // both btn
        btn =
            `
        ${displaybtn(page, 'next')}
        ${displaybtn(page, 'prev')}
        `


    }
    DOMStrings.pagination.insertAdjacentHTML('afterbegin', btn)

}

export const displayRicepes = (ricepeList, page = 1, itemsPerPage = 10) => {
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    ricepeList.slice(start, end).forEach(ricepe => displayRicepe(ricepe));
    renderButtons(page, ricepeList.length, itemsPerPage)
}

