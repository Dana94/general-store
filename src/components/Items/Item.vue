<template>
  <div class="col-6 col-md-4 case" @click="addFood">
    <img src="../../assets/food/apple.png" alt class="img-fluid">
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >Launch demo modal</button>
    <div class="amount">{{item.inStock}}</div>
    <div class="cost">{{item.price | currency }}</div>
    <div class="total">{{item.food}}</div>
    <app-modal></app-modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  props: ["item"],
  methods: {
    addFood() {
      this.$store.dispatch("addItem", this.item);
      this.$store.dispatch("takeItem", this.item);
    }
  },
  components: {
    appModal: Modal
  },
  filters: {
    currency(value) {
      return `$${value}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.case {
  // background-color: #ffd2a6;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  cursor: pointer;
}

.cost {
  // background-color: yellow;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
}
.total {
  // background-color: yellow;
  height: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px;
}

img {
  max-height: 80%;
}
</style>

