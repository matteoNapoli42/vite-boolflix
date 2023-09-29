<script>
import { state } from './state'
export default {
  name: "App",
  components: {

  },

  data() {
    return {
      state,
      searchedFilm: "",
    }
  },

  methods: {
    clearInput() {
      this.searchedFilm = "";
    }
  },
  created() {
  }
}

</script>

<template>
  <div class="container">
    <!--SearchZone-->
    <div class="d-flex justify-content-center gap-3 mx-auto py-4">
      <input type="text" v-model="searchedFilm" placeholder="Cerca un film">
      <button class="btn btn-primary" @click="state.searchFilms(searchedFilm), clearInput()">Cerca</button>
    </div>
  </div>
  <!--SearchedElements-->
  <div class=" container mx-auto mb-5">
    <div class="row">
      <ul class=" d-flex flex-wrap gap-3">
        <li v-for="result in state.resultsMovie"
          :style="{ backgroundImage: `url('https://image.tmdb.org/t/p/w342/${result.poster_path}')` }"
          style="background-size: cover;" class=" col-2 searchedElement">
          <h3>{{ result.title }}</h3>
          <h5>{{ result.original_title }}</h5>
          <div class="d-flex gap-5">
            <img
              :src="`https://flagsapi.com/${result.original_language.toUpperCase() == 'EN' ? 'GB' : (result.original_language.toUpperCase() == 'JA' ? 'JP' : (result.original_language.toUpperCase() == 'ZH' ? 'CN' : ''))}/flat/64.png`">
            <span>{{ result.vote_average }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="row">
      <ul class="d-flex flex-wrap gap-3">
        <li v-for="result in state.resultsTV"
          :style="{ backgroundImage: `url('https://image.tmdb.org/t/p/w342/${result.poster_path}')` }"
          style="background-size: cover;" class=" col-2 searchedElement">
          <h3>{{ result.name }}</h3>
          <h5>{{ result.original_name }}</h5>
          <div class="d-flex gap-5" style="background: ;">
            <img
              :src="`https://flagsapi.com/${result.original_language.toUpperCase() == 'EN' ? 'GB' : (result.original_language.toUpperCase() == 'JA' ? 'JP' : (result.original_language.toUpperCase() == 'ZH' ? 'CN' : ''))}/flat/64.png`">
            <span>{{ result.vote_average }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style >
ul {
  list-style: none;
}

.searchedElement {
  height: 350px;

}
</style>
