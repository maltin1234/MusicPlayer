<template>
  <div id="home "><player-component></player-component></div>
</template>

<script>
// @ is an alias to /src

import PlayerComponent from "../components/PlayerComponent.vue";

export default {
  name: "Home",
  components: {
    PlayerComponent,
  },
};
</script>
<style scoped>
.full-screen {
}

h3 {
  font-size: 2em;
  text-shadow: 0px 4px 3px #000000;
}
</style>
