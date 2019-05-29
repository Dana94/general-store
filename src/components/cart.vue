<template>
  <div class="row">
    <div class="col-12 col-sm-4 case">
      <!-- <button class="btn btn-primary">{{total}}</button> -->
      <p>{{total | convertTotal}}</p>
    </div>
    <div class="col-12 col-sm-4 case">
      <img src="../assets/cart.png" alt class="img-fluid">
    </div>
    <div class="col-12 col-sm-4 case">
      <div class="row">
        <ul>
          <li v-for="item in list" :key="item.id">{{item.food}} ({{item.amount}})</li>
        </ul>
      </div>
      <div class="row">
        <!-- <button class="btn btn-primary" @click="checkout">Checkout</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["total", "list"])
  },
  methods: {
    ...mapActions(["addItem"])
  },
  filters: {
    convertTotal(value) {
      value = value.toString().substring(0, value.toString().indexOf('.') + 3);
      return `$${value}`;
    }
  }
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
