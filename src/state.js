import axios from "axios";
import { reactive } from "vue";
//API KEY : b61b93aca5c1ec2439265741a384f01d


export const state = reactive({
    film_url: 'https://api.themoviedb.org/3/search/movie?api_key=b61b93aca5c1ec2439265741a384f01d&query=',
    tv_url: 'https://api.themoviedb.org/3/search/tv?api_key=b61b93aca5c1ec2439265741a384f01d&query=',

    resultsMovie: "",
    resultsTV: "",
    pageCounter: 1,
    pagesMovieNumber: 0,
    pagesTvNumber: 0,
    maxPages: 0,
    lastSearched: "",

    searchFilms(input) {
        if (input == "")
            return
        else {
            this.lastSearched = input;
            axios(`${this.film_url}${input}`)
                .then(response => {
                    console.log(response.data);
                    this.pagesMovieNumber = parseInt(response.data.total_pages);
                    console.log(this.pagesMovieNumber);
                    this.resultsMovie = response.data.results;
                    console.log(this.resultsMovie, "FILM");
                })
            axios(`${this.tv_url}${input}`)
                .then(response => {
                    console.log(response.data);
                    this.pagesTvNumber = parseInt(response.data.total_pages);
                    console.log(this.pagesTvNumber);
                    this.resultsTV = response.data.results;
                    console.log(this.resultsTV, "SERIE TVS");
                })
        }
        this.maxPages = this.max(this.pagesMovieNumber, this.pagesTvNumber)
        console.log(this.maxPages, "NUMERO DI PAGINE");
    },

    changePage(param) {
        this.pageCounter += param;
        axios(`${this.film_url}${this.lastSearched}&page=${this.pageCounter}`)
            .then(response => {
                console.log(response.data);
                this.resultsMovie = response.data.results;
                console.log(this.resultsMovie, "FILM", "CHANGE PAGE");
            })

        axios(`${this.tv_url}${this.lastSearched}&page=${this.pageCounter}`)
            .then(response => {
                console.log(response.data);
                this.resultsTV = response.data.results;
                console.log(this.resultsTV, "SERIE TVS", "CHANGE PAGE");
            })
    },

    max(num1, num2) {
        if (num1 > num2)
            return num1;
        else
            return num2;
    }

})