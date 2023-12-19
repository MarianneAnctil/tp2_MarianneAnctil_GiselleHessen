

<script>
export default{

props: {
    movies: {
        type: Array,
    //default: () => [],
    },
   randomizedNumber:{
        type:Number,
        default:1,
    },
    selectedMovies:{
        type:Array,
       // default: () => [],
    }
},
computed:{
    randomizeSelectedMovies(){
    console.log('Computing randomizeSelectedMovies...');
        let selectedMovies = [];
        
for(let cpt=0; cpt<3; cpt++){
    console.log(selectedMovies)
    console.log(this.movies)
const randomizedNumber = Math.floor(Math.random() * this.movies.length);
selectedMovies.push(this.movies[randomizedNumber])
console.log(selectedMovies)
console.log(randomizedNumber)
console.log(this.movies)
}
return selectedMovies;
    }
},
};




</script>


<template>
<ul>
    <li
    v-for="movie in randomizeSelectedMovies" :key='movie.id'>
    <span>{{movie.original_title}}</span>
    </li>
</ul>
</template>
