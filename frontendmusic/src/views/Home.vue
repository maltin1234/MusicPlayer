<template>
  <div class="home">

    <PlayerComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerComponent from "@/components/PlayerComponent.vue";

export default {
  name: "Home",
  components: {
    PlayerComponent,
  },
};
</script>
