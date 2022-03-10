<template>
  <div class="mobile-screen">
    <b-container>
      <div>
        <b-navbar type="dark" variant="dark">
          <b-nav-form>
            <b-form-input
              class="mr-sm-2"
              placeholder="Search"
              v-model="keyWord"
            ></b-form-input>
            <div></div>
            <b-button
              @click="search(keyWord)"
              variant="outline-success"
              class="my-2 my-sm-0"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar>
      </div>

      <slot name="name"> Hello</slot>

      <b-row>
        <ul v-if="info" class="list-group mx-auto">
          <li
            v-for="(item, index) in info.items"
            :key="index.etag"
            class="list-group-item list-items"
          >
            <b-col cols="12" class="">
              <p class="text" @click="addVideo(item.id.videoId)">
                {{ item.snippet.title }}
              </p>
            </b-col>
          </li>
        </ul>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PlayerComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      info: null,
      videoId: "s7pCASi_JhA",
      searchVideo: null,
      keyWord: "",
      result: null,

      selected: "A",
      options: [
        { item: "playList", name: "Option A" },
        { item: "artist", name: "Option B" },
      ],
    };
  },
  // created: function () {
  //   const _ = require("lodash");
  //   // _.debounce is a function provided by lodash to limit how
  //   this.debouncedSearch = _.debounce(this.search, 500);
  // },

  // watch: {
  //   keyWord() {
  //     if (!this.keyword) return;
  //     this.debouncedSearch();
  //   },
  // },
  mounted() {},

  methods: {
    search() {
      const Key = "AIzaSyDtcPvVyjnxX--cDD2MHwRs649zHEx3ij4";
      axios
        .get("https://youtube.googleapis.com/youtube/v3/search", {
          params: {
            part: "snippet",
            maxResults: 5,
            q: this.keyWord,
            key: Key,
          },
        })
        .then((response) => (this.info = response.data));
    },

    addVideo(id) {
      this.videoId = id;
      console.log(id);
      console.log(this.videoId);
      this.$emit("updateVideoId", this.videoId);
      console.log("info", this.info);
      const result = this.info.items.map((x) => x.id.videoId);
      console.log(result);
      this.$emit("videoListIds", result);
    },
    // videoToPlaylist(payload) {
    //   console.log(this.videoId);
    //   this.videoId = payload;

    //   this.$store.dispatch("addTodo", payload);
    //   console.log(this.$store.state.playlist);
    // },
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
.list-items {
  background-color: #0000006b !important;
  width: 800px;
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
  color: rgb(250, 245, 245);
  cursor: pointer;
}
</style>
