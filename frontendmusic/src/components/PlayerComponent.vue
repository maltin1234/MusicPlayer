<template>
  <div class="player">
    <b-container>
      <b-row>
        <b-col cols="auto" class="mr-auto p-3">
          <b-button><i class="bi bi-chevron-down"></i></b-button>
        </b-col>

        <b-col cols="12" class="p-5">
          <b-img
            thumbnail
            fluid
            src="https://picsum.photos/250/250/?image=54"
            alt="Image 1"
          ></b-img>
        </b-col>
        <b-col cols="12">
          <p class="text">Song Name</p>
        </b-col>
        <b-col>
          <p class="text">Artist</p>
        </b-col>
      </b-row>
      <b-row>
        <div>
          <label for="range-1">Example range with min and max</label>
          <b-form-input
            id="range-1"
            v-model="value"
            type="range"
            min="0"
            max="5"
          ></b-form-input>
        </div>
      </b-row>
      <b-row>
        <b-col cols="2"><i class="bi bi-list-ul"></i></b-col>
        <b-col cols="3"><i class="bi bi-skip-backward-fill"></i></b-col>
        <b-col cols="3"><i class="bi bi-pause-circle"></i></b-col>
        <b-col cols="3"><i class="bi bi-skip-forward-fill"></i></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "PlayerComponent",
  props: {
    msg: String,
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
