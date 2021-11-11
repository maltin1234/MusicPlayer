<template>
  <div class="mobile-screen">
    <b-container>
      <search-component v-on:updateVideoId="updateVideoId($event)" />

      <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>

      <button @click="playVideo">play</button>
      <button @click="stopVideo">stop</button>
      <button @click="nextVideo">next</button>
      <b-row>
        <b-col>
          <ul v-if="info">
            <li v-for="(item, index) in info.items" :key="index.etag">
              <p class="text">{{ item.snippet.videoId }}</p>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SearchComponent from "./SearchComponent.vue";
//import axios from "axios";
export default {
  components: { SearchComponent },
  name: "PlayerComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      info: null,
      videoId: "lG0Ys-2d4MA",
    };
  },
  mounted() {},
  methods: {
    updateVideoId(payload) {
      this.videoId = payload;
    },
    nextVideo() {
      this.player.nextVideo();
    },
    playVideo() {
      this.player.playVideo();
    },
    stopVideo() {
      this.player.stopVideo();
    },
    playing() {
      console.log(" we are watching!!!");
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css");
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.row {
  border: 3px solid red;
}
.col {
  border: 3px dotted blue;
}
.container {
  border: 1px solid yellow;
}
.player {
  height: 100vh;
  width: 100vw;
  background-size: cover;

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.text {
  color: white;
}
</style>
