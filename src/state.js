import axios from "axios";
import { reactive } from "vue";
//API KEY : b61b93aca5c1ec2439265741a384f01d


export const state = reactive({
    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=b61b93aca5c1ec2439265741a384f01d&query=',
    results: "",

    searchFilms(input) {
        if (input == "")
            return
        else {
            axios(`${this.base_url}${input}`)
                .then(response => {
                    console.log(response.data);

                    this.results = response.data.results;
                    console.log(this.results);
                })
        }
    }
})