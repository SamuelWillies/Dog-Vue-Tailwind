<template>
    <div class="product" :class="{ 'bg-bgdiscount': product.endOfLife, 'bg-bgcard': !product.endOfLife }">

        <h1 class="font-bold text-xl">{{product.name}}</h1>

        <img :src="product.image" :alt="product.name" />

        <p>{{product.description}}</p>

        <div v-for="variant in product.variants" :key="variant.id">
            <p>{{ variant.colour }}</p>
        </div>

        <div v-if="!product.endOfLife">
            <p class="font-bold text-2xl text-center">£{{product.price}}</p>
        </div>

        <div v-else class="">
            <p v-if="product.endOfLife" class="font-bold text-center text-2xl">End of Life Discount!!</p>
            <p class="text-xl text-center line-through">£{{product.price}}</p>
            <p class="font-bold text-2xl text-center">£{{ (product.price * 0.8).toFixed(2) }}</p>
        </div>

    </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: ["product"],
}
</script>
