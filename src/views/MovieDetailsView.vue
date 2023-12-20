<template>
  <h1>{{ movie.title }}</h1>
  <h2>{{ movie.overview }}</h2>
  <p>Note: {{ movie.vote_average }}</p>
  <p>Durée: {{ movie.runtime }}</p>
  <p>Année de parution: {{ movie.release_date }}</p>
  <p>Lien vers le sitre officiel du film: {{ movie.homepage }}</p>
</template>

<script>
import { getMovie } from '@/services/MovieService.js';

export default {
  data() {
    return {
      movie: Object,
    };
  },
  props: {
    id: {
      type: Number,
    },
  },
  mounted() {
    getMovie(this.id)
        .then(response => this.movie = response)
        .catch(error => console.error('Erreur lors de la récupération des données du film', error));
  },
};
</script>

<style lang="css" scoped></style>
