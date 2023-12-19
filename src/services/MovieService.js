
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
    const response = await fetch(baseURLSearch+ '/' + id + 'api_key=daae932b052d96ade399f33a4e6a9e58', headers);
    let movie = await response.json();
    return movie;
}

