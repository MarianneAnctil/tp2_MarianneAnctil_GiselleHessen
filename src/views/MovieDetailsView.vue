<template>
  <h1>Id: {{ id }}</h1>
<!--  <h2>{{ movie.title }}</h2>-->
<!--  <h3>{{ movie.description }}</h3>-->
<!--  <p>Note: {{ movie.price }}</p>-->
<!--  <p>Durée: {{ product.fixedPrice }}</p>-->
<!--  <p>Année de parution: {{ product.discontinued }}</p>-->
<!--  <p>Lien vers le sitre officiel du film: {{ product.modifiedDate }}</p>-->
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
    getMovie(this.id).then(response => this.movie = response);
  },
};
</script>

<style lang="css" scoped></style>
