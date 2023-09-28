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
    //state.searchFilms(this.takeInput(this.searchedFilm));
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
    <!--SearchedElements-->
    <div>
      <h3>Titolo</h3>
      <h5>Titolo Originale</h5>
      <span>Lingua</span>
      <span>Voto</span>
    </div>

  </div>
</template>

<style ></style>
