<template>
    <div class="tip rounded mx-auto my-4 p-2 max-w-6xl bg-bgcard text-white">
        <h1 class="font-bold text-xl border-bottom-2">{{tip.title}}</h1>
        <p>{{tip.description}}</p>
    </div>
</template>

<script>
export default {
    name: "TipItem",
    props: ["tip"],
}
</script>
