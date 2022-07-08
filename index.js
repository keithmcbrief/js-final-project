// http://www.omdbapi.com/?apikey=3ee4c002&
// https://www.omdbapi.com/?apikey=3ee4c002&s=fast

const moviesEl = document.querySelector('.movies')
const val = document.querySelector('input').value

function search(event) {
    const val = document.querySelector('input').value
    if (event.keyCode === 13) {
        console.log(val)
    }
}

function searchWithButton() {
    const val = document.querySelector('input').value
        console.log(val)
}

async function main() {
    const moviesPromise = await fetch(`https://www.omdbapi.com/?apikey=3ee4c002&s=${val}`)
    const moviesData = await moviesPromise.json()
    const moviesDataNew = moviesData.Search

    moviesEl.innerHTML = moviesData.Search.map(movie => renderMovies(movie)).join('')
}

function renderMovies(movie) {
    return `<div class="movie">
    <figure class="movie__img--wrapper">
        <img class="movie__img" src=${movie.Poster} alt="">
    </figure>
    <h2 class="movie__title">${movie.Title}</h2>
</div>`
}

main()
