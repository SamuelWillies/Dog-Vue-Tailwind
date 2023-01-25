<template>
  <div id="nav" class="mx-auto my-2 flex flex-col md:flex-row border-b border-gray-500 pb-2 fixed w-full sticky">

    <div class="flex justify-center"> 
      <h1 class="text-2xl mx-2 sm:hidden" @click="hidden = !hidden">☰</h1>
      <h1 class="text-center md:text-left text-2xl font-bold mx-2">Alfie's Pet Supplies</h1>
    </div>
      
    <div :class="{hidden: hidden}">
      <ul class="list-none sm:flex sm:hidden p-0 flex-row my-1 mx-2 md:mx-5 justify-center md:justify-start">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/centre">Centre</router-link></li>
        <li><router-link to="/discount">Discount</router-link></li>

        <div class="flex flex-col" v-if="!this.loggedIn">
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/register">Subscribe</router-link></li>
        </div>

        <div v-if="this.loggedIn">
          <button @click="logout" class="myLogout px-2 hover:text-white">Logout</button>
        </div>
    
      </ul>
    </div>

    <div>
      <ul class="list-none hidden sm:flex p-0 flex-row my-1 mx-2 md:mx-5 justify-center md:justify-start">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/centre">Centre</router-link></li>
        <li><router-link to="/discount">Discount</router-link></li>

        <div class="flex" v-if="!this.loggedIn">
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/register">Subscribe</router-link></li>
        </div>

        <div v-if="this.loggedIn">
          <button @click="logout" class="myLogout px-2 hover:text-white">Logout</button>
        </div>
    
      </ul>
    </div>
    
  </div>
  <router-view/>
</template>

<script>
//import Login from '@/components/Login.vue'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  name: 'Navigation',
  //components: { Login }
    data() {
        return {
            loggedIn: false,
            auth: getAuth(),
            hidden: true
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
    methods: {
          logout() {
            signOut(this.auth).then(() => {
                this.loggedIn = false;
                this.email = "";
                this.password = "";
                window.location.href = "/"
            });
        }
    }
}
</script>