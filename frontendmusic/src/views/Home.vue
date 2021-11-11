<template>
  <div id="home ">
    <player-component />
  </div>
</template>

<script>
import PlayerComponent from "../components/PlayerComponent.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    PlayerComponent,
  },
};
</script>
<style lang="sass"></style>
