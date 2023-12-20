

<script>
import { getMovieKeyword } from '@/services/MovieService.js';
import { getMovieGenre } from '@/services/MovieService.js';
import { RouterLink, RouterView } from 'vue-router'
import { isProxy, toRaw } from 'vue';
import KeyWordMovies from '../components/KeyWordMovies.vue';



export default{
     components: {
   KeyWordMovies,
  },

data(){
   return{
       keyWordMovies:[],
       genreMovies:[],
       titleSearch:'',
       searchMovie:'',
       searchDate:'',

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
const arrMovies = toRaw(this.movies)
        let selectedMovies = [];
      
       
for(let cpt=0; cpt<3; cpt++){
 if(arrMovies.length ===  0){

 }else{
      var randomizedNumber = Math.floor(Math.random() * 21);
 selectedMovies.push(arrMovies[randomizedNumber])
    
 }

}

console.log(selectedMovies)
//console.log(this.movies[this.randomizedNumber])

return this.selectedMovies;
        
    }
},

methods: {
    keyWord() {
        if(this.searchMovie){
      getMovieKeyword(this.searchMovie).then(response => this.keyWordMovies = response.results);
      this.titleSearch = 'Résultats de recherche pour ' +this.searchMovie ;
        }else if(this.searchDate){
            getMovieDate(this.searchDate).then(response => this.keyWordMovies = response.results);
             this.titleSearch = 'Résultats de recherche pour ' +this.searchDate ;
        }
  
    
    },
      genres() {
        
  getMovieGenre(this.selectedGenre).then(response => this.keyWordMovies = response.results);
  this.titleSearch = 'Résultats de recherche pour ' +this.selectedGenre ;
    
    },
     afficherFiche(id) {
  router.push('/movie/:'+id)
  
    },
},

};

</script>


<template>
<main>
<nav>

     <span>Recherche par nom: <input v-model="searchMovie"/></span>
     <span>Recherche par date: <input v-model="searchDate"/></span>

     <button @click='keyWord()'>Rechercher</button>
     <select v-model="selectedGenre" @change="genres()">
        <option  v-for="genre in this.genres" :key='genre.id' :value='genre.name'>{{genre.name}}</option>
    </select>
</nav>
<section>
    <KeyWordMovies :movies='keyWordMovies' :title="titleSearch"/>
</section>
<h2>Nouveautés</h2>
<ul>
    <li 
    v-for="movie in this.movies" :key='movie.id'>
    <img src='movie.poster_path'>
    <router-link :to="{name:'movie-details', params:{id:movie.id}}">
    <span @click='afficherFiche(movie.id)'>{{movie.original_title}}</span>
    </router-link>
    <p>{{movie.release_date}}</p>
    </li>
</ul>

</main>
</template>
