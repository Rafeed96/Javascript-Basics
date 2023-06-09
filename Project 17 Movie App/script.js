const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


//get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies){
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')

        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        
        <div class="movie">
        <img src="https://dcmp.org/images/learning_center/34/34-1.jpg" alt="">
        <div class="movie-info">
            <h3>Movie Title</h3>
            <span class="green">9.8</span>

        </div>

        <div class="overview">
            <h3>Overview</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique quasi nisi aspernatur expedita quaerat est laborum, molestiae minus! Omnis, cupiditate.
        </div>
    </div>

        `
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value 

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    }else {
        window.location.reload()
    }
})