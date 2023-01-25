<template>
    <div id="login" class="content">
        <h1 class="text-xl mb-2">Ensure you log in to be eligible to claim your discount!</h1>
        <Login />
    </div>
</template>

<script>
import Login from '@/components/Login.vue'
export default {
    name: "LoginPage",
    components: { Login },
    beforeCreate() {
        document.title = 'Login'
    },
}
</script>