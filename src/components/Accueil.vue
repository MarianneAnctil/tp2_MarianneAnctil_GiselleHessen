

<script>
import { getMovieKeyword } from '@/services/MovieService.js';
import { getMovieGenre } from '@/services/MovieService.js';

import KeyWordMovies from '../components/KeyWordMovies.vue';



export default{
     components: {
   KeyWordMovies,
  },

data(){
   return{
       keyWordMovies:[],
       genreMovies:[],

       searchMovie:'',
       selectedGenre:null,

   };
},

props: {
    movies: {
        type: Array,
    //default: () => [],
    },
    genres: {
        type: Array,
    //default: () => [],
    },
     selectedMovies: {
        type: Array,
    //default: () => [],
    },
    
},
computed:{
  
    randomizeSelectedMovies(){
        console.log(this.movies)
    console.log('Computing randomizeSelectedMovies...');
        //let selectedMovies = [];
        var randomizedNumber = 0;
       
for(let cpt=0; cpt<3; cpt++){
 this.randomizedNumber = Math.floor(Math.random() * this.movies.length);
 selectedMovies.push(this.movies[cpt])
}

console.log(this.selectedMovies)
console.log(this.movies[this.randomizedNumber])

return this.selectedMovies;
        
    }
},

methods: {
    keyWord() {
    
      getMovieKeyword(this.searchMovie).then(response => this.keyWordMovies = response.results);
      console.log(this.searchMovie)
      console.log(this.movies)
    },
      genres() {
  getMovieGenre(this.selectedGenre).then(response => this.keyWordMovies = response.results);
      console.log(this.selectedGenre)
    },
     afficherFiche() {
  getMovieGenre(this.selectedGenre).then(response => this.keyWordMovies = response.results);
      console.log(this.selectedGenre)
    },
},

};

</script>


<template>
<main>
<nav>

     <span>Recherche par nom: <input v-model="searchMovie"/></span>
     <button @click='keyWord()'>Rechercher</button>
     <select v-model="selectedGenre" @change="genres()">
        <option  v-for="genre in this.genres" :key='genre.id' :value='genre.name'>{{genre.name}}</option>
    </select>
</nav>
<ul>
    <li 
    v-for="movie in this.movies" :key='movie.id'>
    <img src='{{movie.poster_path}}'>
    <span @click='afficherFiche(movie.id)'>{{movie.original_title}}</span>
    <p>{{movie.release_date}}</p>
    </li>
</ul>

<section>
    <KeyWordMovies :movies='keyWordMovies' />
</section>
</main>
</template>
