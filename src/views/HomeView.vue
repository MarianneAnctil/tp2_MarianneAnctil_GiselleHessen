

<template>
<div>
<Accueil :movies='movies' />
</div>
</template>

<script>
import Accueil from '../components/Accueil.vue'
import { getAllMovies } from '@/services/MovieService.js';

export default {
   components: {
   Accueil,
  },
  data() {
    return{
      movies: [],
    };
  },
  mounted() {
    getAllMovies().then(response => this.movies = response.results);
    
  },
};


</script>


