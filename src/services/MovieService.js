
let baseURL = 'https://api.themoviedb.org/3/movie';

let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
};

// const RESOURCE_NAME = "products";

export async function getAllMovies() {
    const response = await fetch(baseURL, headers);
    return await response.json();
}

export async function getMovie(id) {
    const response = await fetch(baseURL+ '/' + id + 'api_key=daae932b052d96ade399f33a4e6a9e58', headers);
    let movie = await response.json();
    return movie;
}

