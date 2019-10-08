export const DOMStrings = {
    searchQuery: document.querySelector(".search__field"),
    ricepesList: document.querySelector(".results__list"),
    search: document.querySelector(".search"),
    results: document.querySelector(".results")
}

export const getLoader = (parent) => {
    const loader = `
    <div class="loader">
    <svg >
    <use href="img/icons.svg#icon-cw"></use>
</svg>
</div>`

    parent.insertAdjacentHTML('afterbegin', loader);
}

export const removeLoader = () => {

    const loader = document.querySelector(".loader");
    if (loader) loader.parentElement.removeChild(loader);

}