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
  <div class=" container d-flex flex-wrap mx-auto">
    <div class="col-3 my-5" v-for="result in state.results">
      <h3>{{ result.title }}</h3>
      <h5>{{ result.original_title }}</h5>
      <div class="d-flex gap-5">
        <span>{{ result.original_language }}</span>
        <span>{{ result.vote_average }}</span>
      </div>

    </div>
  </div>
</template>

<style ></style>
