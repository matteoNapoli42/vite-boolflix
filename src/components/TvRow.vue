<script>
export default {
    name: "TvRow",
    props: {
        elem: Object,
    },

    data() {
        return {
            defaultImg: "../assets/img/img_not_aviable.jpg",
            flag: "",
        }
    },
    methods: {
        starRating() {
            this.fullStar = this.elem.vote_average / 2;
            this.fullStar = Math.ceil(this.fullStar);
            this.emptyStar = 5 - this.fullStar;
            console.log(this.fullStar, "/", this.emptyStar);
        },
        getFlag() {
            this.flag = this.elem.original_language.toUpperCase();
            console.log(this.flag);

            if (this.flag == "ZH")
                this.flag = "CN";
            else if (this.flag == "EN")
                this.flag = "GB";
            else if (this.flag == "JA")
                this.flag = "JP"
            console.log(this.flag);
        }
    },


    created() {
        this.starRating();
        this.getFlag();
    },
}



</script>



<template>
    <li :style="{ backgroundImage: `${elem.poster_path} != null ? 'url('https://image.tmdb.org/t/p/w342/${elem.poster_path}')' : '${this.defaultImg}'` }"
        style="background-size: cover;" class="col-2 searchedItem">
        <div class="container itemInfo text-white ">
            <span>
                Titolo : {{ elem.name }}
            </span>
            <br>
            <span>
                Titolo Originale : {{ elem.original_name }}
            </span>
            <br>

            <img :src="`https://flagsapi.com/${this.flag}/flat/32.png`">
            <br>
            <span class="d-flex align-items-center">
                Voto:
                <i v-for="n in fullStar" class="fa-solid fa-star" style="color: #f8fb60;"></i>
                <i v-for="m in emptyStar" class="fa-solid fa-star" style="color: #8f8f8f;"></i>
            </span>
            <span class="overview">
                Overview : {{ elem.overview }}
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

.itemInfo {
    display: none;
    width: 100%;
    height: 100%;
}

.overview {
    word-spacing: -1px;
    font-size: x-small;
    overflow-y: scroll;
}

li:hover .itemInfo {
    display: block;
    background-color: rgba(5, 5, 5, 1);
}
</style>