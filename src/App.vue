<template>
  <div id="app" class="container">
    <cart></cart>
    <!-- <img src="./assets/store-awning.png" style="width: 100%;"> -->
    <!-- <shelf></shelf> -->
    <cube></cube>
  </div>
</template>

<script>
import Cart from "./components/Cart.vue";
import Shelf from "./components/Shelf.vue";
import Cube from "./components/Cube.vue";


export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Cart,
    Shelf,
    Cube
  }
};
</script>

<style lang="scss">
  @import "src/assets/base.scss";
</style>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
// .shelf {
//   padding: 2rem;
//   padding-top: 0;
// }

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
