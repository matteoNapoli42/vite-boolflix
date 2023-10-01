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
