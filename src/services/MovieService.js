
let baseURLDiscover = 'https://api.themoviedb.org/3/discover/movie';
let baseURLSearch = 'https://api.themoviedb.org/3/search/movie';

let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
};

export async function getAllMovies() {
    const response = await fetch(baseURLDiscover + '?api_key=daae932b052d96ade399f33a4e6a9e58&year=2023', headers);
    return await response.json();
}

export async function getMovie(id) {
    const response = await fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=daae932b052d96ade399f33a4e6a9e58', headers);
    let movie = await response.json();
    return movie;
}

export async function getMovieKeyword(keyWord, page) {
    const response = await fetch(baseURLSearch + '?api_key=daae932b052d96ade399f33a4e6a9e58&query=' + keyWord + '&page=' + page, headers);
    let movie = await response.json();
    return movie;
}
export async function getMovieDate(date, page) {
    const response = await fetch(baseURLDiscover + '?api_key=daae932b052d96ade399f33a4e6a9e58&year=' + date + '&page=' + page, headers);
    let movie = await response.json();
    return movie;
}

export async function getMovieGenre(genre) {
    const response = await fetch(baseURLDiscover + '?api_key=daae932b052d96ade399f33a4e6a9e58&with_genre=' + genre, headers);
    let movie = await response.json();
    return movie;
}

export async function getAllGenres() {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=daae932b052d96ade399f33a4e6a9e58', headers);
    let genres = await response.json();
    return genres;
}


