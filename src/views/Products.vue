<template>
  <div class="content">
    <h1 class="text-xl">Products</h1>
    <p>Here is a selection of products available at Alfie's Pet Supplies! Keep in mind that they currently can only be ordered over the phone or in store!</p>
    <p>To order our products, please call this number:</p>
    <p class="font-bold text-xl">01753 866338</p>
    <GetProducts myData="/products.json"/>
  </div>
</template>


<script>
// @ is an alias to /src
import GetProducts from '@/components/GetProducts.vue'

export default {
  name: 'Products',
  components: {
    GetProducts
  },
    beforeCreate() {
        document.title = 'Products'
    },
}
</script>
