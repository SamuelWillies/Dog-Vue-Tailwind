<template>
    <div>
        <div class="content text-xl mx-2 xl:mx-auto max-w-7xl text-black bg-white rounded p-4">
            <h1>Alfie's Pet Supplies Discount Voucher</h1>
            <h1 class="text-2xl text-center mt-10">Thank you for subscribing</h1>
            <h1 class="text-2xl text-center mb-5 break-words">{{username}}</h1>
            <p>Print this voucher off and show it in store for a discount!</p>
        </div>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"

export default {
    name: "Discount",
    data() {
        return {
            username: ''
        }
    },
    beforeCreate() {
        document.title = 'Discount'
    },
    beforeMount() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
                this.username = user.email;
            }
        })
    }
}
</script>
