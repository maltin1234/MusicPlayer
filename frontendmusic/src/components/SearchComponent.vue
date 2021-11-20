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
            <div>
              <b-form-select
                v-model="selected"
                :options="options"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-select>
              <div class="mt-3">
                Selected: <strong>{{ selected }}</strong>
              </div>
            </div>
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
              <b-button
                class="btn btn-info"
                @click="videoToPlaylist(item.id.videoId)"
              />
            </b-col>
          </li>
        </ul>
      </b-row>
    </b-container>
    {{ searchVideo }}
    {{ keyWord }}
    <b-button
      variant="outline-success"
      class="my-2 my-sm-0"
      @click="videoListIds()"
    ></b-button>
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
        { item: "A", name: "Option A" },
        { item: "B", name: "Option B" },
        { item: "D", name: "Option C", notEnabled: true },
        { item: { d: 1 }, name: "Option D" },
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

    videoListIds() {
      console.log("info", this.info);

      const result = this.info.items.map((x) => x.id.videoId);
      console.log(result);
      this.$emit("videoListIds", result);
    },

    addVideo(id) {
      this.videoId = id;
      console.log(id);
      console.log(this.videoId);
      this.$emit("updateVideoId", this.videoId);
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
