<template>
  <div class="row">
    <div class="col-12 col-sm-4 case">
      <!-- <button class="btn btn-primary">{{total}}</button> -->
      <p>{{total}}</p>
    </div>
    <div class="col-12 col-sm-4 case">
      <img src="../assets/cart.png" alt class="img-fluid">
    </div>
    <div class="col-12 col-sm-4 case">
      <div class="row">
        <!-- <button class="btn btn-primary" @click="showList">List</button> -->
      </div>
      <div class="row">
        <!-- <button class="btn btn-primary" @click="checkout">Checkout</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["total"])
  }
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
