<template>
  <div class="hello">
    <div class="container">
      
      <div class="row">
       <b-button-group class="mx-1 mx-auto playbar">
      <b-button>Previous</b-button>
      <b-button>Play/Pause</b-button>
      <b-button>Skip</b-button>
    </b-button-group>
    </div>
    </div>
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
.playbar{
  width: 30%
 
}
</style>
