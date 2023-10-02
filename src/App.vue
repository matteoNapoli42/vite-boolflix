<script>
import { state } from './state'
import FilmRow from "./components/FilmRow.vue"
import TvRow from "./components/TvRow.vue"
import Header from './components/Header.vue'
export default {
  name: "App",
  components: {
    FilmRow,
    TvRow,
    Header

  },

  data() {
    return {
      state,
    }
  },

  methods: {
    starRating() {
      this.fullStar = this.elem.vote_average / 2;
      this.fullStar = Math.ceil(this.fullStar);
      this.emptyStar = 5 - this.fullStar;
      console.log(this.fullStar, "/", this.emptyStar);
    }
  },
}


</script>

<template>
  <!--SearchZone-->
  <Header />


  <!--SearchedElements-->
  <div class=" container mx-auto mb-5">
    <!--Film Row-->
    <div class=" pt-4">
      <ul class=" d-flex flex-wrap gap-3">
        <FilmRow v-for="film in  state.resultsMovie " :elem="film" />
      </ul>
    </div>
    <!--TvSeries Row-->
    <div class=" pt-4">
      <ul class="d-flex flex-wrap gap-3">
        <TvRow v-for="series in state.resultsTV" :elem="series" />
      </ul>
    </div>
    <!--Navigation-->
    <div class="d-flex">
      <button @click="state.changePage(-1)">Pagina Indietro</button>
      <span>{{ state.pageCounter }}/{{ state.maxPages }}</span>
      <button @click="state.changePage(1)">Pagina Avanti</button>


    </div>
  </div>
</template>

<style>
ul {
  list-style: none;
}

.searchedItem {
  height: 350px;
}

#header {
  height: 75px;
}
</style>
