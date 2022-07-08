const moviesEl = document.querySelector('.movies')
const val = document.querySelector('input').value

async function search(event) {
    const val = document.querySelector('input').value
    if (event.keyCode === 13) {
        main(val)
    }
}

async function searchWithButton() {
    const val = document.querySelector('input').value
    main(val)
}

async function main(val) {
    const moviesPromise = await fetch(`https://www.omdbapi.com/?apikey=3ee4c002&s=${val}`)
    const moviesData = await moviesPromise.json()
    const moviesDataNew = moviesData.Search

    moviesEl.innerHTML = moviesData.Search.slice(0, 6).map(movie => renderMovies(movie)).join('')
}

function renderMovies(movie) {
    return `<div class="movie">
    <figure class="movie__img--wrapper">
        <img class="movie__img" src=${movie.Poster} alt="">
    </figure>
    <h2 class="movie__title">${movie.Title}</h2>
</div>`
}
