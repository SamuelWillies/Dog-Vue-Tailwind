<template>
    <div id="dogContainer" class="flex flex-row flex-wrap justify-center">
        <DogItem class="container w-72" v-for="(dog, id) in myJson.items" :key="id" :dog="dog" />
    </div>
</template>

<script>
import DogItem from "@/components/DogItem.vue";

export default {
    name: "GetDogs",
    props: ["myData"],
    components: {
        DogItem,
    },
    data() {
        return{
            myJson: [],
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            fetch(this.myData)
                .then((stream) => stream.json())
                .then((data) => (this.myJson = data))
                .catch((error) => console.error(error));
            }
        }
}
</script>