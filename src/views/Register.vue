<template>
    <div class="content">
        <h1 class="text-xl mb-2">Subscribe now to gain benefits such as a discount! After you subscribe, make sure you head to the discount page linked above!</h1>
        <div class="register bg-bgcard m-auto p-2 max-w-md rounded text-black flex flex-col">
            <input type="text" placeholder="Email" class="border-2 my-2" v-model="email" />
            <input type="password" placeholder="Password" class="border-2 my-2" v-model="password" />
            <button @click="register" class="rounded bg-black text-white p-2">Subscribe</button>
            <p v-if="errMsg" class="text-white">{{ errMsg }}</p>
        </div>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
    name: 'Register',
    data() {
        return {
            errMsg: ""
        }
    },
    methods: {
        register() {
            createUserWithEmailAndPassword(getAuth(), this.email, this.password)
            .then((data) => {
                console.log("Successfully registered!");
                console.log(data)
                this.$router.push('/')
            })
            .catch((error) => {
                console.log(error.code);
                switch (error.code) {
                    case "auth/missing-email":
                        this.errMsg = "Please enter an email address!";
                        break;
                    case "auth/weak-password":
                        this.errMsg = "Password is too weak! Please have minimum 6 characters!";
                        break;
                    case "auth/email-already-in-use":
                        this.errMsg = "This email is already in use!";
                        break;
                    case "auth/admin-restricted-operation":
                        this.errMsg = "Please enter details!"
                        break;
                    default:
                        this.errMsg = "An error has occurred! Please try another email address!";
                        break;
                }
            })
        }
    },
    beforeCreate() {
        document.title = 'Register'
    },
}

</script>