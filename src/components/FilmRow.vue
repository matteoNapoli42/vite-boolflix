<script>
export default {
    name: "FilmRow",
    props: {
        elem: Object,
    },

    data() {
        return {
            fullStar: null,
            emptyStar: null
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

    created() {
        this.starRating()
    },
}




</script>



<template>
    <li :style="{ backgroundImage: `url('https://image.tmdb.org/t/p/w342/${elem.poster_path}')` }"
        style="background-size: cover;" class=" col-2 searchedItem">
        <div class=" itemInfo">
            Titolo : {{ elem.title }}
            Titolo Originale :{{ elem.original_title }}
            <div class="d-flex gap-5">
                <img
                    :src="`https://flagsapi.com/${elem.original_language.toUpperCase() == 'EN' ? 'GB' : (elem.original_language.toUpperCase() == 'JA' ? 'JP' : (elem.original_language.toUpperCase() == 'ZH' ? 'CN' : ''))}/flat/32.png`">
                <span class="d-flex">
                    Voto :
                    <i v-for="n in fullStar" class="fa-solid fa-star" style="color: #f8fb60;"></i>
                    <i v-for="m in emptyStar" class="fa-solid fa-star" style="color: #8f8f8f;"></i>
                </span>
            </div>
        </div>
    </li>
</template>


<style scoped>
ul {
    list-style: none;
}

.itemInfo {
    display: none;
    width: 100%;
    height: 100%;
}

li:hover .itemInfo {
    display: block;
    background-color: rgba(5, 5, 5, 0.103);
}
</style>