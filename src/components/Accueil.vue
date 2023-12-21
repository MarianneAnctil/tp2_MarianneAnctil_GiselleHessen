<script>
import {getMovieKeyword} from '@/services/MovieService.js';
import {getMovieGenre} from '@/services/MovieService.js';
import {RouterLink, RouterView} from 'vue-router'
import {isProxy, toRaw} from 'vue';
import KeyWordMovies from '../components/KeyWordMovies.vue';


export default {
  components: {
    KeyWordMovies,
  },

  data() {
    return {
      keyWordMovies: [],
      genreMovies: [],
      titleSearch: '',
      searchMovie: '',
      searchDate: '',
      selectedGenre: null,
      noResults: false,

    };
  },

  props: {
    movies: {
      type: Array,
    },
    genres: {
      type: Array,
    },
    selectedMovies: {
      type: Array,
    },

  },

  methods: {
    keyWord() {
      if (this.searchMovie) {
        getMovieKeyword(this.searchMovie).then(response => {
          this.keyWordMovies = response.results;
          this.titleSearch = 'Résultats de recherche pour ' + this.searchMovie;
          if (this.keyWordMovies.length === 0) {
            this.noResults = true;
          } else {
            this.noResults = false;
          }
        });
      } else if (this.searchDate) {
        getMovieDate(this.searchDate).then(response => {
          this.keyWordMovies = response.results;
          this.titleSearch = 'Résultats de recherche pour ' + this.searchDate;
          if (this.keyWordMovies.length === 0) {
            this.noResults = true;
          } else {
            this.noResults = false;
          }
        });
      }
    },
    genres() {

      getMovieGenre(this.selectedGenre).then(response => {
        this.keyWordMovies = response.results;
        this.titleSearch = 'Résultats de recherche pour ' + this.selectedGenre;
        if (this.keyWordMovies.length === 0) {
          this.noResults = true;
        } else {
          this.noResults = false;
        }
      });
    },
    afficherFiche(id) {
      router.push('/movie/:' + id)
    },
  },

};

</script>


<template>
  <main>
    <nav>

      <span>Recherche par nom: <input v-model="searchMovie"/></span>
      <span>Recherche par date de sortie: <input v-model="searchDate"/></span>
      <button @click='keyWord()'>Rechercher</button>
      <label for="genres">Filtrer par genre</label>
      <select id="genres" v-model="selectedGenre" @change="genres()">
        <option v-for="genre in this.genres" :key='genre.id' :value='genre.name'>{{ genre.name }}</option>
      </select>
    </nav>
    <section>
      <KeyWordMovies :movies='keyWordMovies' :title="titleSearch"/>
      <p v-if="noResults">Aucun résultat trouvé pour cette recherche.</p>
    </section>
    <h2>Nouveautés</h2>
    <ul>
      <li v-for="(movie, index) in this.movies.slice(0, 3)" :key='movie.id' v-if="!noResults">
        <img :src="movie.poster_path ? movie.poster_path : 'https://placeimg.com/200/200/tech'" width="200"/>
        <router-link :to="{name:'movie-details', params:{id:movie.id}}">
          <span @click='afficherFiche(movie.id)'>{{ movie.original_title }}</span>
        </router-link>
        <p>{{ movie.release_date }}</p>
      </li>
    </ul>


  </main>
</template>
