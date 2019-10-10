<template>
  <div id="app">
    <MyNavbar></MyNavbar>
    <router-view/>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar";

export default {
  name: 'app',
  components: {
    MyNavbar
  }
}
</script>

<style>
#app {

}
</style>
