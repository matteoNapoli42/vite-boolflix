<script>
import { state } from './state'
export default {
  name: "App",
  components: {

  },

  data() {
    return {
      state,
    }

  },
  created() {
    state.searchFilms("star wars");
  }
}

</script>

<template></template>

<style ></style>
