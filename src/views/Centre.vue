<template>
    <div class="content">
        <h1 class="text-xl">Hills Rescue Centre</h1>
        <p>We sponsor Hills Rescue Centre, which is a rescue dog centre! A portion of our sales are donated to the centre.</p>
        <p>Please take a look at some of the dogs that are ready to find a new home!</p>
        <GetDogs myData='/dogs.json'/>

        <h1 class="text-xl">Breeds</h1>
        <p class="mb-2">Unsure about any breeds? Here is a handy list of breeds to help get the information you need!</p>

        <GetDogBreeds />
        
    </div>
</template>

<script>
import GetDogs from '@/components/GetDogs.vue'
import GetDogBreeds from '@/components/GetDogBreeds.vue'

export default {
  name: 'Centre',
  components: {
    GetDogs,
    GetDogBreeds
  },
    beforeCreate() {
        document.title = 'Hills Rescue Centre'
    },
}
</script>