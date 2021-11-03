<template>
  <div id="home ">
    <search-component></search-component>
    <player-component />
  </div>
</template>

<script>
import PlayerComponent from "../components/PlayerComponent.vue";
// @ is an alias to /src

import SearchComponent from "../components/SearchComponent.vue";

export default {
  name: "Home",
  components: {
    SearchComponent,
    PlayerComponent,
  },
};
</script>
<style lang="sass"></style>
