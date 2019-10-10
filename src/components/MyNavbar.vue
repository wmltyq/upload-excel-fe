<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">Vue-SpringBoot</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Script</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "MyNavbar"
    }
</script>

<style scoped>

</style>