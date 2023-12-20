
let baseURLDiscover = 'https://api.themoviedb.org/3/discover/movie';
let baseURLSearch = 'https://api.themoviedb.org/3/search/movie';



let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
};

// const RESOURCE_NAME = "products";

export async function getAllMovies() {
    const response = await fetch(baseURLDiscover+ '?api_key=daae932b052d96ade399f33a4e6a9e58&year=2023', headers);
    return await response.json();
}

export async function getMovie(id) {
    const response = await fetch(baseURLSearch+ '/' + id + '?api_key=daae932b052d96ade399f33a4e6a9e58', headers);
    let movie = await response.json();
    return movie;
}

export async function getMovieKeyword(keyWord) {
    const response = await fetch(baseURLSearch+ '?api_key=daae932b052d96ade399f33a4e6a9e58&query='+keyWord, headers);
    let movie = await response.json();
    console.log(baseURLSearch+ '?api_key=daae932b052d96ade399f33a4e6a9e58&query='+keyWord)
    return movie;
}
export async function getMovieDate(date) {
    const response = await fetch(baseURLSearch+ '?api_key=daae932b052d96ade399f33a4e6a9e58&year='+date, headers);
    let movie = await response.json();
    console.log(baseURLSearch+ '?api_key=daae932b052d96ade399f33a4e6a9e58&query='+keyWord)
    return movie;
}

export async function getMovieGenre(genre) {
    const response = await fetchbase (URLSearch+ '?api_key=daae932b052d96ade399f33a4e6a9e58&with_genre='+genre, headers);
    let movie = await response.json();
    return movie;
}

export async function getAllGenres() {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=daae932b052d96ade399f33a4e6a9e58', headers);
    let genres = await response.json();
    console.log(genres)
    return genres;
}


