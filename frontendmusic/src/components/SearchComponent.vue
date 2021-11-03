<template>
  <div class="mobile-screen">
    <b-container>
      <div>
        <b-navbar type="light" variant="light">
          <b-nav-form>
            <b-form-input
              class="mr-sm-2"
              placeholder="Search"
              v-model="keyWord"
            ></b-form-input>
            <b-button
              @click="search(keyWord)"
              variant="outline-success"
              class="my-2 my-sm-0"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar>
        {{ videoId }}
      </div>

      <b-row>
        <ul v-if="info" class="list-group">
          <li
            v-for="(item, index) in info.items"
            :key="index.etag"
            class="list-group-item"
          >
            <b-col cols="12">
              <p class="text" @click="addVideo(item.id.videoId)">
                {{ item.snippet.title }}
              </p>
            </b-col>
          </li>
        </ul>
      </b-row>
    </b-container>
    {{ searchVideo }}
    {{ keyWord }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PlayerComponent",
  props: {
    msg: String,
  },
  data: () => ({
    info: null,
    videoId: "s7pCASi_JhA",
    searchVideo: null,
    keyWord: "",
    selected: false,
  }),
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
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log(" we are watching!!!");
    },
    addVideo(id) {
      this.videoId = id;
      console.log(id);
      console.log(this.videoId);
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
  color: rgb(5, 1, 1);
}
</style>
