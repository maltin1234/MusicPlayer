<template>

<div>
     <b-button  @click="getAlbums()"  variant="outline-primary">Button</b-button> 
    
    <div>

</template>

<script>

//import axios from "axios";
export default {
  components: { SearchComponent },
  name: "PlayListComponent",
  props: {
    msg: String,
  },
  data() {
    return {
     
    };
  },
  mounted() {},
  methods: {
   getAlbums() {
       const sendGetRequest = async () => {
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendGetRequest();
    },
    playVideo() {
      this.player.playVideo();
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
<style></style>
