<template>
    <div id="productContainer" class="flex flex-row flex-wrap justify-center">
        <ProductItem class="container w-72" v-for="(product, id) in myJson.items" :key="id" :product="product" />
    </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";

export default {
    name: "GetProducts",
    props: ["myData"],
    components: {
        ProductItem,
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