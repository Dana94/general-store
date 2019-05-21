<template>
  <div id="app" class="container">
    <img src="./assets/store-awning.png" style="width: 100%;">

    <div class="row shelf">
      <item v-for="item in 5" :key="item.id"></item>
    </div>
  </div>
</template>

<script>
import Item from "./components/Item.vue";

export default {
  name: "app",
  data() {
    return {

    };
  },
  components: {
    Item
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.shelf {
  padding: 2rem;
  padding-top: 0;
}

h1,
h2 {
  font-weight: normal;
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
</style>
