<template>
  <div class="row">
    <div class="col-6 col-sm-4">
      <p>{{total | convertTotal}}</p>
    </div>
    <div class="col-6 col-sm-4">

        <!-- click on cart to get list??? -->
        <!-- <ul>
          <li v-for="item in list" :key="item.id">{{item.food}} ({{item.amount}})</li>
        </ul> -->

      <!-- <img src="src/assets/cart.png" alt class="img-fluid"> -->
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
  }
};
</script>

<style scoped>
button {
  cursor: pointer;
}

div.row {
  padding: 2rem;
}
</style>
