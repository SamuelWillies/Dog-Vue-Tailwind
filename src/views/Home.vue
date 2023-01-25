<template>
  <div class="content">
    <h1 class="text-xl">Welcome to the Alfie's Pet Supplies official website! We're the one stop shop for all your pet's needs!</h1>

    <img class="max-w-md mx-auto mt-2 w-64" src="pet-store.jpg"/>

    <div class="bg-bgcard max-w-sm mx-auto p-1 my-2">
      <h1 class="font-bold">Store Location</h1>
      <p>1 Guild Street</p>
      <p>Stratford-upon-Avon</p>
      <p>Warwickshire</p>
      <p>CV37 6QZ</p>
    </div>

    <p>Be sure to make to subscribe by making an account to get benefits such as a discount!</p>
    
    <h1 class="text-xl mt-5">Helpful Dog Care Tips:</h1>
    <GetTips myData="https://raw.githubusercontent.com/fatdaddy12/dog-json/main/tips.json"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import GetTips from '@/components/GetTips.vue'

export default {
    name: 'Home',
    components: {
      GetTips
    },
    beforeCreate() {
      document.title = "Alfie's Pet Supplies Website"
    }
  }
</script>
