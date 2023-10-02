import axios from "axios";
import { reactive } from "vue";
//API KEY : b61b93aca5c1ec2439265741a384f01d


export const state = reactive({
    film_url: 'https://api.themoviedb.org/3/search/movie?api_key=b61b93aca5c1ec2439265741a384f01d&query=',
    tv_url: 'https://api.themoviedb.org/3/search/tv?api_key=b61b93aca5c1ec2439265741a384f01d&query=',

    resultsMovie: "",
    resultsTV: "",

    searchFilms(input) {
        if (input == "")
            return
        else {
            axios(`${this.film_url}${input}`)
                .then(response => {
                    console.log(response);
                    this.resultsMovie = response.data.results;
                    console.log(this.resultsMovie, "FILM");
                })
            axios(`${this.tv_url}${input}`)
                .then(response => {
                    console.log(response.data);
                    this.resultsTV = response.data.results;
                    console.log(this.resultsTV, "SERIE TVS");
                })

        }
    }
})