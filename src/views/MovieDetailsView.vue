<template>
  <h2>{{ movie.title }}</h2>
  <h3>{{ movie.overview }}</h3>
  <p>Note: {{ movie.vote_average }}/10</p>
  <p>Durée: {{ movie.runtime }} minutes</p>
  <p>Année de parution: {{ movie.release_date }}</p>
  <p><a href="{{ movie.homepage }}">Lien vers le sitre officiel du film</a></p>
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
