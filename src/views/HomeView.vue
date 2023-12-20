

<template>
<div>
<Accueil :movies='movies' :genres='genres' />

</div>
</template>

<script>
import Accueil from '../components/Accueil.vue'
import { getAllMovies } from '@/services/MovieService.js';
import { getAllGenres } from '@/services/MovieService.js';


export default {
   components: {
   Accueil,
  },
  data() {
    return{
      movies: [],
      genres: [],

    };
  },
  mounted() {
    getAllMovies().then(response => this.movies = response.results);
    getAllGenres().then(response => this.genres = response.genres);

    
  },
};


</script>


