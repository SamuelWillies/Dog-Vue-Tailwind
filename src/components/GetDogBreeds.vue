<template>
    <div id="dogBreedContainer">
        <div v-if="errored">
            <p>Error fetching data!</p>
        </div>
        <div v-else>

            <p v-if="loading">Loading...</p>

            <div v-else/>
            
            <select class="text-black mb-2 mx-auto w-72" v-model="selectedBreed">
                <option v-for="breed in myData" :key="breed.id" :value="breed">{{breed.name}}</option>
            </select>  

            <div v-if="selectedBreed != null" class="breed">
                <p class="font-bold text-xl mb-1">{{selectedBreed.name}}</p>
                <img :src="selectedBreed.image.url"/>
                <p>Life span: {{selectedBreed.life_span}}</p>
                <p>Temperament: {{selectedBreed.temperament}}</p>
                <p>Expected weight (g): {{selectedBreed.weight.metric}}</p>
                <p>Expected height (cm): {{selectedBreed.height.metric}}</p>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "GetDogBreeds",
    components: {},
    data() {
        return {
            myData: [],
            loading: true,
            errored: false,
            selectedBreed: null
        };
    },
    beforeMount() {
        this.getBreeds();
    },
    methods: {
        getBreeds() {
            axios
            .get("https://api.thedogapi.com/v1/breeds")
            .then((response) => {
                this.myData = response.data;
            })
            .catch((error) => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => (this.loading = false));
        },
    }
};
</script>
