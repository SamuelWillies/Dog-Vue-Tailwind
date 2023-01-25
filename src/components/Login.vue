<template>
    <div id="login">
        <div v-if="!authenticated" class="register bg-bgcard m-auto p-2 max-w-md rounded text-black flex flex-col">
            <input type="email" placeholder="Email" v-model="email" class="border-2 my-2" required />
            <input type="password" placeholder="Password" v-model="password" class="border-2 my-2" required />
            <button @click="signin" class="rounded bg-black text-white p-2 mb-2">Login</button>
            <button @click="resetPassword" class="rounded bg-black text-white p-2">Forgotten Password?</button>
                <p v-if="errMsg" class="text-white">{{ errMsg }}</p>
        </div>

        <div v-if="authenticated">
            <button @click="logout" class="myLogout text-green-400 px-2 mx-2">Logout</button>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
export default {
    name: "Login",
    data() {
        return {
            loggedIn: false,
            email: "",
            password: "",
            router: useRouter(),
            errMsg: "",
            auth: getAuth()
        };
    },
    mounted() {
        onAuthStateChanged(this.auth, (user) =>{
        if (user) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
        });
    },
    computed: {
        authenticated() {
            return this.loggedIn;
        }
    },
    methods: {
        signin() {
            console.log(this.auth);
            signInWithEmailAndPassword(this.auth, this.email, this.password)
            .then((data) => {
                console.log("Logged in");
                console.log(data);
                this.router.push("/");
            })
            .catch((error) => {
                console.log(error.code);
                switch (error.code) {
                    case "auth/invalid-email":
                        this.errMsg = "Invalid Email";
                        break;
                    case "auth/user-not-found":
                        this.errMsg = "No account with that email found";
                        break;
                    case "auth/wrong-password":
                        this.errMsg = "Password incorrect";
                        break;
                    default:
                        this.errMsg = "Email or password was incorrect";
                        break;
                }
            });
        },
        logout() {
            signOut(this.auth).then(() => {
                this.loggedIn = false;
                this.email = "";
                this.password = "";
                this.router.push("/");
            });
        },
        resetPassword() {
            //console.log(this.auth)
            sendPasswordResetEmail(this.auth, this.email)
            .then(() => {
                this.errMsg = "Reset email sent!"
            })
            .catch((error) => {
                console.log(error.code)
                switch (error.code) {
                    case "auth/invalid-email":
                        this.errMsg = "Please enter a valid email!";
                        break;
                    case "auth/user-not-found":
                        this.errMsg = "User not found!";
                        break;
                    default:
                        this.errMsg = "Please enter a user!";
                        break;
                }
            })
        }
        
    }
};
</script>