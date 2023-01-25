<template>
    <div id="tipContainer" class="w-full justify-center">
        <TipItem class="container justify-center" v-for="(tip, id) in myJson.tips" :key="id" :tip="tip" />
    </div>
</template>

<script>
import TipItem from "@/components/TipItem.vue";

export default {
    name: "GetTips",
    props: ["myData"],
    components: {
        TipItem,
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