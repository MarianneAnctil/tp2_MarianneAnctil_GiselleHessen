<script>
export default {
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
    },
  },
};
</script>

<template>
  <h2>{{ title }}</h2>
  <ul>
    <li v-for="movie in this.movies" :key="movie.id">
      <img src="movie.poster_path" />
      <router-link :to="{ name: 'movie-details', params: { id: movie.id } }">
        <span @click="afficherFiche(movie.id)">{{ movie.original_title }}</span>
      </router-link>
      <p>{{ movie.release_date }}</p>
    </li>
  </ul>
</template>