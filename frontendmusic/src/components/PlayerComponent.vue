<template>
  <div class="mobile-screen">
    <b-container>
      <search-component
        v-on:updateVideoId="updateVideoId($event)"
        v-on:videoListIds="videoListIds($event)"
      >
        <template v-slot:name>
          <youtube
            :video-id="videoId"
            ref="youtube"
            @playing="playing"
          ></youtube>

          <div class="playbar">
            <div class="navbar navbar-dark bg-dark">
              <div class="row mx-auto">
                <div class="col col-3">
                  <button class="play-buttons" @click="prevVideo">
                    <i class="bi bi-arrow-left-square-fill fa-2x"></i>
                  </button>
                </div>
                <div class="col col-3">
                  <button class="play-buttons" @click="playVideo">
                    <i class="bi bi-play-circle fa-2x"></i>
                  </button>
                </div>
                <div class="col col-3">
                  <button class="play-buttons" @click="stopVideo">
                    <i class="bi bi-pause-fill fa-2x"></i>
                  </button>
                </div>
                <div class="col col-3">
                  <button class="play-buttons" @click="nextVideo">
                    <i class="bi bi-arrow-right-square-fill fa-4x"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </template>
      </search-component>
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
      playlistIds: null,
      videoId: null,
    };
  },
  mounted() {},
  methods: {
    updateVideoId(payload) {
      this.videoId = payload;
    },

    videoListIds(payload) {
      this.playlistIds = payload;

      console.log(payload, "payload");
    },
    nextVideo() {
      console.log(this.playlistIds);
      let index = this.playlistIds.indexOf(this.videoId) + 1;
      console.log(index);
      console.log(this.playlistIds[index]);
      this.videoId = this.playlistIds[index];
    },
    prevVideo() {
      if (this.playlistIds.indexOf(this.videoId) >= 1) {
        let index = this.playlistIds.indexOf(this.videoId) + -1;
        console.log(this.playlistIds[index]);
        this.videoId = this.playlistIds[index];
      } else {
        console.log("error");
      }
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
.play-buttons {
  border-radius: 20%;
  width: 80px;
  height: 40px;
  background-color: #fdfbfe8c;
  font-size: 1.5em;
}
</style>
