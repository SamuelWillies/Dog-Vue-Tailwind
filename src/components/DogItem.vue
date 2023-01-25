<template>
    <div class="dog">
        <h1 class="font-bold text-xl mb-1">{{dog.name}}</h1>
        <img :src="dog.image" :alt="dog.name" />
        <p>{{dog.description}}</p>
        <p>Age: {{dog.age}}</p>
        <p>Breed: {{dog.breed}}</p>
    </div>
</template>

<script>
export default {
    name: "DogItem",
    props: ["dog"],
}
</script>
