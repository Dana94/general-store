<template>
  <div class="col-6 col-md-4 case">
    <div class="row">
      <div class="col-12 level-1">
        <div class="tag">{{item.price | currency }}</div>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          :data-target="'#'+modalId"
        >Select</button>
      </div>

      <div class="col-12">
        <!-- TODO: item.imgSrc for 'apple.png'-->
        <img :src="'src/assets/food/'+ item.imgSrc" alt class="img-fluid food-img">
      </div>
    </div>
    <!-- <div class="amount">{{item.inStock}}</div> -->

    <!-- <div class="total">{{item.food}}</div> -->
    <app-modal :item="item" :modalId="modalId"></app-modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  props: ["item"],
  data() {
    return {
      modalId: this.item.food + "Modal"
    };
  },
  methods: {},
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
  // height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  cursor: pointer;

  .level-1 {
    display: flex;
    justify-content: space-between;
    padding: 0;
    align-items: center;
    padding-top: .5rem;
  }
}

.tag {
  padding: 0 1rem;
  background-color: wheat;
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
  // showing the modal messes this up
  // max-height: 80%;
  width: 9rem;
}
</style>

