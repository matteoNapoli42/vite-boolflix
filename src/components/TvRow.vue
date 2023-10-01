<script>
export default {
    name: "TvRow",
    props: {
        elem: Object,
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
        style="background-size: cover;" class="col-2 searchedItem">
        <h3>{{ elem.name }}</h3>
        <h5>{{ elem.original_name }}</h5>
        <div class="d-flex gap-5" style="background: ;">
            <img
                :src="`https://flagsapi.com/${elem.original_language.toUpperCase() == 'EN' ? 'GB' : (elem.original_language.toUpperCase() == 'JA' ? 'JP' : (elem.original_language.toUpperCase() == 'ZH' ? 'CN' : ''))}/flat/64.png`">
            <span class="d-flex">
                <i v-for="n in fullStar" class="fa-solid fa-star" style="color: #f8fb60;"></i>
                <i v-for="m in emptyStar" class="fa-solid fa-star" style="color: #8f8f8f;"></i>
            </span>
        </div>
    </li>
</template>


<style scoped>
ul {
    list-style: none;
}

.searchedElement {
    height: 350px;

}
</style>