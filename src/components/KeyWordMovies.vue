<script>
    export default {
        props: {
            movies: {
                type: Array,
                default: () => []
            },
        },
    }
  //  console.log(this.movies)
</script>

<template>
<h1>Résultat recherche</h1>
    <ul>
    <li 
    v-for="movie in this.movies" :key='movie.id'>
    <span>{{movie.original_title}}</span>
    </li>
</ul>
</template>