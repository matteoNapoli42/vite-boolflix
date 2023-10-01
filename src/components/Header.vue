<script>
import { state } from '../state'
export default {
    name: "Header",
    data() {
        return {
            searchedFilm: "",
            state,
        }
    },

    methods: {
        clearInput() {
            this.searchedFilm = "";
        },

    }
}
</script>

<template>
    <div class="d-flex w-100 bg-black px-3" id="header">
        <div class="col-6">
            <h1 style="color: red;" class=" py-3">BOOLFIX</h1>
        </div>
        <div class="col-6 d-flex justify-content-end py-3">
            <input type="text" v-model="searchedFilm" placeholder="Cerca un film">
            <button class="btn btn-primary" @click="state.searchFilms(searchedFilm), clearInput()">Cerca</button>
        </div>
    </div>
</template>

<style></style>