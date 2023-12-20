<script>
    export default {
        props: {
            movies: {
                type: Array,
                default: () => []
            },
            title:{
                type:String,
            }
        },
    }
  //  console.log(this.movies)
</script>

<template>
<h2>{{title}}</h2>
    <ul>
    <li 
    v-for="movie in this.movies" :key='movie.id'>
     <img src='movie.poster_path'>
    <span>{{movie.original_title}}</span>
    <p>{{movie.release_date}}</p>
    </li>
</ul>
</template>