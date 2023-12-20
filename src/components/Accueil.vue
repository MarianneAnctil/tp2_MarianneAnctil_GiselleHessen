

<script>
import { getMovieKeyword } from '@/services/MovieService.js';
import KeyWordMovies from '../components/KeyWordMovies.vue'
export default{
     components: {
   KeyWordMovies,
  },

data(){
   return{
       keyWordMovies:[],
       searchMovie:'',
   };
},

props: {
    movies: {
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
    },
},

};




</script>


<template>
<main>
<nav>

     <span>Recherche par nom: <input v-model="searchMovie"/></span>
     <button @click='keyWord()'>Rechercher</button>
     <select>
        <option value='year'>Année
        </option>
        <option value='keyWord'>Titre, Mot clé...</option>
    </select>
</nav>
<ul>
    <li 
    v-for="movie in this.movies" :key='movie.id'>
    <span>{{movie.original_title}}</span>
    </li>
</ul>

<section>
    <KeyWordMovies :movies='keyWordMovies' />
</section>
</main>
</template>
